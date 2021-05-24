import React, {useState} from "react";

const QuestionBox = ({question, options, selected}) => {
    console.log('1111 las opciones para la pregunta', question, 'son', options)

    
    const [answer, setAnswer] = useState(options);
    console.log('las opciones para la pregunta', question, 'son', answer)
    return (
        <div className="questionBox">
            <div className="question">{question}</div>
            {answer.map((text, index) => (
                <button key={index} className="answerBtn" onClick={() => {
                    setAnswer([text]);
                    selected(text)
                }}>
                    {text}
                </button>
            ))}
        </div>
    )
}

export default QuestionBox