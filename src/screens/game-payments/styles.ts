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
    align-items: flex-start;
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
    margin-bottom: 18px;
    padding-left: 20px;
    padding-right: 32px;
    border-radius: 8px;
    background-color: #f1f1f1;
    align-items: center;
    justify-content: space-between;
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