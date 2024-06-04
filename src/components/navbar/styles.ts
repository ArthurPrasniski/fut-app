import styled from "styled-components/native";

export const NavbarContainer = styled.View`
    width: 230px;
    height: 64px;
    border-radius: 50px;
    background-color: #fff;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`

export const ButtonContainer = styled.TouchableOpacity<{ isSelected: boolean }>`
  width: 48px;
  height: 48px;
  background-color: ${props => props.isSelected ? "#43C478" : "transparent"};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`