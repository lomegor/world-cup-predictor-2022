import styled from "styled-components";

export const Main = styled.main``;
export const Groups = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
`;

export const Group = styled.div``;

export const GroupName = styled.h3``;

export const Teams = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(1, 1fr);
`;

export const Knockoff = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1;
    margin-top: 24px;
`;

export const Match = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(1, 1fr);
    margin-top: 8px;
    margin-bottom: 8px;
`;

const Column = styled.div`
    display: grid;
    align-items: center;
    position: relative;
`;

export const Sixteen = styled(Column)``;
export const Quarter = styled(Column)``;
export const Semifinals = styled(Column)``;
export const Final = styled(Column)``;
export const Playoffs = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
`;
