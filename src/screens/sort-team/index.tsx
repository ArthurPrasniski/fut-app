import { BoxBody, BoxContent, BoxFlatList, BoxFlex, BoxFooter, BoxHeader, BoxSkill, ModalView, SkillText, SkillValue, SkillValueText, TitleModal } from "./styles"
import { Container, InputCustom, Title } from "../../Global"
import { ButtonMain } from "../../components/buttonmain"
import { PlayerCard } from "../../components/playercard"
import { ButtonDelete } from "../../components/buttondelete"
import { SetStateAction, useState } from "react"
import { FlatList, Modal, Switch } from 'react-native'
import { shuffle } from 'lodash';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { database } from "../../database";
import { Game } from "../../database/model/games-model"
import { Player } from "../../database/model/players-model"
import AsyncStorage from "@react-native-async-storage/async-storage";
import Slider from '@react-native-community/slider';

interface IJogadores {
    id: number;
    nome: string;
    goleiro: boolean;
    isPayed: boolean;
    skill: number;
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
    const [gameName, setGameName] = useState('')
    const [showSkillModal, setShowSkillModal] = useState(false)
    const [skill, setSkill] = useState(0)
    const [playerSkill, setPlayerSkill] = useState(0)

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

    const HandleChangePlayerSkill = (skill: number) => {
        setPlayerSkill(skill)
        setSkill(0)
        setShowSkillModal(!showSkillModal)
    }

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
                <PlayerCard name={props.nome} position={props.goleiro} skill={props.skill}/>
                <ButtonDelete onPress={() => deleteFromList(props.id)} />
            </BoxContent>
        )
    }

    const handleInputChange = (value: SetStateAction<string>) => setNomeJogador(value)
    const handleInputGame = (value: SetStateAction<string>) => setGameName(value)

    const handleAddButton = () => {
        if (nomeJogador === '') {
            alert('Insira um nome para o jogador')
            return
        }
        setJogadores([...jogadores, { id: Math.floor(Math.random() * 1000), nome: nomeJogador, goleiro: isGk, isPayed: false, skill: playerSkill}])
        setNomeJogador('')
        setIsGk(false)
        setPlayerSkill(0)
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
            await AsyncStorage.setItem('@game', JSON.stringify({ id: Math.floor(Math.random() * 1000), nome: gameName, data: date, jogadores: jogadores } as unknown as IGame));
            await AsyncStorage.setItem('@jogadores', JSON.stringify(jogadores));
            await AsyncStorage.setItem('@timeum', JSON.stringify(time1));
            await AsyncStorage.setItem('@timedois', JSON.stringify(time2));

            await database.write(async () => {
                const game = await database.get<Game>('games').create((newGame: any) => {
                    newGame.nome = gameName;
                    newGame.data = date.toISOString();
                })
                jogadores.forEach(async (jogador) => {
                    await database.get<Player>('players').create((newPlayer: any) => {
                        newPlayer.nome = jogador.nome;
                        newPlayer.goleiro = jogador.goleiro;
                        newPlayer.isPayed = jogador.isPayed;
                        newPlayer.game_id = game.id;
                    });
                });
            })
            setJogadores([])
            navigation.navigate('results');
        }
    }

    const setColorSkill = (skill: number) => {
        if (skill <= 33) {
            return 'red'
        } else if (skill > 33 && skill <= 69) {
            return 'orange'
        } else {
            return 'green'
        }
    }

    return (
        <Container>
            <Modal visible={showSkillModal} animationType="slide" transparent={true} >
                <ModalView>
                    <TitleModal>Escolha a habilidade do jogador</TitleModal>
                    <SkillValue>{skill.toFixed()}</SkillValue>
                    <Slider
                        onValueChange={(value) => setSkill(value)}
                        style={{ width: ' 100%', height: 60 }}
                        minimumValue={1}
                        maximumValue={99}
                        minimumTrackTintColor="#43C478"
                        maximumTrackTintColor="#000000"
                    />
                    <ButtonMain text="Adicionar" color="#43C478" onPress={() => { HandleChangePlayerSkill(skill) }} />
                </ModalView>
            </Modal>
            <BoxHeader>
                <InputCustom placeholder="Digite o nome do jogo" onChangeText={handleInputGame} value={gameName} width="100%" />
                <BoxFlex>
                    <InputCustom placeholder="Selecione a data" width="280px" defaultValue={date.toLocaleDateString('PT-br')} editable={false} />
                    <ButtonMain onPress={showDatepicker} width="60px" isCalendar />
                </BoxFlex>
                <BoxFlex>
                    <InputCustom placeholder="Digite nome do jogador" onChangeText={handleInputChange} value={nomeJogador} />
                    <Title>Goleiro?</Title>
                    <Switch value={isGk} onValueChange={() => setIsGk(!isGk)} />
                </BoxFlex>
                <BoxFlex>
                    <BoxSkill>
                        <SkillText>Habilidade do Jogador:</SkillText>
                        <SkillValueText color={setColorSkill(playerSkill)}>{playerSkill.toFixed()}</SkillValueText>
                    </BoxSkill>
                    <ButtonMain width="60px" isSkill color="#43C478" onPress={() => { setShowSkillModal(!showSkillModal) }} />
                </BoxFlex>
                <ButtonMain text="Adicionar" onPress={handleAddButton} />
            </BoxHeader>
            <BoxBody>
                <Title>{jogadores.length} Jogadores</Title>
                <BoxFlatList>
                    <FlatList
                        data={jogadores}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <ListaJogadores id={item.id} nome={item.nome} goleiro={item.goleiro} isPayed skill={item.skill}  />}
                    />
                </BoxFlatList>
            </BoxBody>
            <BoxFooter>
                <ButtonMain text="Sortear" color="#43C478" onPress={handleSepararTimes} />
            </BoxFooter>
        </Container>
    )
}