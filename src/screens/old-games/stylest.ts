import styled from "styled-components/native";
import Checkbox from 'expo-checkbox';

export const PlayerCard = styled.View`
    width: 100%;
    height: 40px;
    flex-direction: row;
    margin-top: 18px;
    padding-left: 20px;
    padding-right: 36px;
    border-radius: 8px;
    background-color: #D9D9D9;
    align-items: center;
    justify-content: space-between;
`
export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: flex-end;
    gap: 10px;
    justify-content: space-between;
`
export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #D9D9D9;
`
export const Date = styled.Text`
    font-size: 14px;
    color: #D9D9D9;
`
export const HeaderSubtitle = styled.View`
    width: 100%;
    flex-direction: row;
    margin-top: 10px;
    padding-left: 20px;
    padding-right: 32px;
    align-items: flex-end;
    justify-content: space-between; 
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
