import styled from "styled-components"


export const HeroStyled = styled.section`
    display: flex;

    background: linear-gradient(180deg, #6F7DFB 0%, #26308C 100%);
    height: 100vh;
    padding-top: 160px;
    overflow: hidden;

    @media (max-width: 1200px) {
        flex-direction: column;
        height: auto;
    }
`

export const LeftColumn = styled.div`
    width: 40%;

    h1 {
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 900;
        font-size: 50px;
        line-height: 125%;
        color: #FFFFFF;
        margin-bottom: 20px;

        display: flex;
        flex-direction: column;
    }

    p {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 200%;
        color: #FFFFFF;
        margin-bottom: 20px;

        display: flex;
        flex-direction: column;
    }

    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 16px 32px;
        gap: 10px;

        width: 183px;
        height: 59px;
        background: #DA722C;
        border-radius: 24px;
        text-decoration: none;
        color: white;

        span {
            font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 27px;
        }
    }

    @media (max-width: 1400px) {
        width: 45%;
    }

    @media (max-width: 1200px) {
        width: 100%;

        display: flex;  
        flex-direction: column;
        justify-content: center;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 36px;
            line-height: 125%;
        }
    }
`

export const RightColumn = styled.div`
    display: flex;
    justify-content: space-between;

    width: 60%;
    
    img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 1400px) {
        width: 55%;
    }

    @media (max-width: 1200px) {
        width: 100%;
    }
`

export const Cards = styled.div`
    width: 20%;
    position: relative;
`

export const Card1 = styled.div`
    position: absolute;
    top: 18%;
    left: 0;
    z-index: 2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 195px;
    height: 90px;
    background: #FFFFFF;
    border-radius: 24px;
    padding-bottom: 10px;

    h3 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 125%;
        /* identical to box height, or 45px */
        color: #023047;
    }

    div {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 125%;
        /* identical to box height, or 20px */
        color: #023047;
    }

    @media (max-width: 1400px) {
        left: -20px;        
    }

    @media (max-width: 1200px) {
        left: 100px;        
    }

    @media (max-width: 768px) {
        left: 0;        

        h3 {
            font-size: 30px;
        }

        div {
            font-size: 14px;
        }
    }
`

export const Card1Shadow = styled.div`
    position: absolute;
    top: calc(18% + 4px);
    left: 8px;
    z-index: 1;

    width: 195px;
    height: 90px;
    background: linear-gradient(180deg, #6F7DFB 0%, #3B448F 100%);
    border-radius: 24px;

    @media (max-width: 1400px) {
        left: -12px;        
    }

    @media (max-width: 1200px) {
        left: 108px;        
    }

    @media (max-width: 768px) {
        left: 8px;        
    }
`

export const Card2 = styled.div`
    position: absolute;
    top: 63%;
    left: -25px;
    z-index: 2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 183px;
    height: 90px;
    background: #FFFFFF;
    border-radius: 24px;

    > div:first-child {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 60%;
    }

    h3 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 125%;
        /* identical to box height, or 45px */
        color: #023047;
    }

    img {
        width: 35px;
        height: 35px;
        color: #FFCE31;
    }

    > div:last-child {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 125%;
        /* identical to box height, or 20px */
        color: #023047;
    }

    @media (max-width: 1400px) {
        left: -70px;        
    }

    @media (max-width: 1200px) {
        left: 100px;        
    }

    @media (max-width: 768px) {
        left: 0;        

        h3 {
            font-size: 30px;
        }

        div {
            font-size: 14px;
        }
    }
`

export const Card2Shadow = styled.div`
    position: absolute;
    top: calc(63% + 8px);
    left: -21px;
    z-index: 1;

    width: 183px;
    height: 90px;
    background: linear-gradient(180deg, #6F7DFB 0%, #3B448F 100%);
    border-radius: 24px;

    @media (max-width: 1400px) {
        left: -66px;        
    }

    @media (max-width: 1200px) {
        left: 108px;        
    }

    @media (max-width: 768px) {
        left: 4px;        
    }
`

export const ImageSection = styled.div`
    position: relative;

    @media (max-width: 992px) {
        img {
            position: relative;
            left: 70px;        
        }
    }

    @media (max-width: 768px) {
        img {
            left: 80px;        
        }
    }

    @media (max-width: 576px) {
        img {
            left: 110px    
        }
    }
`