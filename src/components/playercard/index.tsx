import { Container, ContainerPosition, PlayerText, PositionText } from "./styles"

interface IPlayerCardProps {
    name: string;
    position: boolean;
}

export const PlayerCard = (props: IPlayerCardProps) => {
    return (
        <Container>
            <PlayerText>
                {props.name}
            </PlayerText>
            {props.position ?
                <ContainerPosition>
                    <PositionText>
                        GK
                    </PositionText>
                </ContainerPosition>
                : ''}
        </Container>
    )
}