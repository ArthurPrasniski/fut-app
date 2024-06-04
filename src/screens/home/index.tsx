import { Container, SubTitle } from "../../Global"
import { Title, ButtonNew, ButtonOlder, ButtonText, ButtonText2, ContainerText } from "./styles"
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons'
import { Navbar } from "../../components/navbar";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";

export const Home = ({ navigation }: any) => {
  const route = useRoute();
  return (
    <Container>
      <StatusBar style="light" />
      <ContainerText>
        <Title>FUT APP</Title>
        <SubTitle>Organize sua partida de futebol</SubTitle>
      </ContainerText>
      <Navbar navigation={navigation} currentScreen={route.name}/>
    </Container>
  )
}