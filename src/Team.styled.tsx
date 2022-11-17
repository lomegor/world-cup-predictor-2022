import styled from "styled-components";

export const Container = styled.button<{ selected?: boolean; selected2?: boolean }>`
    padding: 0;
    color: inherit;
    font: inherit;
    background: none;
    border: none;
    outline: inherit;
    cursor: pointer;
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: 50px auto;
    align-items: center;
    ${({ selected }) => selected && "background-color: green;"}
    ${({ selected2 }) => selected2 && "background-color: blue;"}
`;

export const Name = styled.div``;
