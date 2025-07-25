import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  const [quizTitle, setQuizTitle] = useState('');
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'Where was our first meet?',
      options: ['Theater', 'Park', 'Restaurant', 'Beach'],
      selectedOption: 'Theater',
      prize: ''
    }
  ]);
  const handleAddQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      question: '',
      options: ['', '', '', ''],
      selectedOption: '',
      prize: ''
    };
    setQuestions([...questions, newQuestion]);
  };
  const handleQuestionChange = (id, newText) => {
    setQuestions(questions.map(q =>
      q.id === id ? { ...q, question: newText } : q
    ));
  };
  const handleOptionChange = (id, optionIndex, newValue) => {
    setQuestions(questions.map(q =>
      q.id === id
        ? {
            ...q,
            options: q.options.map((opt, idx) =>
              idx === optionIndex ? newValue : opt
            )
          }
        : q
    ));
  };
  const handleSelectOption = (questionId, value) => {
    setQuestions(questions.map(q =>
      q.id === questionId ? { ...q, selectedOption: value } : q
    ));
  };
  const handlePrizeChange = (id, value) => {
    setQuestions(questions.map(q =>
      q.id === id ? { ...q, prize: value } : q
    ));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      quiz: {
        title: quizTitle,
        questions_attributes: questions.map(q => ({
          question: q.question,
          options: q.options,
          correct_answer: q.selectedOption,
          prize: q.prize
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
    } catch (error) {
      console.error('Error creating quiz:', error);
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
            Create fun, sweet, and personalized questions about your relationship
            and send the quiz to your partner.
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
                Quiz Title:
                <input
                  type="text"
                  value={quizTitle}
                  onChange={(e) => setQuizTitle(e.target.value)}
                  placeholder="Enter your quiz title..."
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
            {questions.map((q, index) => (
              <div key={q.id} style={{ marginBottom: '2rem', textAlign: 'left' }}>
                <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>
                  Question #{index + 1}:
                  <input
                    type="text"
                    value={q.question}
                    onChange={(e) => handleQuestionChange(q.id, e.target.value)}
                    placeholder="Type your question here..."
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
                <div style={{ marginTop: '1rem' }}>
                  {q.options.map((opt, optIdx) => (
                    <label key={optIdx} style={{ display: 'block', marginBottom: '0.5rem' }}>
                      <input
                        type="radio"
                        name={`question-${q.id}`}
                        value={opt}
                        checked={q.selectedOption === opt}
                        onChange={() => handleSelectOption(q.id, opt)}
                      />{" "}
                      <input
                        type="text"
                        value={opt}
                        onChange={(e) => handleOptionChange(q.id, optIdx, e.target.value)}
                        placeholder={`Option ${optIdx + 1}`}
                        style={{
                          marginLeft: '0.5rem',
                          padding: '0.3rem',
                          borderRadius: '4px',
                          border: '1px solid #ccc'
                        }}
                      />
                    </label>
                  ))}
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>
                    Unlocked prize:
                    <input
                      type="text"
                      value={q.prize}
                      onChange={(e) => handlePrizeChange(q.id, e.target.value)}
                      placeholder="e.g. A dinner date, a surprise gift..."
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
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddQuestion}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#494949',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginBottom: '1rem'
              }}
            >
              Add Question
            </button>
            <button
              type="submit"
              style={{
                marginLeft: '1rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#7C7A7A',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Create Quiz
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
