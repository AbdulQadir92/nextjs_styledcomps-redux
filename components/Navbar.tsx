import Link from "next/link"
import { connect } from 'react-redux'
import { logout } from "../store/actions/authActions"
import { useRouter } from 'next/router'
import { NavbarStyled, EnrolButton, MenuIcon } from "../styles/components/Navbar.styled"


const Navbar = ({ toggleTheme, logout }: any) => {
  const router = useRouter();
  const logoutUser = () => {
    logout();
    router.push('/login');
  }

  return (
    <>
      <NavbarStyled id="navbar">
        <div>GD.</div>
        <ul>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
          <li>
            <Link href="#">Our Work</Link>
          </li>
          <EnrolButton>
            <Link href="#">Enroll Now</Link>
          </EnrolButton>
        </ul>
      </NavbarStyled>
      <MenuIcon>
        <img src="/images/menu-icon.svg" alt="..." />
      </MenuIcon>
    </>
  )
}



export default connect(null, { logout })(Navbar)