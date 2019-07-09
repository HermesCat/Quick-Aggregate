import React, { Component } from "react";
import User_Buttons from "../User_Buttons";
// import User_Input from "../User_Input";
import "./style.css";
import { Col, Row, Container } from "../Grid";
import SearchResultsRecipes from "../SearchResultsRecipes";
import API from "../../utils/API";
import { Input, FormBtn } from "../SearchForm";

class Search_Box extends Component {
  state = {
    search: "",
    recipes: []
  };

  handleInputChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.searchRecipes(this.state.search)
      .then(res => {
        console.log(res);
        let results = res.data.recipes;

        results = results.map(result => {
          result = {
            key: result.recipe_id,
            id: result.recipe_id,
            title: result.title,
            publisher: result.publisher,
            image: result.image_url,
            rank: result.social_rank,
            link: result.f2f_url
          };
          console.log(result);
          return result;
        });
        this.setState({
          recipes: results
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div id="accordion">
        <div class="card" id="accordion1">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button
                class="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <div className="row">
                  <h3>My Searches</h3>
                </div>
              </button>
            </h5>
          </div>
          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion1"
          >
            <div class="card-body">
              <User_Buttons />
            </div>
          </div>
        </div>
        <div class="card" id="accordion2">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button
                class="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <div className="row">
                  <h3>New Search</h3>
                </div>
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            class="collapse show"
            aria-labelledby="headingTwo"
            data-parent="#accordion2"
          >
            <div class="card-body">
              <form>
                <div className="row">
                  <div class="input-group mb-3">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-default"
                      >
                        Keyword
                      </span>
                    </div>
                    <Input
                      value={this.state.search}
                      onChange={this.handleInputChange}
                      name="search"
                    />
                  </div>
                </div>
                <div className="row">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">
                        Search-Type
                      </label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                      <option selected>Choose...</option>
                      <option value="1">News</option>
                      <option value="2">Twitter</option>
                      <option value="3">Recipes</option>
                    </select>
                  </div>
                </div>
                <FormBtn onClick={this.handleFormSubmit}>Search</FormBtn>
              </form>
            </div>
          </div>
        </div>
        <div class="card d-lg-none" id="accordion3">
          <div class="card-header" id="headingThree">
            <h5 class="mb-0">
              <button
                class="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <div className="row">
                  <h3>Search Results</h3>
                </div>
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordion3"
          >
            <div class="card-body" />
          </div>
        </div>
        <SearchResultsRecipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default Search_Box;
