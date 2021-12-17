import React, { Component } from 'react';
import  ReactDOM  from 'react-dom';
import "./assets/style.css"; //importing the stylesheet (css) in this way
import quizService from './quizService'; //importing the quize question module
import QuestionBox from './component/QuestionBox';
import Answer from './component/Answer';

//class based component
export default class QuizBee extends Component {
  //local state
  state={
    questionBank :[],
    score:0,
    response:0
  };
  //getting the question
  getQuestions = ()=>{
    quizService().then(q=>{
      this.setState({
        questionBank:q
      });
    });
  }
  //getting the questions
  componentDidMount(){
    this.getQuestions();
  }
  //comparing the answers and marking the score
  compareAnswer=(ans,correct)=>{
    if(ans===correct){
      this.setState({
        score:this.state.score + 1
      })
    }
    this.setState({
      response:(this.state.response+1<5)?this.state.response+1:5
    })
  }
  //reseting the entire thing
  playAgain=()=>{
    this.getQuestions();
    this.setState({
      score:0,
      response:0
    });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="title">QuizBee</div>
          {this.state.questionBank.length > 0 && this.state.response <5 &&  this.state.questionBank.map(
            ({question,answers,correct,questionId}) => 
            <QuestionBox q={question} a={answers} c={questionId} selected={answer => this.compareAnswer(answer,correct)}/>
          )
          }
          {this.state.response==5?<Answer score={this.state.score} playAgain={this.playAgain}/>:null}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<QuizBee/>,document.getElementById("root"));