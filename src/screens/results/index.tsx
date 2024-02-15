import { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native"
import { Container, Title } from "../../Global"
import { CardTime, TextCard, ViewPlayer, Wrapper } from "./styles";
import { ButtonMain } from "../../components/buttonmain";
import { ContainerPosition, PositionText } from "../../components/playercard/styles";
import { database } from "../../database";

interface IJogadores {
    id: number;
    nome: string;
    goleiro: boolean;
}

export const Results = ({ navigation }: any) => {
    const [timeUm, setTimeUm] = useState<IJogadores[]>([])
    const [timeDois, setTimeDois] = useState<IJogadores[]>([])
    console.log("TIME UM:", timeUm)
    console.log("TIME DOIS:", timeDois)

    const getData = async () => {
        try {
            
        } catch (e) {
            alert('Erro ao recuperar times');
        }
    };

    useEffect(() => {
        getData();
    }, []);

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
            <Title>Time Um</Title>
            <CardTime>
                <FlatList
                    data={timeUm}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <ListaJogadores nome={item.nome} goleiro={item.goleiro} id={item.id} />}
                />
            </CardTime>
            <Title>Time Dois</Title>
            <CardTime>
                <FlatList
                    data={timeDois}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <ListaJogadores nome={item.nome} goleiro={item.goleiro} id={item.id} />}
                />
            </CardTime>
            <Wrapper>
                <ButtonMain text="Voltar" onPress={() => navigation.navigate('home')} />
            </Wrapper>
        </Container>
    )
}