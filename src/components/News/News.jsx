import "./News.css";
import React from "react";

export const News = () => {
  return (
    <div className="news-container">
      <div className="intro">
        <h1>NEWS</h1>
        <h3 className="news-text">
          ¿Quieres que te avisemos sobre nuestro siguiente webinar y te mandemos
          mejores consejos para el desarrollo personal?
        </h3>
      </div>
      <div className="subscription">
        <div id="mc_embed_signup">
          <form
            action="https://bienestarconprettan.us17.list-manage.com/subscribe/post?u=c502f031e9e83d40ff2164786&amp;id=7cce6b84f5"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <h2>¡Registrate ahora!</h2>

              <div class="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
