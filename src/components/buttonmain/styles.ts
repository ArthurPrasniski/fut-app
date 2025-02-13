import styled from "styled-components/native";


export const ButtonCustom = styled.TouchableOpacity`
    width: ${(props: any) => (props.width ? props.width : '100%')};
    border-radius: 8px;
    padding: 8px;
    background-color: ${(props: any) => (props.color ? props.color : '#6272a4')};
    align-items: center;
`

export const ButtonText = styled.Text`
    font-size: 16px;
    color: #fff;
    font-weight: bold;
`