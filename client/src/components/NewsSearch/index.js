import React from "react";
import { Row, Col } from "../Grid";

const newsArticles = props => {
  return props.news.length === 0 ? (
    <div />
  ) : (
    <div className="card">
      <div className="article">
        {props.news.map(article => {
          console.log(props);
          return (
            <li className="search-list list-group-item">
              <Row
                className="SearchResult row"
                id={article.title + "Card"}
                key={article.id}
              >
                <Col size="2" className="articleImage">
                  <img src={article.image} alt={article.title} />
                </Col>
                <Col size="2" className="emptyCol" />
                <Col size="8" className="articleInfo">
                  <Row>
                    <h3 className="articleTitle">{article.title}</h3>
                  </Row>
                  <Row>
                    <h4 className="articleCaption">{article.caption}</h4>
                  </Row>
                  <Row>
                    <p className="articleLink">{article.link}</p>
                  </Row>
                </Col>
              </Row>
              <br />
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default newsArticles;
