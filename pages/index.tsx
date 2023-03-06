import Head from 'next/head'
import { HomeStyled } from '../styles/pages/Home.styled'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeStyled>
        <h1>Home Page</h1>
      </HomeStyled>
    </div>
  )
}
