import { Text, TouchableOpacity } from 'react-native';
import { Container, InputCustom } from '../../Global';
import { BoxFlex } from '../sort-team/styles';
import { ButtonMain } from '../../components/buttonmain';
import { SetStateAction, useState } from 'react';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { BodyWrapper, BoxFooter, BoxHeader } from './styles'
import { Header, Subtitle, TitleHeader } from '../old-games/stylest';
import { database } from '../../database';
import { Game } from '../../database/model/games-model';
import { Navbar } from '../../components/navbar';
import { ArrowBigLeftIcon } from 'lucide-react-native';

export const NewGame = ({ navigation }: any) => {
    const [gameName, setGameName] = useState('')
    const [date, setDate] = useState(new Date());

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

    const handleInputGame = (value: SetStateAction<string>) => setGameName(value)

    const handleCreateGame = async () => {
        if (gameName === '') {
            alert('Digite o nome do jogo')
            return;
        } else {

            await database.write(async () => {
                const game = await database.get<Game>('games').create((newGame: any) => {
                    newGame.nome = gameName;
                    newGame.data = date.toISOString();
                })
                navigation.navigate('SortTeam', { gameId: game.id })
            })
        }
    }

    return (
        <Container>
            <BoxHeader>
                <BodyWrapper>
                    <Header>
                        <TouchableOpacity onPress={() => navigation.navigate('home')}>
                            <ArrowBigLeftIcon size={24} color="#43C478" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('home')}>
                            <TitleHeader>Crie uma partida</TitleHeader>
                        </TouchableOpacity>
                    </Header>
                    <InputCustom placeholder="Digite o nome do jogo" onChangeText={handleInputGame} value={gameName} width="100%" />
                    <BoxFlex>
                        <InputCustom placeholder="Selecione a data" width="280px" defaultValue={date.toLocaleDateString('PT-br')} editable={false} />
                        <ButtonMain onPress={showDatepicker} width="60px" isCalendar />
                    </BoxFlex>
                    <ButtonMain color="#43C478" onPress={handleCreateGame} text='Criar Jogo' />
                </BodyWrapper>
            </BoxHeader>
        </Container>
    )
}