import React from "react";
import "./style.css"
import { Row, Col } from "../Grid";

const SearchResultsRecipes = props => {
  return props.recipes.length === 0 ? (
<div></div>
  ) : (
    <div className="card">
      <div className="card-body player">
        <div className="article">
          <h3>Search Results</h3>
          {props.recipes.map(recipe => {
            return (
              <li className="search-list list-group-item">
                <Row
                  className="SearchResult row"
                  id={recipe.title + "Card"}
                  key={recipe.id}
                >
                  <Col size="2" className="recipeImage">
                    <img src={recipe.image} alt={recipe.title} />
                  </Col>
                  <Col size="2" className="emptyCol" />
                  <Col size="8" className="recipeInfo">
                    <Row>
                      <h3 className="recipeTitle">{recipe.title}</h3>
                    </Row>
                    <Row>
                      <h4 className="recipePublisher">{recipe.publisher}</h4>
                    </Row>
                    <Row>
                      <p className="recipeRank">{recipe.rank}</p>
                    </Row>
                  </Col>
                </Row>
                <br />
                <Row className="buttonDiv ">
                  <button
                    className="saverecipe btn btn-primary"
                    id={recipe.id}
                    onClick={event => props.handleSavedButton(event)}
                  >
                    Save recipe
                  </button>
                  <a href={recipe.link} target="_blank">
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
export default SearchResultsRecipes;
