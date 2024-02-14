import { ButtonCustom } from "./styles"
import { MaterialIcons } from '@expo/vector-icons';

interface IButtonProps {
    text?: string;
    onPress: () => void;
}

export const ButtonDelete = (props: IButtonProps) => {
    return (
        <ButtonCustom onPress={props.onPress}>
            <MaterialIcons name="delete" size={24} color="#FFFFFF" />
        </ButtonCustom>
    )
}