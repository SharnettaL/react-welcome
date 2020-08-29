import React from "react";

const Board = (props) => {
  return (
    <div className="Jeopardy">
      <div>
        <strong>Question:</strong>
        {() => props.data.question}
        <br />
        <strong>Value:</strong>
        {() => props.data.value}
        <br />
        <strong>Category:</strong>
        {() => props.data.category.title}
        <br />
        <strong>Score:</strong>
        {() => props.score}
        <br />

        <form onSubmit={() => props.handleSubmit}>
          <button htmlFor="">Answer!</button>
          <input
            type="text"
            name="answer"
            onChange={() => props.handleChange}
          />
        </form>
      </div>
    </div>
  );
};

export default Board;
