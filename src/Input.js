import React from "react";
import PropTypes from "prop-types";

function Input({ success, secretWord }) {
  const [currentGuess, setCurrentGuess] = React.useState("");

  if (success) {
    return <div data-test='component-input'></div>;
  }

  return (
    <div data-test='component-input'>
      <form className='form-inline'>
        <input
          data-test='input-box'
          className='mb-2 mx-sm-3'
          type='test'
          placeholder='enter guess'
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button
          data-test='submit-button'
          className='btn btn-primary mb-2'
          //TODO: update guessedWords
          //TODO: check against secretWord and update success if needed
          onClick={(evt) => {
            evt.preventDefault();
            setCurrentGuess("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
