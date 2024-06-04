import { Container, SubTitle } from "../../Global"
import { Title, ContainerText, TextLastGames } from "./styles"
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons'
import { Navbar } from "../../components/navbar";
import { FlatList, TouchableOpacity, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { ContainerGameDescription, PlayerCard } from "../old-games/stylest";
import { useEffect, useState } from "react";
import { database } from "../../database";

export const Home = ({ navigation }: any) => {
  const [games, setGames] = useState<any>([])

  const getData = async () => {
    try {
      const gamesCollection = await database.get('games').query().fetch();
      const last3Games = gamesCollection.slice(-3);
      setGames(last3Games);
    } catch (e) {
      alert('Erro ao recuperar os Jogos anteriores');
    }
  };
  useEffect(() => {
    getData()
  }, [])
  const route = useRoute();
  return (
    <Container>
      <StatusBar style="light" />
      <ContainerText>
        <Title>FUT APP</Title>
        <SubTitle>Organize sua partida de futebol</SubTitle>
      </ContainerText>
      <TextLastGames>Últimas 3 partidas</TextLastGames>
      <FlatList data={games} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('GamePayments', { gameId: item.id })}>
          <PlayerCard>
            <ContainerGameDescription>
              <Text>{item.nome}</Text>
              <Text>{item.data?.split('T')[0].split('-').reverse().join('/')}</Text>
            </ContainerGameDescription>
            <Ionicons name="chevron-forward" size={24} color="#43C478" />
          </PlayerCard>
        </TouchableOpacity>
      )} />
      <Navbar navigation={navigation} currentScreen={route.name} />
    </Container>
  )
}