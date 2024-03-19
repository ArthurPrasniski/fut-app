import { useState, useEffect } from "react";
import { View, Text, FlatList, Linking } from "react-native"
import { Container, Title } from "../../Global"
import { CardHeader, CardTime, TextCard, TitleCard, ViewPlayer, Wrapper } from "./styles";
import { ButtonMain } from "../../components/buttonmain";
import { ContainerPosition, PositionText } from "../../components/playercard/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IJogadores {
    id: number;
    nome: string;
    goleiro: boolean;
}

export const Results = ({ navigation }: any) => {
    const [timeUm, setTimeUm] = useState<IJogadores[]>([])
    const [timeDois, setTimeDois] = useState<IJogadores[]>([])

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
            </ViewPlayer>
        )
    }

    return (
        <Container>
            <CardHeader>
                <TitleCard color="#0075FF">Equipe Azul</TitleCard>
            </CardHeader>
            <CardTime background="#0075FF">
                <FlatList
                    data={timeUm}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <ListaJogadores nome={item.nome} goleiro={item.goleiro} id={item.id} />}
                />
            </CardTime>
            <CardHeader>
                <TitleCard color="#FF3F3F">Equipe Vermelha</TitleCard>
            </CardHeader>
            <CardTime background="#FF3F3F">
                <FlatList
                    data={timeDois}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <ListaJogadores nome={item.nome} goleiro={item.goleiro} id={item.id} />}
                />
            </CardTime>
            <Wrapper>
                {/* <ButtonMain text="Voltar" width="280px"onPress={() => navigation.navigate('home')} /> */}
                <ButtonMain text="Compartilhar no Whatsapp" color="#43C478" onPress={handleShare} />
            </Wrapper>
        </Container>
    )
}