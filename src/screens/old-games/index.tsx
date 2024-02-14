import { useEffect, useState } from "react"
import { View, Text, FlatList } from "react-native";
import { Container } from "../../Global";
import { CheckboxStyled, Date, Header, HeaderSubtitle, PlayerCard, Subtitle, Title } from "./stylest";
import { BoxFlatList } from "../sort-team/styles";
import { ButtonMain } from "../../components/buttonmain";

interface ICheckedStates {
  [key: number]: boolean;
}

export const OldGames = ({ navigation }: any) => {
  const [game, setGame] = useState<any>({})
  const [checkedStates, setCheckedStates] = useState<ICheckedStates>({});

  const getData = async () => {
    try {
      const jogadores = ''
      setGame(jogadores ? JSON.parse(jogadores) : []);
    } catch (e) {
      alert('Erro ao recuperar times');
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
        // await AsyncStorage.setItem('@game', JSON.stringify(games));
      }
    }
  };

  return (
    <Container>
      <Header>
        <Title>{game.nome}</Title>
        <Date>{game.data?.split('T')[0].split('-').reverse().join('/')}</Date>
      </Header>
      <BoxFlatList style={{ height: "90%", marginBottom: 18 }}>
        <HeaderSubtitle>
          <Subtitle>Jogador</Subtitle>
          <Subtitle>pago</Subtitle>
        </HeaderSubtitle>
        <FlatList data={game.jogadores} renderItem={({ item }) => (
          <PlayerCard>
            <Text>{item.nome}</Text>
            <CheckboxStyled value={checkedStates[item.id] || false} onValueChange={(value: boolean) => handleCheckChange(item.id, value)} />
          </PlayerCard>
        )} />
      </BoxFlatList>
      <ButtonMain onPress={() => navigation.navigate('home')} text="Voltar" />
    </Container>
  )
}