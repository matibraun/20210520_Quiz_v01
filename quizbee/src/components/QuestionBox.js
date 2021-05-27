import React, {useState} from "react";

const QuestionBox = ({question, options, correctAnwer}) => {
    
    const [answer, setAnswer] = useState(null);
    
    if (answer === null) {

        return (
            <div className="questionBox">
    
                <div className="question">{question}</div>
    
                {options}.map((text, index) => (
                <button key={index} className="answerBtn" onClick={() => {
                    setAnswer(text);
                }}>
                    {text}
                </button>
                ))
            
            </div>
    }

            {answer
            
            ? 
            <div>
                <button disabled={true}>{answer}</button>
                <div>Correcto</div>
            </div>
            
            :

        
    )
}

export default QuestionBox

// Destructuring args
