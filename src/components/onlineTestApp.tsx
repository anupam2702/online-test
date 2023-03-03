import React, { useState } from 'react';
import { Chart } from "react-google-charts";

const unAnswered = { height: "15px", cursor: 'pointer', width: "15px", padding: '5px', marginLeft: "10px", backgroundColor: 'grey', color: 'black' }
const answered = { height: "15px", cursor: 'pointer', width: "15px", padding: '5px', marginLeft: "10px", backgroundColor: 'red', color: 'white' }


export const data = [
    ["Answered"],
    ["unanswered"],

];

export const options = {
    title: "Result",
};
function OnlineTestApp() {
    const questions = [
        {
            questionText: 'What is the capital of France?',

            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'London', isCorrect: true },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Dublin', isCorrect: false },
            ],
        },
        {
            questionText: 'What is the capital of India?',
            answerOptions: [
                { answerText: 'punjab', isCorrect: false },
                { answerText: 'jaisalmer', isCorrect: false },
                { answerText: 'Delhi', isCorrect: true },
                { answerText: 'nepal', isCorrect: false },
            ],
        },

        {
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },
        {
            questionText: 'Who is the CEO of Twitter?',
            answerOptions: [
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Michal', isCorrect: false },
                { answerText: 'Trump', isCorrect: false },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [completed, setCompleted] = useState([] as any)

    const handleAnswerOptionClick = (isCorrect: boolean, index: number) => {
        setCompleted([...completed, index])
        if (isCorrect) {
            setScore(score + 1);
        }
        currentQuestion + 1 < questions.length ? setCurrentQuestion((prev) => prev + 1) : setShowScore(true)
    };


    return (
        <>

            <div style={{ position: 'absolute', top: "10px", display: 'flex', justifyContent: 'center', marginLeft: "350px" }}>
                {
                    questions.map((e, i) => (
                        <div onClick={() => setCurrentQuestion(i)} style={completed.includes(i) ? answered : unAnswered}>{i + 1}</div>
                    ))
                }
            </div>
            <div className='app'>
                {showScore ? (
                    <div className='score-section'>
                        You scored {score} out of {questions.length}
                        {/* <Chart
                            chartType="PieChart"
                            data={data}
                            options={options}
                            width={"100%"}
                            height={"400px"}
                        /> */}
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect, currentQuestion)}>{answerOption.answerText}</button>

                            ))}
                        </div>
                    </>
                )}
            </div>
        </>

    );
}
export default OnlineTestApp