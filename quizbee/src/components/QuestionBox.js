import React, {useState} from "react";

const QuestionBox = ({question, options, correctAnswer, computePlay}) => {
    
    const [answer, setAnswer] = useState(null);
    
    if (answer === null) {

        return (
            <div className="questionBox">
    
                <div className="question">{question}</div>
    
                {options.map((text, index) => (
                <button key={index} className="answerBtn" onClick={() => {
                    setAnswer(text);
                    computePlay(text === correctAnswer);
                }}>
                    {text}
                </button>
                ))}
            
            </div>
        )    
    }

    if (answer === correctAnswer) {

        return (
            <div className="questionBox">
    
                <div className="question">{question}</div>
    
                <div>
                    <button disabled={true}>{answer}</button>
                    <div>Correcto!!!</div>
                </div>
            
            </div>
        )    
    }

    if (answer !== correctAnswer) {

        return (
            <div className="questionBox">
    
                <div className="question">{question}</div>
    
                <div>
                    <button disabled={true}>{answer}</button>
                    <div>La respuesta es incorrecta. La opcion correcta es {correctAnswer}</div>
                </div>
            
            </div>
        )    
    }

}

export default QuestionBox

// Destructuring args
