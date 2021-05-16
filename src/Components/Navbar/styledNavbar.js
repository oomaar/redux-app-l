import styled from "styled-components/macro";

export const Nav = styled.nav``;

export const Container = styled.div`
    background-color: #212529;
    display: flex;
    padding: 10px 20px;

    @media(max-width: 1100px) {
        justify-content: space-between;
    }
`;

export const LogoBox = styled.div`
    flex: 0.5;
`;

export const Logo = styled.h1`
    font-family: 'Dancing Script', cursive;
    font-size: 2.1875rem;
    letter-spacing: 4px;
    color: #fff;
    cursor: pointer;
`;

export const List = styled.ul`
    display: flex;
    flex: 0.5;
    justify-content: space-around;
    align-items: center;
    padding: 0px;
    margin: 0px;

    @media(max-width: 1100px) {
        display: none;
        position: absolute;
        top: 120px;
        left: 0px;
        background-color: #212529;
        border-bottom: 4px solid rgba(236, 236, 236, 0.9);
        width: 100%;
        padding: 0px;
        margin: 0px;
    }
`;

export const ListItem = styled.li`
    list-style: none;

    @media(max-width: 1100px) {
        text-align: center;
    }
`;

export const Link = styled.a`
    color: #ddd;
    font-size: 1.1rem;
    letter-spacing: 1px;
    font-weight: 500;
    text-transform: uppercase;

    @media(max-width: 1100px) {
        height: 40px;
        line-height: 43px;
        margin: 3px;
        padding: 0px 20px;
        font-size: 0.9rem;
    }
`;

export const MenuIcon = styled.label`
    display: none;

    @media(max-width: 1100px) {
        display: block;
        cursor: pointer;
        float: right;
        padding: 28px 20px;
        position: relative;
        user-select: none;
    }
`;

export const NavIcon = styled.span`
    @media(max-width: 1100px) {
        background-color: #fff;
        display: block;
        height: 2px;
        position: relative;
        transition: background 0.2s ease-out;
        width: 24px;

        ::before,
        ::after {
            background: rgb(255, 255, 255);
            content: '';
            display: block;
            height: 100%;
            position: absolute;
            transition: all ease-out 0.2s;
            width: 100%;
        }

        ::before {
            top: 6px;
        }

        ::after {
            top: -6px;
        }
    }
`;

export const MenuBtn = styled.input`
    display: none;

    @media(max-width: 1100px) {
        display: none;

        :checked ~ ${List} {
            display: block;
        }

        :checked ~ ${MenuIcon} ${NavIcon} {
            background: transparent;
        }

        :checked ~ ${MenuIcon} ${NavIcon}::before {
            transform: rotate(-45deg);
            top: 0;
            background-color: #f00;
        }

        :checked ~ ${MenuIcon} ${NavIcon}::after {
            transform: rotate(45deg);
            top: 0;
            background-color: #f00;
        }
    }
`;