import React from "react";
import { Row, Col } from "../Grid";
import "./style.css"

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
              <a href={article.link} className="articleLink" target="_blank"> 
              <Row
                className="SearchResult row"
                id={article.title + "Card"}
                key={article.id}
              >
                <Col size="2">
                  <img className="articleImage" src={article.image} alt={article.title} />
                </Col>
                <Col size="2" className="emptyCol" />
                <Col size="8" className="articleInfo">
                  <Row>
                    <h3 className="articleTitle">{article.title}</h3>
                  </Row>
                  <Row>
                    <p className="articleCaption">{article.caption}</p>
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

export default newsArticles;
