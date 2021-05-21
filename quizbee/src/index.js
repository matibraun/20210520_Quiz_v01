
import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";

class QuizBee extends Component {

    state = {
        questionBank: [],
        score: 0,
        responses: 0,
    };

    getQuestions = () => {
        fetch("https://opentdb.com/api.php?amount=10")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                questionBank: result.results
              });
            })
        console.log(this.state.questionBank)
    }


    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
            })
        }

        this.setState({
            responses: this.state.responses < 10 ? this.state.responses + 1 : 10
        })
    }

    playAgain = () => {
        this.getQuestions();
        this.setState({
            score: 0,
            responses: 0,
        });
    }

    shuffle = (a) => {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    componentDidMount() {
        this.getQuestions();
    }


    render() {
        return (
            <div className="container">
                <div className="title">QuizBee</div>

                {this.state.questionBank.length > 0 && 
                    this.state.responses < 10 &&
                    this.state.questionBank.map(
                        (question, index) => (
                            <QuestionBox
                                question={question.question}
                                options={question.incorrect_answers.concat(question.correct_answer)}
                                key={index}
                                selected={answer => this.computeAnswer(answer, question.correct_answer)}
                            />
                        )
                    )
                }

                {this.state.responses === 10 ? (<Result score={this.state.score} playAgain={this.playAgain} />) : null}
            </div>
        );
    };
}

ReactDOM.render(<QuizBee />, document.getElementById("root"));