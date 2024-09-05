import { useEffect, useState } from "react"
import { View, Text, FlatList, Touchable, TouchableOpacity } from "react-native";
import { Container } from "../../Global";
import { AlertContainer, AlertText, CheckboxStyled, ContainerGameDescription, Date, Header, PlayerCard, Subtitle, Title, TitleHeader } from "./stylest";
import { BoxFlatList } from "../sort-team/styles";
import { ButtonMain } from "../../components/buttonmain";
import { database } from "../../database";
import Ionicons from '@expo/vector-icons/Ionicons'
import { Navbar } from "../../components/navbar";
import { ArrowBigLeftIcon } from "lucide-react-native";

interface ICheckedStates {
  [key: number]: boolean;
}

export const OldGames = ({ navigation }: any) => {
  const [games, setGames] = useState<any>([])
  const [checkedStates, setCheckedStates] = useState<ICheckedStates>({});

  const getData = async () => {
    try {
      const gamesCollection = await database.get('games').query().fetch();
      setGames(gamesCollection);
    } catch (e) {
      alert('Erro ao recuperar os Jogos anteriores');
    }
  };
  useEffect(() => {
    getData()
  }, [games])

  const handleCheckChange = async (id: number, value: boolean) => {
    setCheckedStates(prevState => ({ ...prevState, [id]: value }));

    const existingData = ''
    if (existingData !== null) {
      let games = JSON.parse(existingData);
      const gameIndex = games.findIndex((game: any) => game.id === id);
      if (gameIndex !== -1) {
        games[gameIndex].isPayed = value;
      }
    }
  };

  return (
    <Container>
      <BoxFlatList>
        <Header>
          <TouchableOpacity onPress={() => navigation.navigate('home')}>
            <ArrowBigLeftIcon size={24} color="#43C478" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('home')}>
            <TitleHeader>Partidas Anteriores</TitleHeader>
          </TouchableOpacity>
        </Header>
        <Subtitle>Gerencie aqui as suas partidas</Subtitle>
        {games.length === 0 &&
          <AlertContainer>
            <Ionicons name="warning-sharp" size={44} color="#43C478" />
            <AlertText>Você ainda não tem partidas criadas</AlertText>
          </AlertContainer>}
        <FlatList data={games} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('GamePayments', { gameId: item.id })}>
            <PlayerCard>
              <ContainerGameDescription>
                <Title>{item.nome}</Title>
                <Date>{item.data?.split('T')[0].split('-').reverse().join('/')}</Date>
              </ContainerGameDescription>
            </PlayerCard>
          </TouchableOpacity>
        )} />
      </BoxFlatList>
    </Container>
  )
}