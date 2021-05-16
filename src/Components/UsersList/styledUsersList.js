import styled from "styled-components/macro";

export const UsersListSection = styled.section``;

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 20px 0;
`;

export const UserWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const UserImage = styled.div`
    width: 7rem;
    height: 7rem;
    margin: 0 20px;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const UserName = styled.h3`
    font-size: 1.25rem;
    color: #000;
    margin: 0;
`;