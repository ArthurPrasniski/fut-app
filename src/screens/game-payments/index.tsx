import { View, Text, FlatList, TouchableOpacity } from "react-native"
import { database } from "../../database"
import { useEffect, useState } from "react";
import { Q } from "@nozbe/watermelondb";
import { ContainerGK, Divider, Header, HeaderSubtitle, HeaderTitle, PlayerCard, SubTitle, Title } from "./styles";
import { BoxFlatList } from "../sort-team/styles";
import Checkbox from "expo-checkbox";
import { ButtonMain } from "../../components/buttonmain";
import { ContainerPosition, PositionText, SkillContainer } from "../../components/playercard/styles";
import { AlertTriangleIcon, ArrowBigLeftIcon } from "lucide-react-native";
import { TitleHeader } from "../old-games/stylest";
import { Navbar } from "../../components/navbar";
import { Container } from "../../Global";

export const GamePayments = ({ route, navigation }: any) => {
    const [players, setPlayers] = useState<any>([]);
    const [game, setGame] = useState<any>({});
    const [isChecked, setIsChecked] = useState(false);
    const [totalPayed, setTotalPayed] = useState();

    const getData = async () => {
        const { gameId } = route.params;
        try {
            const game = await database.get('games').find(gameId);
            setGame(game);
            const playersCollection = await database.get('players').query(
                Q.where('game_id', gameId)
            ).fetch();
            console.log(playersCollection)
            setPlayers(playersCollection);
        } catch (e) {
            alert('Erro ao recuperar os Jogadores');
        }
    }

    const getTotalPayed = () => {
        const payed = players.filter((player: any) => player.isPayed === true);
        setTotalPayed(payed.length);
    }

    useEffect(() => {
        getTotalPayed()
        getData()
    }, [players])

    const handlePayed = async (id: string, value: boolean) => {
        try {
            await database.write(async () => {
                const player: any = await database.get('players').find(id)
                await player.update(() => {
                    player.isPayed = value
                })
            })
            setIsChecked(value);
            getTotalPayed()
            getData();
        } catch (error) {
            alert('Erro ao atualizar o pagamento do jogador!');
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
            <BoxFlatList style={{ height: "90%" }} height='80%'>
                <TouchableOpacity style={{ alignItems: "flex-end", flexDirection: "row", marginBottom: 12 }} onPress={() => navigation.navigate('OldGames')}>
                    <ArrowBigLeftIcon size={24} color="#43C478" />
                    <View style={{ alignItems: "flex-end", flexDirection: "row", justifyContent: 'space-between', width: '90%' }}>
                        <TitleHeader>{game.nome}</TitleHeader>
                        <SubTitle>{game.data?.split('T')[0].split('-').reverse().join('/')}</SubTitle>
                    </View>
                </TouchableOpacity>
                <Divider />
                <HeaderSubtitle>
                    <Header>Jogador</Header>
                    <Header>Pago ({totalPayed}/{players.length})</Header>
                </HeaderSubtitle>
                {players.length === 0 ?
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <AlertTriangleIcon size={44} color="#D9D9D9" />
                        <Text style={{ color: '#D9D9D9', fontSize: 18, fontWeight: 'bold', marginTop: 18, textAlign: 'center', width: '100%' }}>
                            Nenhum jogador cadastrado para o jogo
                        </Text>
                    </View> : ""}
                <FlatList data={players} renderItem={({ item }) => (
                    <PlayerCard onPress={() => handlePayed(item.id, !isChecked)}>
                        <ContainerGK>
                            <Text>{item.nome}</Text>
                            {item.goleiro === true ? <ContainerPosition>
                                <PositionText>GK</PositionText>
                            </ContainerPosition> : ""}
                        </ContainerGK>
                        <Checkbox value={item.isPayed} onValueChange={(value) => handlePayed(item.id, value)} />
                    </PlayerCard>
                )} />
            </BoxFlatList>
            <Navbar navigation={navigation} currentScreen="OldGames" />
        </Container>
    )
}