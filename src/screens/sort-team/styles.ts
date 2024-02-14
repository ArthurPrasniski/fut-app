import Styled from 'styled-components/native'

export const BoxHeader = Styled.View`
  width: 100%;
  gap: 20px;
`
export const BoxBody = Styled.View`
 width: 100%;
 margin-top: 20px;
`
export const BoxFlatList = Styled.View`
 flex-direction: column;
 width: 100%;
 height: ${(props: any) => (props.height ? props.height : '380px')};
`
export const BoxContent = Styled.View`
  margin-top: 12px; 
  gap: 12px;
  flex-direction: row;
`
export const BoxMap = Styled.View`
  width: 100%;
  flex-direction: row;
  gap: 12px;
`
export const BoxFooter = Styled.View`
  width: 100%;
  position: absolute;
  bottom: 20px;
`
export const BoxFlex = Styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
`