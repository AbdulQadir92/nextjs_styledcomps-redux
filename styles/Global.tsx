import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }: any) => theme.colors.background};
    }
`

export default GlobalStyles