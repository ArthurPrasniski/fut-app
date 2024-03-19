import Styled from 'styled-components/native'

export const CardTime = Styled.View`
    width: 100%;
    height: 260px;
    padding: 16px;
    border-radius: 0px 0px 8px 8px;
    background-color: ${(props: any) => (props.background ? props.background : '#fefefe')};
    margin-bottom: 24px;
`
export const CardHeader = Styled.View`
    width: 100%;
    height: auto;
    padding: 16px;
    flex-direction: row;
    background-color: #fefefe;
    justify-content: center;
    align-items: center;
    border-radius: 8px 8px 0px 0px;
`
export const ViewPlayer = Styled.View`
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const TextCard = Styled.Text`
    font-size: 14px;
    font-weight: 700;
    font-family: 'Roboto';
    color: #fefefe;
`
export const Wrapper = Styled.View`
    width: 100%;
    height: auto;
    flex-direction: row;
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