import React, { useState, useEffect } from 'react';
import styles from '../Styles/Quiz.module.css';
import { Link } from 'react-router-dom';



const QuizPage = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(20);
    const [quizStarted, setQuizStarted] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8080/api/quizzes/today')
            .then(response => response.json())
            .then(data => setQuestions(data.questions))
            .catch(error => console.error('Error fetching quiz:', error));
    }, []);

    useEffect(() => {
        if (quizStarted) {
            const interval = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime <= 1) {
                        handleTimeout();
                        return 20; // reset the timer for the next question
                    }
                    return prevTime - 1;
                });
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [quizStarted, currentQuestion]);

    const handleTimeout = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setQuizCompleted(true);
        }
        setTimeLeft(20);
    };

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setTimeLeft(20);
        } else {
            setQuizCompleted(true);
        }
    };

    useEffect(() => {
        if (quizCompleted) {
            fetch('http://localhost:8080/api/quizzes/complete', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: 'user@example.com', score })
            })
            .then(response => response.json())
            .then(data => console.log(`Quiz Completed! Your score: ${score}`))
            .catch(error => console.error('Error saving quiz result:', error));
        }
    }, [quizCompleted]);

    if (!quizStarted) {
        return (
            <div className={styles.start}>
                <div className={styles.white_box}>
                <span>Participate in daily quizzes and earn Badges and Rewards!</span>                
                <img style={{ widows: "40%", height: "15rem", margin: "auto" }} src="points.png" alt="Error500" />
                <button className={styles.button} onClick={() => setQuizStarted(true)}>Start Quiz</button>
                </div>
            </div>
        );
    }

    if (quizCompleted) {
        return( 
        <div className={styles.start}>
            <div className={styles.white_box2}>
                <div className={styles.thankyou}>Thankyou for taking the quiz!</div>
                <div className={styles.text}>Your score: {score}</div>
                <div className={styles.text}>Hope to see you tommorow!</div>
                <Link to='/'><button style={{backgroundColor:"orange",paddingLeft:"1rem",paddingRight:"1rem",marginTop:"2rem",borderRadius:"2%",fontSize:"1.4rem"}}>Home</button></Link>
            </div>
        </div>
        );
    }

    if (questions.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.start}>
            <div className={styles.quiz_box}>
            <div className={styles.time}>Time left: {timeLeft} seconds</div>
            <div className={styles.question}>{questions[currentQuestion].question}</div>
            {questions[currentQuestion].answers.map((answer, index) => (
                <button className={styles.options} key={index} onClick={() => handleAnswer(answer.isCorrect)}>{answer.text}</button>
            ))}
            
            </div>
        </div>
    );
};

export default QuizPage;
