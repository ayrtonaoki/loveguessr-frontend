import { Link } from 'react-router-dom';

const linkStyle = {
  marginLeft: '1rem',
  textDecoration: 'none',
  fontWeight: 'bold',
  color: '#000',
  backgroundColor: '#FFFFFF',
  padding: '0.5rem 1rem',
  borderRadius: '8px'
};

function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#FF5D73'
    }}>
      <h1 style={{
        fontFamily: "'Pacifico', cursive",
        fontSize: '2rem',
        fontWeight: 'bold',
        color: 'white',
        textShadow: '2px 2px 0 #000'
      }}>
        MyLoveShop
      </h1>
      <nav>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/faq" style={linkStyle}>FAQ</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/register" style={linkStyle}>Sign Up</Link>
      </nav>
    </header>
  );
}

export default Header;
