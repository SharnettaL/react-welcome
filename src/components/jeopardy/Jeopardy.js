import React, { Component } from "react";
//import our service
import JeopardyService from "../../jeopardyService";
//import Board from "../board/Board";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {
        id: null,
        answer: "",
        question: "",
        value: null,
        airdate: "",
        created_at: "",
        updated_at: "",
        category_id: null,
        game_id: null,
        invalid_count: null,
        category: {
          id: null,
          title: "",
          created_at: "",
          updated_at: "",
          clues_count: null,
        },
      },
      score: 0,
      submitData: {
        answerText: "",
      },
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
      console.log(this.state.data.answer);
    });
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  handleChange = (event) => {
    const submitData = { ...this.state.submitData };
    submitData[event.target.name] = event.target.value;
    this.setState({
      submitData: {
        answerText: event.target.value,
      },
    });
  };
  handleSubmit = (event) => {
    let score = this.state.score;
    event.preventDefault();
    if (this.state.submitData.answerText === this.state.data.answer) {
      this.setState({
        score: (score += this.state.data.value),
      });
    } else {
      this.setState({
        score: (score -= this.state.data.value),
      });
    }
    this.getNewQuestion();
  };
  //display the results on the screen
  //   render() {
  //     return <Board />;
  //   }
  // }
  render() {
    return (
      <div>
        <strong>Question:</strong>
        {this.state.data.question}
        <br />
        <strong>Value:</strong>
        {this.state.data.value}
        <br />
        <strong>Category:</strong>
        {this.state.data.category.title}
        <br />
        <strong>Score:</strong>
        {this.state.score}
        <br />

        <form onSubmit={this.handleSubmit}>
          <button htmlFor="">Answer!</button>
          <input type="text" name="answer" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}
export default Jeopardy;
