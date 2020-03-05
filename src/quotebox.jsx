import React from "react";

const QuoteBox = ({ quote, color, onClick }) => {
  return (
    <div className="row  justify-content-center">
      <div className="col col-md-6 bg-light p-5 shadow rounded align-items-center">
        <blockquote className="blockquote">
          <p className="mb-0">
            <i className="fa fa-quote-left" aria-hidden="true"></i>
            {" " + quote.quote}
          </p>
          <footer className="blockquote-footer">
            <cite title="Author">{quote.author}</cite>
          </footer>
        </blockquote>
        <div className="container">
          <div className="row align-items-end justify-content-around">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote.quote}" - ${quote.author}`}
              style={{
                backgroundColor: color
              }}
              className="btn btn-sm text-white  "
            >
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <button
              style={{
                backgroundColor: color
              }}
              className="btn btn-sm text-white "
              onClick={onClick}
            >
              <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
