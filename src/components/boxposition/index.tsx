import { BoxText, Container } from "./styles"

interface IBoxPostionProps {
    selected: boolean
    position: string
    onPress: () => void
}

export const BoxPostion = (props: IBoxPostionProps ) => {
    return (
        <Container selected={props.selected} onPress={props.onPress}>
            <BoxText>{props.position}</BoxText>
        </Container>
    )
}