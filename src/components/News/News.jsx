import "./News.css";
import React from "react";
import { NewsButton } from "./NewsBoton/NewsButton";

export const News = () => {
  return (
    <div className="news-container">
      <div className="intro">
        <h1 className="title-news">NEWS</h1>
        <h3 className="news-text">
          ¿Quieres que te avisemos sobre nuestro siguiente webinar y te mandemos
          mejores consejos para el desarrollo personal?
        </h3>
      </div>
      <h2>¡Registrate ahora!</h2>

      <div class="clear">{<NewsButton />}</div>
    </div>
  );
};
