import React, { Component } from "react";
import "./style.css";
import User_Buttons from "../components/User_Buttons";
import SearchResultsRecipes from "../components/SearchResultsRecipes";
import API from "../utils/API";
import { InputValue, FormBtn } from "../components/SearchForm";
import NewsSearch from "../components/NewsSearch";

class Home extends Component {
  state = {
    search: "",
    recipes: [],
    news: [],
    mediaSearch: ""
  };

  handleInputChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    

    if (this.state.mediaSearch === "3") {

    API.searchRecipes(this.state.search)
      .then(res => {
        console.log(res);
        let results = res.data.recipes;

        results = results.slice(0, 10).map(result => {
          result = {
            key: result.recipe_id,
            id: result.recipe_id,
            title: result.title,
            publisher: result.publisher,
            image: result.image_url,
            rank: result.social_rank,
            link: result.f2f_url
          };
          // console.log(result);
          return result;
        });
        this.setState({
          news: "",
          recipes: results
        });
      })
      .catch(err => console.log(err));
  };

  if (this.state.mediaSearch === "1") {
    API.searchNews(this.state.search)
      .then(res => {
        // console.log(res);
        let articles = res.data.articles;
        console.log(articles);

        articles = articles.slice(0, 10).map(article => {
          article = {
            // key: articles._id,
            title: article.title,
            caption: article.description,
            image: article.urlToImage,
            link: article.url
          }
        console.log(article.title);
        return article;
        })
        this.setState({
          recipes: "",  
          news: articles
        })
      })
      .catch(err => console.log(err));
    };
  }

  render() {
    return (
      <>
        <div className="row home-content-row">
          <div className="col-lg-5 col-s-12">
          <div id="accordion">
        <div className="card" id="accordion1">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
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
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion1"
          >
            <div className="card-body">
              <User_Buttons />
            </div>
          </div>
        </div>
        <div className="card" id="accordion2">
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
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
            className="collapse show"
            aria-labelledby="headingTwo"
            data-parent="#accordion2"
          >
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-default"
                      >
                        Keyword
                      </span>
                    </div>
                    <InputValue
                value={this.search}
                onChange={this.handleInputChange}
                name="search"
              />
                  </div>
                </div>
                <div className="row">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <label className="input-group-text" for="inputGroupSelect01">
                        Search-Type
                      </label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={(e) => {this.setState({mediaSearch: e.target.value})}}>>
                      <option selected>Choose...</option>
                      <option value="1">News</option>
                      <option value="2">Twitter</option>
                      <option value="3">Recipes</option>
                    </select>
                  </div>
                </div>
                <FormBtn onClick={(event) => this.handleFormSubmit(event)}>Search</FormBtn>
              </form>
            </div>
          </div>
        </div>
        
      </div>
            
              
            
            
          </div>
          <div className="col-lg-7 d-none d-lg-block">
            <div id="accordion">
              <div class="card" id="accordion4">
                <div class="card-header" id="heading4">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapse4"
                      aria-expanded="true"
                      aria-controls="collapse4"
                    >
                      <h3>Search Results</h3>
                    </button>
                  </h5>
                </div>

                <div
                  id="collapse4"
                  class="collapse show"
                  aria-labelledby="heading4"
                  data-parent="#accordion4"
                >
                  <div class="card-body" id="card-body-results">
                    <SearchResultsRecipes recipes={this.state.recipes} />
                    <NewsSearch news={this.state.news} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
