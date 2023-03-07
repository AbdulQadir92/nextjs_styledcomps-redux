import Head from 'next/head'
import { HomeStyled } from '../styles/pages/Home.styled'
import Hero from '../components/homepage/Hero'
import { connect } from 'react-redux'

const Home = () => {

  return (
    <div>
      <Head>
        <title>Responsive Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeStyled>
        <Hero />
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
