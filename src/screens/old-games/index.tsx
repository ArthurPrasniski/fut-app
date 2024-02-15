import { useEffect, useState } from "react"
import { View, Text, FlatList, Touchable, TouchableOpacity } from "react-native";
import { Container } from "../../Global";
import { CheckboxStyled, Date, Header, PlayerCard, Subtitle, Title, TitleHeader } from "./stylest";
import { BoxFlatList } from "../sort-team/styles";
import { ButtonMain } from "../../components/buttonmain";
import { database } from "../../database";

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
  }, [])
  
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
      <Header>
        <TitleHeader>Partidas Anteriores</TitleHeader>
      </Header>
      <BoxFlatList style={{ height: "90%", marginBottom: 18 }}>
        <Subtitle>Gerencie aqui as suas partidas</Subtitle>
        <FlatList data={games} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('GamePayments', {gameId: item.id}) }>
          <PlayerCard>
            <Title>{item.nome}</Title>
            <Date>{item.data?.split('T')[0].split('-').reverse().join('/')}</Date>
          </PlayerCard>
          </TouchableOpacity>
        )} />
      </BoxFlatList>
      <ButtonMain onPress={() => navigation.navigate('home')} text="Voltar" />
    </Container>
  )
}