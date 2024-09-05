import { Trash } from "lucide-react-native";
import { ButtonCustom } from "./styles"
import { MaterialIcons } from '@expo/vector-icons';

interface IButtonProps {
    text?: string;
    onPress: () => void;
}

export const ButtonDelete = (props: IButtonProps) => {
    return (
        <ButtonCustom onPress={props.onPress}>
            <Trash size={24} color="#ff5555" />
        </ButtonCustom>
    )
}