import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #FFFFFF;
  width: 300px;
  height: 40px;
  align-items: center;
  padding: 0px 12px;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const PlayerText = styled.Text`
    font-size: 16px;
    color: #282a36;
    font-weight: normal;
`
export const PositionText = styled.Text`
    font-size: 14px;
    color: #282a36;
    font-weight: bold;
`
export const ContainerPosition = styled.View`
  width: 32px;
  height: 32px;
  padding: 2px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: #50fa7b;
`