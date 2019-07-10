import React from "react";
import { Row, Col } from "../Grid";

const newsArticles = props => {
    return props.news.length === 0 ? (
        <div className="card">
          <div className="card-body player">
            <div className="article">
              <h3>Search Results</h3>
            </div>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-body player">
            <div className="article">
              <h3>
                Search Results
              </h3>
              {props.news.map(article => {
                console.log(props);
                return (
                  <li className="search-list list-group-item">
                    <Row
                      className="SearchResult row"
                      id={article.title + "Card"}
                      key={article.id}
                    >
                      <Col size="2" className="recipeImage">
                        <img src={article.image} alt={article.title} />
                      </Col>
                      <Col size="2" className="emptyCol" />
                      <Col size="8" className="recipeInfo">
                        <Row>
                          <h3 className="recipeTitle">{article.title}</h3>
                        </Row>
                        <Row>
                          <h4 className="recipePublisher">{article.publisher}</h4>
                        </Row>
                        <Row>
                          <p className="recipeRank">{article.rank}</p>
                        </Row>
                      </Col>
                    </Row>
                    <br />
                    <Row className="buttonDiv ">
                      <button
                        className="saverecipe btn btn-primary"
                        id={article.id}
                        onClick={event => props.handleSavedButton(event)}
                      >
                        Save recipe
                      </button>
                      <a href={article.link} target="_blank">
                        <button className="viewRecipe btn btn-success">
                          View Recipe
                        </button>
                      </a>
                    </Row>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      );
};

export default newsArticles;