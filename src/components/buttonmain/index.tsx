import { ButtonCustom, ButtonText } from "./styles"
import { Feather } from '@expo/vector-icons';

interface IButtonProps {
    text?: string;
    onPress: () => void;
    width?: string;
    isCalendar?: boolean;
    color?: string;
}

export const ButtonMain = (props: IButtonProps) => {
    return (
        <ButtonCustom onPress={props.onPress} width={props.width} color={props.color}>
            <ButtonText>
                {props.text}
                {props.isCalendar && <Feather name="calendar" size={24} color="white" />}
            </ButtonText>
        </ButtonCustom>
    )
}