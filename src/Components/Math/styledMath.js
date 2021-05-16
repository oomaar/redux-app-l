import styled from "styled-components/macro";

export const MathSection = styled.section`
    width: 100%;
    padding: 10px 0;
    border-top: 2px solid #333;
    border-bottom: 2px solid #333;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30%;
    margin: auto;
`;

export const IncBtn = styled.button`
    border: 0;
    outline: 0;
    background: #903749;
    color: #fff;
    cursor: pointer;
    padding: 15px;
    transition: 0.2s ease;
    border-radius: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        background-color: #333;
        transform: scale(1.3);
    }
`;

export const Result = styled.p`
    font-size: 30px;
`;

export const DecBtn = styled.button`
    border: 0;
    outline: 0;
    background: #903749;
    color: #fff;
    cursor: pointer;
    padding: 15px;
    transition: 0.2s ease;
    border-radius: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        background-color: #333;
        transform: scale(1.3);
    }
`;