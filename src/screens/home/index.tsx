import { Container, SubTitle, Title } from "../../Global"
import { ButtonNew, ButtonOlder, ButtonText, ButtonText2 } from "./styles"

export const Home = ({ navigation }: any) => {
  return (
    <Container>
      <Title>FUTAPP</Title>
      <SubTitle>Organize sua partida de futebol</SubTitle>
      <ButtonNew onPress={() => navigation.navigate('SortTeam')}>
        <ButtonText>Novo Jogo</ButtonText>
      </ButtonNew>
      <ButtonOlder onPress={() => navigation.navigate('OldGames')}>
        <ButtonText2>Jogo passado</ButtonText2>
      </ButtonOlder>
    </Container>
  )
}