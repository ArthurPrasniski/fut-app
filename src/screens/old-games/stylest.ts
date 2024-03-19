import styled from "styled-components/native";
import Checkbox from 'expo-checkbox';

export const PlayerCard = styled.View`
    width: 100%;
    height: 80px;
    flex-direction: row;
    margin-top: 18px;
    padding: 12px;
    border-radius: 8px;
    background-color: #f1f1f1;
    align-items: center;
    justify-content: space-between;
`

export const ContainerGameDescription = styled.View`
    flex-direction: column;
    gap: 8px;
`
export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: flex-end;
    gap: 10px;
    justify-content: space-between;
`
export const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #000000;
`
export const TitleHeader = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #43C478;
`
export const Date = styled.Text`
    font-size: 12px;
    color: #A1A1A1;
`
export const Subtitle = styled.Text`
    font-size: 14px;
    color: #D9D9D9;
`
export const CheckboxStyled = styled(Checkbox)`
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
`

export const AlertText = styled.Text`
    font-size: 18px;
    color: #D9D9D9;
    font-weight: bold;
    margin-top: 18px;
    text-align: center;
    width: 100%;
`

export const AlertContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`
