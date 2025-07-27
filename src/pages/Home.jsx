import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  const [shopTitle, setShopTitle] = useState('');
  const [products, setProducts] = useState([
    {
      id: 1,
      product: ''
    }
  ]);
  const handleAddProduct = () => {
    if (products.length >= 5) {
      alert('Você só pode adicionar no máximo 5 produtos.');
      return;
    }
    const newProduct = {
      id: Date.now(),
      product: ''
    };
    setProducts([...products, newProduct]);
  };
  const handleProductChange = (id, newText) => {
    setProducts(products.map(p =>
      p.id === id ? { ...p, product: newText } : p
    ));
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  // ✅ Validation logic
  if (!shopTitle.trim()) {
    alert('Shop title is required.');
    return;
  }
  if (products.some(p => !p.product.trim())) {
    alert('All product fields must be filled.');
    return;
  }

  const payload = {
    shop: {
      title: shopTitle,
      products_attributes: products.map(p => ({
        product: p.product
      }))
    }
  };

  try {
    const response = await fetch('http://localhost:3001/api/v1/quizzes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Quiz created:', data);
    alert('Shop created successfully!'); // Optional: user feedback
  } catch (error) {
    console.error('Error creating quiz:', error);
    alert('An error occurred. Please try again.'); // Optional: user feedback
  }
};


  return (
    <div style={{
      backgroundColor: '#FF5D73',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <Header />
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
            color: '#000000',
            marginBottom: '2rem'
          }}>
            Design a lovely shop full of heartfelt gifts, sweet surprises,
            and meaningful acts of love for your special someone.
          </p>

          <h2 style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            color: '#FFFFFF',
            fontFamily: "'Pacifico', cursive"
          }}>
            Free for 24 hours, try it now:
          </h2>

          <form onSubmit={handleSubmit} style={{
            backgroundColor: '#fff',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
              <label style={{
                  fontWeight: 'bold',
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontSize: '20px'
                }}>
                Shop name:
                <input
                  type="text"
                  value={shopTitle}
                  onChange={(e) => setShopTitle(e.target.value)}
                  placeholder="My Love Shop"
                  style={{
                    display: 'block',
                    width: '100%',
                    marginTop: '0.5rem',
                    padding: '0.5rem',
                    borderRadius: '6px',
                    border: '1px solid #ccc'
                  }}
                />
              </label>
            </div>
            {products.map((p, index) => (
              <div key={p.id} style={{ marginBottom: '2rem', textAlign: 'left' }}>
                <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>
                  Product #{index + 1}:
                  <input
                    type="text"
                    value={p.product  }
                    onChange={(e) => handleProductChange(p.id, e.target.value)}
                    placeholder="A hug, dinner, household chores..."
                    style={{
                      display: 'block',
                      width: '100%',
                      marginTop: '0.5rem',
                      padding: '0.5rem',
                      borderRadius: '6px',
                      border: '1px solid #ccc'
                    }}
                  />
                </label>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddProduct}
              disabled={products.length >= 5}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: products.length >= 5 ? '#ccc' : '#7C7A7A',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: products.length >= 5 ? 'not-allowed' : 'pointer',
                marginBottom: '1rem'
              }}
            >
              Add New Product
            </button>
            <button
              type="submit"
              style={{
                marginLeft: '1rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#494949',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Create Shop
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
