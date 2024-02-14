import { BoxBody, BoxContent, BoxFlatList, BoxFlex, BoxFooter, BoxHeader } from "./styles"
import { Container, InputCustom, Title } from "../../Global"
import { ButtonMain } from "../../components/buttonmain"
import { PlayerCard } from "../../components/playercard"
import { ButtonDelete } from "../../components/buttondelete"
import { SetStateAction, useState } from "react"
import { FlatList, Switch } from 'react-native'
import { shuffle } from 'lodash';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

interface IJogadores {
    id: number;
    nome: string;
    goleiro: boolean;
    isPayed: boolean;
}

interface IGame {
    id: number;
    nome: string;
    data: string;
    jogadores: IJogadores[];
}

export const SortTeam = ({ navigation }: any) => {
    const [date, setDate] = useState(new Date());
    const [isGk, setIsGk] = useState(false)
    const [nomeJogador, setNomeJogador] = useState('')
    const [jogadores, setJogadores] = useState<IJogadores[]>([])
    const [game, setGame] = useState('')

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const showMode = (currentMode: any) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const deleteFromList = (id: number) => {
        const newJogadores = jogadores.filter((item) => item.id !== id)
        setJogadores(newJogadores)
    }

    const ListaJogadores = (props: IJogadores) => {
        return (
            <BoxContent key={props.id}>
                <PlayerCard name={props.nome} position={props.goleiro} />
                <ButtonDelete onPress={() => deleteFromList(props.id)} />
            </BoxContent>
        )
    }

    const handleInputChange = (value: SetStateAction<string>) => setNomeJogador(value)
    const handleInputGame = (value: SetStateAction<string>) => setGame(value)

    const handleAddButton = () => {
        if (nomeJogador === '') {
            alert('Insira um nome para o jogador')
            return
        }
        setJogadores([...jogadores, { id: Math.floor(Math.random() * 1000), nome: nomeJogador, goleiro: isGk, isPayed: false }])
        setNomeJogador('')
        setIsGk(false)
    }

    const separarTimes = (jogadores: IJogadores[]): [IJogadores[], IJogadores[]] => {
        const goleiros: IJogadores[] = jogadores.filter((jogador) => jogador.goleiro);
        const naoGoleiros: IJogadores[] = jogadores.filter((jogador) => !jogador.goleiro);

        const shuffledNaoGoleiros = shuffle([...naoGoleiros]);

        let time1: IJogadores[], time2: IJogadores[];
        if (goleiros.length >= 2) {
            time1 = [goleiros[0], ...shuffledNaoGoleiros.slice(0, jogadores.length / 2 - 1)];
            time2 = [goleiros[1], ...shuffledNaoGoleiros.slice(jogadores.length / 2 - 1)];
        } else {
            time1 = goleiros.concat(shuffledNaoGoleiros.slice(0, jogadores.length / 2));
            time2 = shuffledNaoGoleiros.slice(jogadores.length / 2).concat(shuffle(goleiros).slice(0, 1));
        }
        return [time1, time2];
    }

    const handleSepararTimes = async () => {
        const [time1, time2] = separarTimes(jogadores);
        if (jogadores.length < 10) {
            alert('Insira no mínimo 10 jogadores')
        } else {
            // await AsyncStorage.setItem('@game', JSON.stringify({ id: Math.floor(Math.random() * 1000), nome: game, data: date, jogadores: jogadores } as unknown as IGame));
            // await AsyncStorage.setItem('@jogadores', JSON.stringify(jogadores));
            // await AsyncStorage.setItem('@timeum', JSON.stringify(time1));
            // await AsyncStorage.setItem('@timedois', JSON.stringify(time2));
            setJogadores([])
            navigation.navigate('results');
        }
    }

    return (
        <Container>
            <BoxHeader>
                <InputCustom placeholder="Digite o nome do jogo" onChangeText={handleInputGame} value={game} width="100%" />
                <BoxFlex>
                    <InputCustom placeholder="Selecione a data" width="280px" defaultValue={date.toLocaleDateString('PT-br')} editable={false}/>
                    <ButtonMain onPress={showDatepicker} width="60px" isCalendar />
                </BoxFlex>
                <BoxFlex>
                    <InputCustom placeholder="Digite nome do jogador" onChangeText={handleInputChange} value={nomeJogador} />
                    <Title>Goleiro?</Title>
                    <Switch value={isGk} onValueChange={() => setIsGk(!isGk)} />
                </BoxFlex>
                <ButtonMain text="Adicionar" onPress={handleAddButton} />
            </BoxHeader>
            <BoxBody>
                <Title>{jogadores.length} Jogadores</Title>
                <BoxFlatList>
                    <FlatList
                        data={jogadores}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <ListaJogadores id={item.id} nome={item.nome} goleiro={item.goleiro} isPayed />}
                    />
                </BoxFlatList>
            </BoxBody>
            <BoxFooter>
                <ButtonMain text="Sortear" onPress={handleSepararTimes} />
            </BoxFooter>
        </Container>
    )
}