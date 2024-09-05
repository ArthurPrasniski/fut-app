import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #282a36;
    align-items: center;
    justify-content: center;
`;

export const HeaderTitle = styled.View`
    width: 100%;
    height: 64px;
    border-radius: 8px;
    flex-direction: column;
    margin-top: 32px;       
    align-items: start;
    justify-content: center;
    gap: 8px;
`

export const HeaderSubtitle = styled.View`
    width: 100%;
    flex-direction: row;
    padding-left: 20px;
    padding-right: 32px;
    align-items: flex-end;
    justify-content: space-between; 
    margin-bottom: 8px;
`

export const Divider = styled.View`
    width: 100%;
    height: 1px;
    background-color: #44475A;
    margin-bottom: 16px;
`

export const PlayerCard = styled.TouchableOpacity`
    width: 100%;
    height: 44px;
    flex-direction: row;
    margin-bottom: 12px;
    padding-left: 20px;
    padding-right: 32px;
    border-radius: 8px;
    background-color: #23242e;
    align-items: center;
    justify-content: space-between;
`

export const PlayerName = styled.Text`
    font-size: 14px;
    color: #fefefe;
`

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fefefe;
`

export const SubTitle = styled.Text`
    font-size: 12px;
    font-weight: normal;
    color: #55586B;
`
export const Header = styled.Text`
    font-size: 14px;
    font-weight: normal;
    color: #fefefe;
`

export const ContainerGK = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;
`

export const PlayerBox = styled.View<{ note: number }>`
    height: 32px;
    padding: 8px;
    border-radius: 4px;
    background-color: ${props => {
        if (props.note >= 7) {
            return "#50fa7b50"; 
        } else if (props.note >= 5) {
            return "#ffb86c50"; 
        } else {
            return "#ff555550"; 
        }
    }};
    align-items: center;
    justify-content: space-between;
`;

export const PlayerNote = styled.Text<{ note: number }>`
    font-size: 12px;
    font-weight: 700;
    color: ${props => {
        if (props.note >= 7) {
            return "#50fa7b"; 
        } else if (props.note >= 5) {
            return "#ffb86c"; 
        } else {
            return "#ff5555"; 
        }
    }};
`