import React from "react";

const comment = () => {
  return (
    <div>
      <form class="question">
        <h4>LEAVE A COMMENT</h4>
        <input type="text" name="name" placeholder="NAME" className="top" />
        <input
          type="text email"
          placeholder="EMAIL"
          name="email"
          className="top"
        />
        <textarea
          name="comment"
          id="com"
          cols="30"
          rows="10"
          placeholder="COMMENT"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default comment;
