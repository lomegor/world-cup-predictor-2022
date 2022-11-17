import { Container, Name } from "./Team.styled";

import EmptyPNG from "./assets/empty.png";

import type { Team as TeamType } from "./data";

interface Props {
    team: TeamType;
    onClick?: () => void;
    selected?: boolean;
    selected2?: boolean;
}

const Team: React.FC<Props> = ({ team, onClick, selected, selected2 }) => {
    return (
        <Container onClick={onClick} selected={selected} selected2={selected2}>
            <img src={team.image} alt={team.name} />
            <Name>{team.name}</Name>
        </Container>
    );
};

export const EmptyTeam: React.FC<{ name: string }> = ({ name }) => {
    return (
        <Container disabled>
            <img src={EmptyPNG} alt="empty" />
            <Name>{name}</Name>
        </Container>
    );
};

export default Team;
