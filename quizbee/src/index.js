
import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";
import { questionAmount } from './config';


function shuffle (a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function formatQuestions (unformattedQuestions) {
    const formattedQuestions = unformattedQuestions.map(
        (unformattedQuestions) => {
            return {
                question: unformattedQuestions.question,
                correctAnswer: unformattedQuestions.correct_answer,
                options: shuffle(unformattedQuestions.incorrect_answers.concat(unformattedQuestions.correct_answer)),
            }
        } 
    )

    return formattedQuestions
}


class QuizBee extends Component {

    state = {
        questionBank: [],
        score: 0,
        responses: 0,
    };

    getQuestions = () => {
        fetch(`https://opentdb.com/api.php?amount=${questionAmount}`)
        
        .then(response => response.json())

        .then(response => {

            console.log(response)
            const questions = formatQuestions(response.results)
            this.setState({
                questionBank: questions,
            });
        })
        
    }


    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
            })
        }

        this.setState({
            responses: this.state.responses < questionAmount ? this.state.responses + 1 : questionAmount
        })
    }

    playAgain = () => {
        this.getQuestions();
        this.setState({
            score: 0,
            responses: 0,
        });
    }


    componentDidMount() {
        this.getQuestions();

    }


    render() {
        return (
            <div className="container">
                <div className="title">Matule Quiz</div>

                {this.state.questionBank.length > 0 && 
                    this.state.responses < questionAmount &&
                    this.state.questionBank.map(
                        (question, index) => (
                            <QuestionBox
                                question={question.question}
                                options={question.options}
                                correctAnswer={question.correctAnswer}
                                key={index}
                                selected={(answer) => this.computeAnswer(answer, question.correctAnswer)}
                            />
                        )
                    )
                }

                {this.state.responses === questionAmount
                ? (
                    <Result
                    score={this.state.score}
                    playAgain={this.playAgain}
                    questionAmount={questionAmount}/>
                   )
                : null}
            </div>
        );
    };
}

ReactDOM.render(<QuizBee />, document.getElementById("root"));