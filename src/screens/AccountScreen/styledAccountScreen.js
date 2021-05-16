import styled from "styled-components/macro";

export const AccountSection = styled.section``;

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const UserImage = styled.div`
    width: 7rem;
    height: 7rem;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const UserName = styled.h4`
    font-size: 20px;
    color: #000;
    margin: 0;
`;