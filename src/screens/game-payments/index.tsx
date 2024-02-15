import { View, Text, FlatList } from "react-native"
import { database } from "../../database"
import { useEffect, useState } from "react";
import { Q } from "@nozbe/watermelondb";
import { Container, ContainerGK, HeaderSubtitle, HeaderTitle, PlayerCard, Title } from "./styles";
import { BoxFlatList } from "../sort-team/styles";
import Checkbox from "expo-checkbox";
import { ButtonMain } from "../../components/buttonmain";
import { ContainerPosition, PositionText } from "../../components/playercard/styles";

export const GamePayments = ({ route, navigation }: any) => {
    const [players, setPlayers] = useState<any>([]);
    const [game, setGame] = useState<any>({});

    const getData = async () => {
        const { gameId } = route.params;
        try {
            const game = await database.get('games').find(gameId);
            setGame(game);
            const playersCollection = await database.get('players').query(
                Q.where('game_id', gameId)
            ).fetch();
            setPlayers(playersCollection);
        } catch (e) {
            alert('Erro ao recuperar os Jogadores');
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const handlePayed = async (id: string, value: boolean) => {
        try {
            await database.write(async () => {
                const player: any = await database.get('players').find(id)
                await player.update(() => {
                    player.isPayed = value
                })
            })
            getData();
        } catch (error) {
            alert('Erro ao atualizar o pagamento do jogador!');
        }
    }

    return (
        <>
            <BoxFlatList style={{ height: "90%", padding: 20 }}>
                <HeaderTitle>
                    <Title>{game.nome}</Title>
                    <Title>{game.data?.split('T')[0].split('-').reverse().join('/')}</Title>
                </HeaderTitle>
                <HeaderSubtitle>
                    <Title>Jogador</Title>
                    <Title>Pago</Title>
                </HeaderSubtitle>
                <FlatList data={players} renderItem={({ item }) => (
                    <PlayerCard>
                        <ContainerGK>
                            <Text>{item.nome}</Text>
                            {item.goleiro === true ? <ContainerPosition>
                                <PositionText>GK</PositionText>
                            </ContainerPosition> : ""}
                        </ContainerGK>
                        <Checkbox value={item.isPayed} onValueChange={(value) => handlePayed(item.id, value)} />
                    </PlayerCard>
                )} />
            </BoxFlatList><View style={{ padding: 20 }}>
                <ButtonMain onPress={() => navigation.navigate('OldGames')} text="Voltar" />
            </View>
        </>
    )
}