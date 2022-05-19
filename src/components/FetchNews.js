import React, { useState } from "react";
import axios from "axios";

function FetchNews() {
  const [news, setNews] = useState([]);

  const fetchNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=fe1798cd107d4cf5919b40b0301f5ef4"
      )
      .then((response) => {
        console.log(response);
        setNews(response.data.articles);
      });
  };

  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button onClick={fetchNews} className="btn btn-primary">
              Fetch News
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {news.map((value) => {
            return (
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={value.urlToImage} class="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <a href="#" className="btn btn-primary">
                      Main
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FetchNews;
