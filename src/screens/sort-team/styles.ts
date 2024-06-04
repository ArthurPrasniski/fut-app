import Styled from 'styled-components/native'

export const BoxHeader = Styled.View`
   width: 100%;
  gap: 20px;
  justify-content: space-between;
`
export const BoxBody = Styled.View`
 margin-top: 20px;
`
export const BoxFlatList = Styled.View`
 flex-direction: column;
 width: 100%;
 max-height: ${(props: any) => (props.height ? props.height : '360px')};
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
  justify-content: center;
  align-items: center;
  gap: 32px;
  bottom: 0px;
`
export const BoxFlex = Styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
`

export const ModalView = Styled.View`
  background-color: #fefefe;
  padding: 20px;
  border-radius: 12px 12px 0px 0px;
  width: 100%;
  height: 220px;
  bottom: 0;
  position: absolute;
  align-self: center;
`

export const TitleModal = Styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
  text-align: center;
`
export const SkillValue = Styled.Text`
  margin-top: 12px; 
  font-size: 24px;
  color: #000;
  font-weight: bold;
  text-align: center;
`

export const BoxSkill = Styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`
export const SkillText = Styled.Text`
  font-size: 14px;
  color:  #fefefe;
  font-weight: normal;
  text-align: center;
`
export const SkillValueText = Styled.Text`
  font-size: 18px;
  color:  ${(props: any) => (props.color ? props.color : '#fefefe')};
  font-weight: bold;
  text-align: center;
`
export const ContentWrapper = Styled.View`
  width: 100%;
  height: 100%;
  gap: 24px;
`