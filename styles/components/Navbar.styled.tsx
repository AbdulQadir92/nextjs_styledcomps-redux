import styled from "styled-components"

export const NavbarStyled = styled.nav`
    position: fixed;
    left: 7.5%;
    right: 7.5%;
    top: 32px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 85%;
    height: 60px;

    > div {
        width: 50%;
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 900;
        font-size: 40px;
        color: white;
    }
    
    ul {
        display: flex;
        column-gap: 10px;
        justify-content: space-between;
        align-items: center;

        width: 50%;
        list-style-type: none;
        padding-left: 30px;
    }

    a {
        text-decoration: none;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        color: white;
    }

    @media (max-width: 1200px) {
        left: 5%;
        right: 5%;
        width: 90%;

        > div {
            width: 40%;
        }

        ul {
            width: 60%;
        }
    }

    @media (max-width: 992px) {
        > div {
            width: 30%;
        }

        ul {
            width: 70%;
        }
    }

    @media (max-width: 768px) {
        > div {
            font-size: 36px;
        }

        ul {
            visibility: hidden;
        }
    }
`

export const EnrolButton = styled.li`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px 32px;
    gap: 10px;

    background: #023047;
    border-radius: 24px;

    a {
        font-size: 18px;
        line-height: 27px;
    }

    @media (max-width: 992px) {
        padding: 12px 32px;

        a {
            font-size: 16px;
            line-height: 24px;
        }
    }  
`

export const MenuIcon = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        position: absolute;
        top: 42px;
        right: 5%;

        img {
            color: #023047;
            width: 50px;
            height: 50px;
        }   
    }
`