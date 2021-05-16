import styled from "styled-components/macro";

export const HomeSection = styled.section`
    padding: 0 20px;
    background-color: #ddd;
`;

export const Container = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: auto;
    background-color: #fff;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    outline: 0;
    border: 0;
    border-radius: 20px;
    padding: 20px;
    font-size: 21px;
    font-weight: bold;
    font-family: 'Dancing Script', cursive;
    cursor: pointer;
    background-color: #1936c2;
    color: #fff;
    text-transform: uppercase;
    transition: all 0.2s ease;

    :hover {
        background-color: #1f2c09;
        transform: scale(1.2);
    }
`;