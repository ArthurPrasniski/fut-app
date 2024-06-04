import { useState, useEffect } from "react";
import { View, Text, FlatList, Linking, Touchable, TouchableOpacity } from "react-native"
import { Container, Title } from "../../Global"
import { CardHeader, CardTime, LinkShare, TextCard, TitleCard, ViewPlayer, Wrapper } from "./styles";
import { ButtonMain } from "../../components/buttonmain";
import { ContainerPosition, PositionText, SkillContainer, SkillText } from "../../components/playercard/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ArrowBigLeftIcon, Rows, Share } from "lucide-react-native";
import { Header, TitleHeader } from "../old-games/stylest";

interface IJogadores {
    id: number;
    nome: string;
    goleiro: boolean;
    skill: number;
}

export const Results = ({ navigation }: any) => {
    const [timeUm, setTimeUm] = useState<IJogadores[]>([])
    const [timeDois, setTimeDois] = useState<IJogadores[]>([])
    console.log(timeDois)

    const setColorSkill = (skill: string) => {
        if (skill <= '33') {
            return 'red'
        } else if (skill > '33' && skill <= '69') {
            return 'orange'
        } else {
            return 'green'
        }
    }

    const getData = async () => {
        try {
            const TimeUm = await AsyncStorage.getItem('@timeum');
            const TimeDois = await AsyncStorage.getItem('@timedois');

            if (TimeUm !== null && TimeDois !== null) {
                setTimeUm(JSON.parse(TimeUm));
                setTimeDois(JSON.parse(TimeDois));
            }
        } catch (e) {
            alert('Erro ao recuperar times');
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleShare = () => {
        const message = `Confira o resultado dos times para a partida: \n\nTime Azul:\n\n${timeUm.map((item) => `${item.nome}${item.goleiro ? ' (Goleiro)' : ''}`).join('\n')} 
        \n\nTime Vermelho:\n\n${timeDois.map((item) => `${item.nome}${item.goleiro ? ' (Goleiro)' : ''}`).join('\n')} \nCompartilhado pelo FUT APP!`;
        console.log(message)
        const whatsappURL = `whatsapp://send?text=${encodeURIComponent(message)}`;

        Linking.openURL(whatsappURL)
            .then(() => console.log('WhatsApp opened'))
            .catch((err) => console.error('An error occurred', err));
    };

    const ListaJogadores = (props: IJogadores) => {
        return (
            <ViewPlayer key={props.id}>
                <TextCard>- {props?.nome}</TextCard>
                {props.goleiro === true ? <ContainerPosition>
                    <PositionText>GK</PositionText>
                </ContainerPosition> : ""}
                {/* <SkillContainer background={setColorSkill(props?.skill?.toFixed())}>
                    <SkillText>{props.skill.toFixed()}</SkillText>
                </SkillContainer> */}
            </ViewPlayer>
        )
    }

    return (
        <Container>
            <Header>
                <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <ArrowBigLeftIcon size={24} color="#43C478" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <TitleHeader>Resultado do sorteio</TitleHeader>
                </TouchableOpacity>
            </Header>
            <CardHeader background="#0075FF">
                <TitleCard>Equipe Azul</TitleCard>
            </CardHeader>
            <CardTime>
                <FlatList
                    data={timeUm}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <ListaJogadores nome={item.nome} goleiro={item.goleiro} id={item.id} skill={item.skill} />}
                />
            </CardTime>
            <CardHeader background="#FF0000">
                <TitleCard>Equipe Vermelha</TitleCard>
            </CardHeader>
            <CardTime>
                <FlatList
                    data={timeDois}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <ListaJogadores nome={item.nome} goleiro={item.goleiro} id={item.id} skill={item.skill} />}
                />
            </CardTime>
            <TouchableOpacity style={{ alignItems: 'flex-end', flexDirection: 'row', gap: 8 }} onPress={handleShare}>
                <LinkShare>Compartilhar no Whatsapp</LinkShare>
                <Share size={16} color={"#43C478"} />
            </TouchableOpacity>
        </Container>
    )
}