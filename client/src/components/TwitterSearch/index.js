import React from "react";
import "./style.css";
import { Row, Col } from "../Grid";

const TwitterSearch = props => {
  return props.tweets.length === 0 ? (
    <div />
  ) : (
    <div className="card">
      <div className="article">
        {props.tweets.map(tweet => {
          console.log(tweet);
          return (
            <li className="search-list list-group-item">
              <a
                href={`https://twitter.com/${tweet.user}/status/${tweet.id}`}
                className="tweetLink"
                target="_blank"
              >
                <Row
                  className="SearchResult row"
                  id={tweet.name + "Card"}
                  key={tweet.id}
                >
                  <Col size="2">
                    <img
                      className="tweetImage"
                      src={tweet.image}
                      alt={tweet.name}
                    />
                  </Col>

                  <Col size="8" className="tweetInfo">
                    <Row>
                      <h3 className="tweetName">{tweet.name}</h3>
                    </Row>
                    <Row>
                      <h4 className="tweetScreenName">@{tweet.screenName}</h4>
                    </Row>
                    <Row>
                      <h5 className="tweetText">{tweet.text}</h5>
                    </Row>
                  </Col>
                </Row>
              </a>
            </li>
          );
        })}
      </div>
    </div>
  );
};
export default TwitterSearch;
