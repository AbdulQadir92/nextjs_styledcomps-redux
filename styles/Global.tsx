import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Raleway:wght@900&display=swap');

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    section {
        padding-left: 7.5%;
        padding-right: 7.5%;
    }

    @media (max-width: 1200px) {
        section {
            padding-left: 8%;
            padding-right: 8%;
        }
    }

    @media (max-width: 768px) {
        section {
            padding-left: 5%;
            padding-right: 5%;
        }
    }

    @media (min-width: 1800px) {
        section {
            padding-left: 10%;
            padding-right: 10%;
        }
    }
`

export default GlobalStyles