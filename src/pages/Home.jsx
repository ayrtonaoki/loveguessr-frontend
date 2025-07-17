import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected option:", selectedOption);
    // You can navigate or trigger quiz logic here
  };

  return (
    <div style={{
      backgroundColor: '#ffd6e8',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Poppins', sans-serif"
    }}>
      {/* Header */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem'
      }}>
        <h1 style={{
          fontFamily: "'Pacifico', cursive",
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
          <Link to="/register" style={linkStyle}>Sign Up</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textAlign: 'center',
        padding: '4rem 2rem 2rem'
      }}>
        <div style={{ maxWidth: '600px' }}>
          <p style={{
            fontSize: '1.2rem',
            color: '#333333',
            marginBottom: '2rem'
          }}>
            Create fun, sweet and custom questions about your relationship and
            send this quiz to your partner
          </p>

          <h2 style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            color: '#702B50',
            fontFamily: "'Pacifico', cursive"
          }}>
            Give it a try!
          </h2>

          {/* Quiz Type Selector */}
          <form onSubmit={handleSubmit} style={{
            backgroundColor: '#fff',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#702B50', marginBottom: '1rem' }}>Choose a quiz vibe:</h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              alignItems: 'flex-start'
            }}>
              <label>
                <input
                  type="radio"
                  name="quizType"
                  value="romantic"
                  checked={selectedOption === 'romantic'}
                  onChange={(e) => setSelectedOption(e.target.value)}
                /> Romantic
              </label>
              <label>
                <input
                  type="radio"
                  name="quizType"
                  value="funny"
                  checked={selectedOption === 'funny'}
                  onChange={(e) => setSelectedOption(e.target.value)}
                /> Funny
              </label>
              <label>
                <input
                  type="radio"
                  name="quizType"
                  value="deep"
                  checked={selectedOption === 'deep'}
                  onChange={(e) => setSelectedOption(e.target.value)}
                /> Deep & Emotional
              </label>
              <label>
                <input
                  type="radio"
                  name="quizType"
                  value="chaotic"
                  checked={selectedOption === 'chaotic'}
                  onChange={(e) => setSelectedOption(e.target.value)}
                /> Chaotic & Random
              </label>
            </div>

            <button
              type="submit"
              style={{
                marginTop: '1.5rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#8B2F4B',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Start Quiz
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '1rem',
        fontSize: '0.9rem',
        backgroundColor: '#ffc6df'
      }}>
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
