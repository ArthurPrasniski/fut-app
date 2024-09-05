import { Switch, View } from "react-native"
import { Container, DateText, FormView, HeaderJogador, HeaderTitle, LabelText, PayedText, PayerNoteView, PlayerNote, PlayerText, SaveContainer } from "./styles"
import { InputCustom } from "../../Global"
import { ButtonMain } from "../../components/buttonmain"
import { useState } from "react"


export const PlayerPage = ({ route, navigation }: any) => {
  const [golsFeitos, setGolsFeitos] = useState<number>(0)
  const [interceptacoesFeitas, setInterceptacoesFeitas] = useState<number>(0)
  const [bolasRoubadas, setBolasRoubadas] = useState<number>(0)
  const [bolasPerdidas, setBolasPerdidas] = useState<number>(0)
  const [notaMedia, setNotaMedia] = useState<number>(0)

  const calcularNotaMedia = () => {
    const pesoGols = 10
    const pesoInterceptacoes = 1
    const pesoBolasRoubadas = 1
    const pesoBolasPerdidas = -1

    const nota = (
      (golsFeitos * pesoGols) +
      (interceptacoesFeitas * pesoInterceptacoes) +
      (bolasRoubadas * pesoBolasRoubadas) +
      (bolasPerdidas * pesoBolasPerdidas)
    ) / (pesoGols + pesoInterceptacoes + pesoBolasRoubadas)

    setNotaMedia(nota > 10 ? 10 : nota)
  }

  return (
    <>
      <HeaderJogador>
        <Container>
          <HeaderTitle>Jogo</HeaderTitle>
          <DateText>12/12/2021</DateText>
        </Container>
        <Container>
          <PlayerText>Arthur Prasnski</PlayerText>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <PayedText>Pago</PayedText>
            <Switch />
          </View>
        </Container>
      </HeaderJogador>
      <PayerNoteView>
        <PlayerText>Nota do Jogador</PlayerText>
        <PlayerNote note={notaMedia}>{notaMedia.toFixed(2)}</PlayerNote>
      </PayerNoteView>
      <FormView>
        <PlayerText>Desempenho do Jogador</PlayerText>
        <LabelText>Gols Feitos</LabelText>
        <InputCustom placeholder="Gols feitos" width="100%" value={golsFeitos.toString()} onChangeText={text => setGolsFeitos(Number(text))} />
        <LabelText>Interceptações feitas</LabelText>
        <InputCustom placeholder="Interceptações feitas" width="100%" value={interceptacoesFeitas.toString()} onChangeText={text => setInterceptacoesFeitas(Number(text))} />
        <LabelText>Bolas roubadas</LabelText>
        <InputCustom placeholder="Bolas roubadas" width="100%" value={bolasRoubadas.toString()} onChangeText={text => setBolasRoubadas(Number(text))} />
        <LabelText>Bolas perdidas</LabelText>
        <InputCustom placeholder="Bolas perdidas" width="100%" value={bolasPerdidas.toString()} onChangeText={text => setBolasPerdidas(Number(text))} />
      </FormView>
      <SaveContainer>
        <ButtonMain text="Salvar" onPress={calcularNotaMedia} />
      </SaveContainer>
    </>
  )
}
