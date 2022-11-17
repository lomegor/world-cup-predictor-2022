import styled from "styled-components";

export const Main = styled.main`
    max-width: 1200px;
    margin: 0 auto;
`;

export const Header = styled.h2`
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
`;

export const Groups = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
`;

export const Group = styled.div`
    background-color: white;
    border-radius: 5px;
    padding: 8px;
    border: 1px solid #d8d8d8;

    &:hover {
        box-shadow: 0 2px 8px 0 rgb(0 0 0 / 25%);
    }
`;

export const GroupName = styled.h3`
    margin-top: 0;
    margin-bottom: 8px;
    text-align: center;
    font-weight: 400;
    text-transform: uppercase;
`;

export const Teams = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(1, 1fr);
`;

export const Knockout = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1;
    margin-top: 16px;
    gap: 16px;
    background-color: white;
    border-radius: 5px;
    padding: 8px;
    border: 1px solid #d8d8d8;
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

export const MatchHeader = styled.h3`
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    margin: 0;
    padding: 4px;
    text-transform: uppercase;
    background-color: #f8f8f8;
`;

export const Match = styled.div`
    display: grid;
    grid-template-rows: 24px auto auto;
    grid-template-columns: repeat(1, 1fr);
    margin-top: 8px;
    margin-bottom: 8px;
    border: 1px solid #d8d8d8;

    &:hover {
        box-shadow: 0 2px 8px 0 rgb(0 0 0 / 25%);
    }
`;
