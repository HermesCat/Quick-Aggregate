import React from "react";
import "./style.css";
import "./img/MySearches.jpg";

function AboutModal() {
  return (
    <>
      <div className="row">
        <div
          type="card"
          className="modal-image about1"
          data-toggle="modal"
          data-target="#modal1"
        >
          <div className=" wrapper image-hover">
            <h4 className="modal-image-stripe">About Quick Aggregate</h4>
          </div>
        </div>
        <div
          type="card"
          className="modal-image about2"
          data-toggle="modal"
          data-target="#modal2"
        >
          <div className=" wrapper image-hover">
            <h4 className="modal-image-stripe">Your Keywords</h4>
          </div>
        </div>
        <div
          type="card"
          className="modal-image about3"
          data-toggle="modal"
          data-target="#modal3"
        >
          <div className=" wrapper image-hover">
            <h4 className="modal-image-stripe">Our APIs</h4>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modal1"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modal1"
        aria-hidden="true"
      >
        <div className="modal-dialog about-modal-size" role="document">
          <div className="modal-content">
            <div className="modal-header modal-about">
              <h5
                className="modal-title main-title-modal"
                id="exampleModalLabel"
              >
                <span className="highligher-modal">Quick</span>Aggregate
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h2 className="content-heading">What is Quick Aggregate?</h2>
              <h4 className="content-heading-medium">Quick Aggregate is a news/media aggregate that enables users to access their favorite media with the click of a button.
              </h4>
              <p>Quick Aggregate is a social media aggregate for the user on-the-go! Quick Aggregate allows users to get updates on all of their social media platforms quickly and from a single location. Rather than jumping from platform to platform, users can keep up-to-date on the latest news and on their personal interests in one place. With Quick Aggregate, users can save valuable time while browsing their favorite social media platforms and squeeze even more productivity from their day!
              </p>
              <p>Using a diverse range of APIs, Quick Aggregate allows users to search across a wide variety of sites and social media platforms. Users can create a collection of their favorite search terms and interests. This allows users to stay up-to-date on various topics and search interests. </p>


            </div>
            <div className="modal-footer modal-about">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modal2"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modal2"
        aria-hidden="true"
      >
        <div className="modal-dialog about-modal-size" role="document">
          <div className="modal-content">
            <div className="modal-header modal-about">
              <h5
                className="modal-title main-title-modal"
                id="exampleModalLabel"
              >
                <span className="highligher-modal">Quick</span>Aggregate
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h2 className="content-heading">How do Keywords Work?</h2>
              <h4 className="content-heading-medium">Your keywords make your unique searches more accessible than ever!</h4>
              <p>To use our application, select the social media platform from the "Search-Type" dropdown menu and enter your search into the "Keyword" field. Once you submit the search our application will display the results on the same webpage.
                We have incorporated a feature that allows the user to save their searches for future use. Users can elect to save certain searches as color-coded buttons and use them to make searches. Users also have the option to delete saved searches.</p>





            </div>
            <div className="modal-footer modal-about">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modal3"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modal3"
        aria-hidden="true"
      >
        <div className="modal-dialog about-modal-size" role="document">
          <div className="modal-content">
            <div className="modal-header modal-about">
              <h5
                className="modal-title main-title-modal"
                id="exampleModalLabel"
              >
                <span className="highligher-modal">Quick</span>Aggregate
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h2 className="content-heading">Our APIs</h2>
              <h4 className="content-heading-medium">Quick Aggregate currently offers three different APIs </h4>
              <ul>
                <li className="API-list">Twitter</li>
                <li className="API-list">News API</li>
                <li className="API-list">Food2Fork (recipe API)</li>
              </ul>
              <p>Currently, users are able to search tweets from their favorite celebrities, get the most recent news on events, or find that recipe for that delicious meal for their next meal.</p>
              <p>In the future we plan on adding more APIs and more social media functionality. </p>


            </div>
            <div className="modal-footer modal-about">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutModal;
