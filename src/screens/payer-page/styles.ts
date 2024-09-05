import styled from "styled-components/native";

export const HeaderJogador = styled.View`
    width: 100%;
    height: fit-content;
    margin-bottom: 16px;
    padding: 20px;
    border-radius: 0px 0px 44px 0px;
    flex-direction: column;
    align-items: start;
    background-color: #25272e;
`

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 16px;
`

export const HeaderTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    margin-top: 16px;
`

export const DateText = styled.Text`
    font-size: 14px;
    color: #A1A1A1;
    margin-right: 16px;
    margin-top: 16px;
`

export const PayedText = styled.Text`
    font-size: 14px;
    color: #D9D9D9;
    font-weight: bold;
`

export const PlayerText = styled.Text`
    font-size: 16px;
    color: #D9D9D9;
    font-weight: bold;
`

export const LabelText = styled.Text`
    font-size: 14px;
    color: #D9D9D9;
    font-weight: 400;
`

export const FormView = styled.View`
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    height: fit-content;
    flex-direction: column;
    align-items: start;
    margin-bottom: 16px;
    gap: 8px;
`

export const PayerNoteView = styled.View`
    width: 100%;
    padding-left: 20px;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
`

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

export const SaveContainer = styled.View`
    width: 100%;
    height: 100px;
    padding: 20px;
    bottom: 0;
    justify-content: center;
    align-items: center;
    position: absolute;
`

