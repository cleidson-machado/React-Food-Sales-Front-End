import { Link } from "react-router-dom";
import "./style.css";

//404 Templates Layout
//https://dev.to/frontendsolutions/17-html-and-css-404-page-templates-16i7

const NotFound = () => {
  return (
    <div className="container">
      <h1>404 Error Page</h1>
      <p class="zoom-area">
        <b>Ops!</b> The Route or Page that you looking for doesn't exist!
      </p>
      <section class="error-container">
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
        <span class="zero">
          <span class="screen-reader-text">0</span>
        </span>
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
      </section>
      <div class="link-container">
        <Link to="/">Back To Home!</Link>
      </div>
    </div>
  );
};

export default NotFound;
