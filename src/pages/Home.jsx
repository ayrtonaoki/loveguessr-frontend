import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ backgroundColor: '#ffd6e8', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem' }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: 'white',
          textShadow: '2px 2px 0 #000'
        }}>
          LoveGuessr
        </h1>
        <nav>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/login" style={linkStyle}>Login</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Create your own relationship quiz</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            LoveGuessr lets you build fun and thoughtful quizzes about your relationship.
            Share it with your partner and see how well they really know you!
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '1rem', fontSize: '0.9rem', backgroundColor: '#ffc6df' }}>
        Contact: loveguessr@example.com
      </footer>
    </div>
  );
}

const linkStyle = {
  marginLeft: '1rem',
  textDecoration: 'none',
  fontWeight: 'bold',
  color: '#000',
  backgroundColor: '#fff',
  padding: '0.5rem 1rem',
  borderRadius: '8px'
};

export default Home;
