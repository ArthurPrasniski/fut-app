import styled from "styled-components/native";

export const ButtonNew = styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    margin-top: 20px;
    padding-horizontal: 20px;
    border-radius: 8px;
    background-color: #43C478;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`

export const ButtonOlder = styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    margin-top: 20px;
    padding-horizontal: 20px;
    border-radius: 8px;
    background-color: #f1f1f1;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`

export const ButtonText = styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: #FFFFFF;
`

export const ButtonText2 = styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: #43C478;
`

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #43C478;
`

export const ContainerText = styled.View`
    justify-content: start;
    align-items: center;
    margin-bottom: 44px;
`
export const TextLastGames = styled.Text`
    font-size: 16px;
    font-weight: 700;
    color: #43C478;
`

export const TitleCard = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #282A36;
`

export const DataText = styled.Text`
    font-size: 12px;
    color: #ACACAC;
`

export const TitleGame = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #D9D9D9;
`

export const DescriptionText = styled.Text`
    font-size: 12px;
    font-weight: 400;
    color: #D9D9D9;
`

export const TotalValue = styled.Text<{ paid: boolean }>`
    font-size: 12px;
    font-weight: bold;
    color: ${(props) => (props.paid ? "#43C478" : "#FF0000")};
`;

export const TotalPlayers = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #D9D9D9;
`;

export const ViewRow = styled.View`
    flex-direction: row;
    align-items: baseline;
    gap: 6px;
    margin-top: 2px;
`