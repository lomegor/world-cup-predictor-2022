import styled from "styled-components";

export const Container = styled.button<{ selected?: boolean; selected2?: boolean }>`
    position: relative;
    padding: 0;
    color: inherit;
    font: inherit;
    background: none;
    border: none;
    outline: inherit;
    cursor: pointer;
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: 25px auto;
    align-items: center;
    border-top: 1px solid #d8d8d8;
    padding: 8px;
    border-radius: 3px;

    img {
        width: 25px;
    }

    ${({ selected }) =>
        selected &&
        `
        background-color: #629658;
        font-weight: 400;
    `}
    ${({ selected2 }) =>
        selected2 &&
        `
        background-color: #629658b8;
        font-weight: 400;
    `}
`;

export const Name = styled.div``;

export const Selected = styled.div`
    position: absolute;
    right: 8px;
`;
