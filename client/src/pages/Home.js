import React, { Component } from "react";
import "./style.css";
import User_Buttons from "../components/User_Buttons";
import SearchResultsRecipes from "../components/SearchResultsRecipes";
import API from "../utils/API";
import { InputValue, FormBtn } from "../components/SearchForm";
import NewsSearch from "../components/NewsSearch";
import TwitterSearch from "../components/TwitterSearch";
import Formatted_Buttons from "../components/Formatted_Buttons";
import Blank_Search from "../components/Blank_Search";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      blankSearch: "",
      search: "",
      recipes: [],
      news: [],
      tweets: [],
      mediaSearch: "",
      searchButtons: []
    };
    this.saveBtnSearch = this.saveBtnSearch.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.deleteSearchButton = this.deleteSearchButton.bind(this);
  }

  fetchButtons() {
    API.getSearch()
      .then(res => this.setState({ searchButtons: res.data }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.fetchButtons();
  }

  saveSearch() {
    const newSearchBtn = this.state.search;
    API.saveSearch({
      search: newSearchBtn,
      api: this.state.mediaSearch
    });
    this.fetchButtons();
  }

  deleteSearchButton = id => {
    console.log(id);
    API.deleteSearch(id)
      .then(res => this.fetchButtons())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  saveBtnSearch = (api, search) => {
    if (api === "Recipes") {
      API.searchRecipes(search)
        .then(res => {
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

            return result;
          });
          this.setState({
            blankSearch: "",
            news: [],
            tweets: [],
            recipes: results
          });
        })
        .catch(err => console.log(err));
    }

    if (api === "News") {
      API.searchNews(search)
        .then(res => {
          let articles = res.data.articles;

          articles = articles.slice(0, 10).map(article => {
            article = {
              title: article.title,
              caption: article.description,
              image: article.urlToImage,
              link: article.url
            };

            return article;
          });
          this.setState({
            blankSearch: "",
            recipes: [],
            tweets: [],
            news: articles
          });
        })
        .catch(err => console.log(err));
    }
    if (api === "Twitter") {
      API.searchTwitter(search)
        .then(res => {
          let tweets = res.data;

          tweets = tweets.slice(0, 10).map(tweet => {
            tweet = {
              key: tweets._id,
              name: tweet.user.name,
              text: tweet.full_text,
              image: tweet.user.profile_image_url,
              link: tweet.source,
              id: tweet.id_str,
              user: tweet.user.id_str,
              screenName: tweet.user.screen_name
            };
            return tweet;
          });
          this.setState({
            blankSearch: "",
            recipes: [],
            news: [],
            tweets: tweets
          });
        })
        .catch(err => console.log(err));
    }
  };

  handleEdit = () => {
    this.setState({ edit: !this.state.edit });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.mediaSearch === "Recipes") {
      API.searchRecipes(this.state.search)
        .then(res => {
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

            return result;
          });
          this.setState({
            blankSearch: "",
            news: [],
            tweets: [],
            recipes: results
          });
          let checkbox = document.getElementById("checkBox");
          if (checkbox.checked === true) {
            this.saveSearch();
          }
        })
        .catch(err => console.log(err));
    }

    if (this.state.mediaSearch === "News") {
      API.searchNews(this.state.search)
        .then(res => {
          let articles = res.data.articles;

          articles = articles.slice(0, 10).map(article => {
            article = {
              title: article.title,
              caption: article.description,
              image: article.urlToImage,
              link: article.url
            };

            return article;
          });
          this.setState({
            blankSearch: "",
            recipes: [],
            tweets: [],
            news: articles
          });
          let checkbox = document.getElementById("checkBox");
          if (checkbox.checked === true) {
            this.saveSearch();
          }
        })
        .catch(err => console.log(err));
    }
    if (this.state.mediaSearch === "Twitter") {
      API.searchTwitter(this.state.search)
        .then(res => {
          let tweets = res.data;

          tweets = tweets.slice(0, 10).map(tweet => {
            tweet = {
              key: tweets._id,
              name: tweet.user.name,
              text: tweet.full_text,
              image: tweet.user.profile_image_url,
              link: tweet.source,
              id: tweet.id_str,
              user: tweet.user.id_str,
              screenName: tweet.user.screen_name
            };
            return tweet;
          });
          this.setState({
            blankSearch: "",
            recipes: [],
            news: [],
            tweets: tweets
          });
          let checkbox = document.getElementById("checkBox");
          if (checkbox.checked === true) {
            this.saveSearch();
          }
        })
        .catch(err => console.log(err));
    }
  };

  shouldDisplaySearchResults = () => {
    if (
      this.state.news.length !== 0 ||
      this.state.tweets.length !== 0 ||
      this.state.recipes.length !== 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <>
        <div className="row home-content-row">
          <div className="col-xl-5 col-lg-12">
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
                      <div className="row collapse-headline">
                        <h3 >My Searches</h3>
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
                    <User_Buttons handleEdit={this.handleEdit}>
                      {this.state.searchButtons.map(call => (
                        <Formatted_Buttons
                          edit={this.state.edit}
                          id={call._id}
                          key={call._id}
                          search={call.search}
                          api={call.api}
                          saveBtnSearch={this.saveBtnSearch}
                          deleteSearchButton={this.deleteSearchButton}
                        />
                      ))}
                    </User_Buttons>
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
                      <div className="row collapse-headline">
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
                            <label
                              className="input-group-text"
                              for="inputGroupSelect01"
                            >
                              Search-Type
                            </label>
                          </div>
                          <select
                            className="custom-select"
                            id="inputGroupSelect01"
                            onChange={e => {
                              this.setState({ mediaSearch: e.target.value });
                            }}
                          >
                            ><option selected>Choose...</option>
                            <option value="News">News</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Recipes">Recipes</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-check ">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkBox"
                        />
                        <label className="form-check-label" for="exampleCheck1">
                          Remember Search
                        </label>
                      </div>
                      <FormBtn onClick={event => this.handleFormSubmit(event)}>
                        Search
                      </FormBtn>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-12">
            <div id="accordion">
              <div className="card" id="accordion4">
                <div className="card-header" id="heading4">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapse4"
                      aria-expanded="true"
                      aria-controls="collapse4"
                    >
                      <div className="row collapse-headline">
                        <h3>Search Results</h3>
                      </div>
                    </button>
                  </h5>
                </div>

                <div
                  id="collapse4"
                  className="collapse show"
                  aria-labelledby="heading4"
                  data-parent="#accordion4"
                >
                  <div className="card-body" id="card-body-results">
                    {this.shouldDisplaySearchResults() ? (
                      <React.Fragment>
                        <SearchResultsRecipes recipes={this.state.recipes} />
                        <NewsSearch news={this.state.news} />
                        <TwitterSearch tweets={this.state.tweets} />
                      </React.Fragment>
                    ) : (
                        <Blank_Search />
                      )}
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
