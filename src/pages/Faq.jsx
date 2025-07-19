import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Faq() {
  return (
    <div style={{
      backgroundColor: '#FF5D73',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <Header />

      {/* Wrapper that will grow and push footer down */}
      <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
        <main style={{
          maxWidth: '700px',
          margin: '2rem',
          padding: '2rem',
          backgroundColor: '#fff',
          borderRadius: '10px'
        }}>
          <h1 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#FF5D73' }}>
            Frequently Asked Questions
          </h1>
          <section style={{ marginBottom: '1.5rem' }}>
            <h2>Do I need to create an account to use the free version?</h2>
            <p>
              No, you can start building your quiz right away — no sign-up required.
            </p>
          </section>

          <section style={{ marginBottom: '1.5rem' }}>
            <h2>Can I create a quiz for free?</h2>
            <p>
              Yes! You can create a free quiz with up to <strong>10 questions</strong>. Each quiz lasts for <strong>24 hours</strong> before it expires.
            </p>
          </section>

          <section style={{ marginBottom: '1.5rem' }}>
            <h2>How does the quiz work?</h2>
            <p>
              You create personalized questions and select the correct answers. Then, share the quiz link with your partner. They have 24 hours to complete it.
            </p>
          </section>

          <section style={{ marginBottom: '1.5rem' }}>
            <h2>Will I see my partner’s answers?</h2>
            <p>
              Yes — if they complete the quiz within the 24-hour limit, their answers will be saved and visible to you.
            </p>
          </section>

          <section style={{ marginBottom: '1.5rem' }}>
            <h2>Is my quiz private?</h2>
            <p>
              Anyone with the quiz link can access it. If you want private, restricted-access quizzes, upgrade to the <strong>Lover version</strong>.
            </p>
          </section>

          <section style={{ marginBottom: '1.5rem' }}>
            <h2>Can I create quizzes that don’t expire?</h2>
            <p>
              Yes, but only with the <strong>Lover version</strong>, which requires creating an account and subscribing.
            </p>
          </section>

          <section style={{ marginBottom: '1.5rem' }}>
            <h2>What are the benefits of the Lover version?</h2>
            <p>
              With the Lover version, you can:
              <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem' }}>
                <li>Create unlimited quizzes</li>
                <li>Add unlimited questions</li>
                <li>Use different question types (not just multiple choice)</li>
                <li>Prevent your quizzes from expiring</li>
                <li>Make your quizzes private</li>
              </ul>
            </p>
          </section>

        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Faq;
