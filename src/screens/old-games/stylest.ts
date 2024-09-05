import styled from "styled-components/native";
import Checkbox from 'expo-checkbox';

export const PlayerCard = styled.View`
    width: 100%;
    height: fit-content;
    flex-direction: column;
    margin-top: 18px;
    padding: 12px;
    border-radius: 8px;
    background-color: #23242e;
    border-color: #23242e;
    border-width: 1px;
`

export const ContainerGameDescription = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    gap: 6px;
    margin-bottom: 8px;
`
export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: flex-end;
    gap: 4px;
`
export const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #D9D9D9;
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
