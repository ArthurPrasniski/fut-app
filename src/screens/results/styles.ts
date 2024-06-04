import Styled from 'styled-components/native'

export const CardTime = Styled.View`
    width: 100%;
    height: 260px;
    padding: 16px;
    border-radius: 0px 0px 8px 8px;
    margin-bottom: 24px; 
    background-color: ${(props: any) => (props.background ? props.background : '#fefefe')};
`
export const CardHeader = Styled.View`
    width: 100%;
    height: auto;
    padding: 16px;
    flex-direction: row;
    background-color: ${(props: any) => (props.background ? props.background : '#fefefe')};
    color: ${(props: any) => (props.color ? props.color : '#fefefe')};
    justify-content: center;
    align-items: center;
    border-radius: 8px 8px 0px 0px;
    margin-top: 16px;
`
export const ViewPlayer = Styled.View`
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`
export const TextCard = Styled.Text`
    font-size: 14px;
    font-weight: 700;
    font-family: 'Roboto';
    color: #282A36;
`
export const Wrapper = Styled.View`
    width: 100%;
    height: auto;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    gap: 12px;
`
export const TitleCard = Styled.Text`
    font-size: 16px;
    font-weight: 700;
    font-family: 'Roboto';
    color:  ${(props: any) => (props.color ? props.color : '#fefefe')};
`

export const LinkShare = Styled.Text`
    font-size: 16px;
    font-weight: 700;
    font-family: 'Roboto';
    color: #43C478;
    text-decoration: underline;
    margin-top: 16px;
    text-align: center;
`