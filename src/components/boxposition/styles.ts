import Styled from 'styled-components/native'

type ContainerProps = {
    selected: boolean;
};

export const Container = Styled.TouchableOpacity<ContainerProps>`
  background-color: #fff;
  border-width: ${({ selected }) => (selected ? '2px' : '0px')};
  border-color: ${({ selected }) => (selected ? '#50fa7b' : 'transparent')};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
`
export const BoxText = Styled.Text`
    font-size: 18px;
    color: #282a36;
    font-weight: bold;
`