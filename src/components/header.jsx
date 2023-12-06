import logo from '/logo.svg'
import '../styles/header.css'

function Header() {
  return (
    <>
      <header>
        <div className="logo"><button><img id="logo-img" src={logo}></img></button></div>
        <nav>
          <ul className='nav-buttons'>
            <li><button>ABOUT</button></li>
            <li><button>PROJECTS</button></li>
            <li><button>CONTACT</button></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header