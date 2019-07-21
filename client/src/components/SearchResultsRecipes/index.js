import React from "react";
import "./style.css";
import { Row, Col } from "../Grid";

const SearchResultsRecipes = props => {
  return props.recipes.length === 0 ? (
    <div />
  ) : (
    <div className="card">
      <div className="article">
        {props.recipes.map(recipe => {
          return (
            <li className="search-list list-group-item">
              <a href={recipe.link} className="recipeLink" target="_blank">
                <Row
                  className="SearchResult row"
                  id={recipe.title + "Card"}
                  key={recipe.id}
                >
                  <Col size="2">
                    <img
                      className="recipeImage"
                      src={recipe.image}
                      alt={recipe.title}
                    />
                  </Col>
                  <Col size="2" className="emptyCol" />
                  <Col size="8" className="recipeInfo">
                    <Row>
                      <h3 className="recipeTitle">{recipe.title}</h3>
                    </Row>
                    <Row>
                      <h5 className="recipePublisher">
                        Publisher: {recipe.publisher}
                      </h5>
                    </Row>
                    <Row>
                      <p className="recipeRank">
                        Recipe Ranking: {parseInt(recipe.rank)}
                      </p>
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
export default SearchResultsRecipes;
