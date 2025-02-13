import { HandIcon } from "lucide-react-native";
import { Container, ContainerPosition, PlayerText, PositionText, SkillContainer, SkillText } from "./styles"

interface IPlayerCardProps {
    name: string;
    position: boolean;
    // skill: number;
}

export const PlayerCard = (props: IPlayerCardProps) => {
    // const setColorSkill = (skill: number) => {
    //     if (skill <= 33) {
    //         return 'red'
    //     } else if (skill > 33 && skill <= 69) {
    //         return 'orange'
    //     } else {
    //         return 'green'
    //     }
    // }
    return (
        <Container>
            <PlayerText>
                {props.name}
            </PlayerText>
            {props.position ?
                <HandIcon size={24} color="#50fa7b" />
                : ''}
            {/* <SkillContainer background={setColorSkill(props.skill)}>
                <SkillText>
                    {props.skill.toFixed()}
                </SkillText>
            </SkillContainer> */}
        </Container>
    )
}