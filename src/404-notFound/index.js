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
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <Link to="/">Back To Home!</Link>
      </div>
    </div>
  );
};

export default NotFound;
