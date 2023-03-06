import Link from "next/link"
import { connect } from 'react-redux'
import { logout } from "../store/actions/authActions"
import { useRouter } from 'next/router'
import { NavbarStyled } from "../styles/components/Navbar.styled"


const Navbar = ({ toggleTheme, logout }: any) => {
  const router = useRouter();
  const logoutUser = () => {
    logout();
    router.push('/login');
  }

  return (
    <NavbarStyled>
      <h3 onClick={toggleTheme}>Change Theme</h3>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/albums">Albums</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/signup">Signup</Link>
        </li>
        <li>
          <span onClick={logoutUser}>Logout</span>
        </li>
      </ul>
    </NavbarStyled>
  )
}



export default connect(null, { logout })(Navbar)