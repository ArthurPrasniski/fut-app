import { Container, SubTitle } from "../../Global"
import { Title, ButtonNew, ButtonOlder, ButtonText, ButtonText2 } from "./styles"

export const Home = ({ navigation }: any) => {
  return (
    <Container>
      <Title>FUT APP</Title>
      <SubTitle>Organize sua partida de futebol</SubTitle>
      <ButtonNew onPress={() => navigation.navigate('SortTeam')}>
        <ButtonText>Nova Partida</ButtonText>
      </ButtonNew>
      <ButtonOlder onPress={() => navigation.navigate('OldGames')}>
        <ButtonText2>Partidas Disputadas</ButtonText2>
      </ButtonOlder>
    </Container>
  )
}