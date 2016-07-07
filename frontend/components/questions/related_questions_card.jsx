"use strict";

const React = require('react');
const Link = require('react-router').Link;

const RelatedQuestionsCard = React.createClass({
  render () {
    const relatedQuestions = this.props.relatedQuestions || [];
    const detailPaths = {};
    relatedQuestions.forEach( question => {
      detailPaths[question.id] = `questions/${ question.id }`;
    });

    if (relatedQuestions.length > 0) {
      return (
        <div className="related-col-content">
          <div className="card-top">
            <h4 className="card-top-content">Related Questions</h4>
          </div>
          <div className="card-bottom">
            <ul className="card-bottom-content">
              {
                relatedQuestions.map( question => {
                  return (
                    <li key={ question.id }>
                      <Link
                        to={ detailPaths[question.id] }>
                        { question.title }
                      </Link>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      );
    } else {
      return <p></p>;
    }
  }
});

module.exports = RelatedQuestionsCard;
