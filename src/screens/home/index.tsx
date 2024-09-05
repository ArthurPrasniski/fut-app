import { Container, SubTitle } from "../../Global"
import { Title, ContainerText, TextLastGames, TitleCard, DataText, DescriptionText, TotalValue, ViewRow, TotalPlayers, TitleGame } from "./styles"
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons'
import { FlatList, TouchableOpacity} from "react-native";
import { ContainerGameDescription, PlayerCard } from "../old-games/stylest";
import { useEffect, useState } from "react";
import { database } from "../../database";

export const Home = ({ navigation }: any) => {
  const [games, setGames] = useState<any>([])

  const getData = async () => {
    try {
      const gamesCollection = await database.get('games').query().fetch();
      const playersCollection = await database.get('players').query().fetch();

      const last3Games = gamesCollection.slice(-3);
      const gamesWithPlayers = last3Games.map((game: any) => {
        const gamePlayers = playersCollection.filter((player: any) => player.game_id === game.id);
        return { ...game, players: gamePlayers };
      });
      setGames(gamesWithPlayers);
    } catch (e) {
      alert('Erro ao recuperar os Jogos anteriores');
    }
  };

  useEffect(() => {
    getData()
  }, [games])

  return (
    <Container>
      <StatusBar style="light" />
      <ContainerText>
        <Title>FUT APP</Title>
        <SubTitle>Organize sua partida de futebol</SubTitle>
      </ContainerText>
      <TextLastGames>Últimas 3 partidas</TextLastGames>
      <FlatList data={games} renderItem={({ item }) => {
        const payedPlayers = item.players?.filter((player: any) => player._raw.isPayed)
        const unpayedPlayers = item.players?.filter((player: any) => !player._raw.isPayed)
        return (
          <TouchableOpacity onPress={() => navigation.navigate('GamePayments', { gameId: item._raw.id })}>
            <PlayerCard>
              <ContainerGameDescription>
                <ViewRow>
                  <TitleGame>{item._raw.nome}</TitleGame>
                  <DataText>{item._raw.data?.split('T')[0].split('-').reverse().join('/')}</DataText>
                </ViewRow>
                <Ionicons name="chevron-forward" size={24} color="#43C478" />
              </ContainerGameDescription>
              <ViewRow>
                <DescriptionText>Total de jogadores:</DescriptionText>
                <TotalPlayers>{item.players.length}</TotalPlayers>
              </ViewRow>
              <ViewRow>
                <DescriptionText>Jogadores Pagantes:</DescriptionText>
                <TotalValue paid>{payedPlayers.length}</TotalValue>
              </ViewRow>
              <ViewRow>
                <DescriptionText>Jogadores Não Pagantes:</DescriptionText>
                <TotalValue paid={false}>{unpayedPlayers.length}</TotalValue>
              </ViewRow>
            </PlayerCard>
          </TouchableOpacity>
        );
      }} />
    </Container>
  )
}