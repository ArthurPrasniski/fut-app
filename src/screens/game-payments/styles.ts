import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #282a36;
    align-items: center;
    justify-content: center;
`;

export const HeaderTitle = styled.View`
    width: 100%;
    flex-direction: row;
    margin-top: 10px;       
    margin-bottom: 12px;
    padding-left: 20px;
    padding-right: 32px;
    align-items: flex-end;
    justify-content: space-between;
`

export const HeaderSubtitle = styled.View`
    width: 100%;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 12px;
    padding-left: 20px;
    padding-right: 32px;
    align-items: flex-end;
    justify-content: space-between; 
`

export const PlayerCard = styled.View`
    width: 100%;
    height: 80px;
    flex-direction: row;
    margin-top: 18px;
    padding-left: 20px;
    padding-right: 32px;
    border-radius: 8px;
    background-color: #f1f1f1;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #D9D9D9;
`

export const ContainerGK = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;
`