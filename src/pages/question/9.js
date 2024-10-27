import { useRouter } from 'next/router';
import { geographyQuiz } from '../../entities/Quiz';
import { useState } from 'react';

export default function GeographyQuizPage() {
    const router = useRouter();
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const currentQuestion = geographyQuiz.quizQuestions[2];

    const handleAnswerChange = (e) => {
        setSelectedAnswer(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedAnswer === currentQuestion.correctAnswer) {
            alert("Correct answer! You have completed the quiz!");
            router.push(`/`);
        } else {
            alert("Incorrect answer. Try again!");
        }
    };

    return (
        <div className="quiz-container">
            <h1>{geographyQuiz.quizName}</h1>
            <br></br>
            <h2>{currentQuestion.question}</h2>

            <form onSubmit={handleSubmit}>
                {currentQuestion.answer.map((option, index) => (
                    <div key={index}>
                        <input
                            type="radio"
                            id={`answer${index}`}
                            name="answer"
                            value={option}
                            onChange={handleAnswerChange}
                            checked={selectedAnswer === option}
                        />
                        <label htmlFor={`answer${index}`}>{option}</label>
                    </div>
                ))}
                <br></br>
                <button type="submit">Submit Answer</button>
            </form>
        </div>
    );
}
