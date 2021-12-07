import "./News.css";
import React from "react";
import { NewsButton } from "./NewsBoton/NewsButton";

export const News = () => {
  return (
    <div className="news-container">
      <div className="intro">
        <h1 id='suscription' className="title-news">NEWS</h1>
        <h3 className="news-text">
        Do you want us to let you know upcoming product releases, and send you better tips for personal development?
        </h3>
      </div>

      <div class="clear">{<NewsButton />}</div>
    </div>
  );
};
