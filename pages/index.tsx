import Head from 'next/head'
import { HomeStyled } from '../styles/pages/Home.styled'
import { connect } from 'react-redux'


const Home = ({ user }: any) => {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeStyled>
        <h1>Home Page</h1>
        <img src="/images/demo.png" alt="..." />
        <img src="/images/facebook-icon.svg" alt="..." />
      </HomeStyled>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(Home)
