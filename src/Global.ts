import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 54px 20px;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: #FFFFFF;
`
export const SubTitle = styled.Text`
    font-size: 14px;
    font-weight: 400;
    color: #FFFFFF;
`
export const InputCustom = styled.TextInput<{ width?: string }>`
    width: ${(props: { width?: string }) => (props.width ? props.width : '220px')};
    height: 40px;
    padding: 10px;
    border-radius: 8px;
    background-color: #D9D9D9;
`
