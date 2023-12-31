import { Link } from "react-router-dom";

const SingleArticlePreview = ({ article }) => {
  const truncateArticle = (articleBody) => {
    if (articleBody.length > 150) {
      return articleBody.slice(0, 150) + "...";
    }
    return articleBody;
  };

  return (
    <div className="single-article" key={article.title}>
      <h3 className="preview-title">{article.title}</h3>
      <div className="article-top-container">
        <p className="article-info">
          Topic: <span className="bold">{article.topic}</span>
        </p>
        <p className="article-info">
          by <span className="bold">{article.author}</span>
        </p>
      </div>
      <p className="article-info"> {truncateArticle(article.body)}</p>
      <div className="article">
        <img classname="preview-img" src={article.article_img_url} />
        <div className="lower-article-container">
          <div className="comment-container">
            <p className="article-info">{article.comment_count}</p>
            <Link to={`/full-article/${article.article_id}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                width="20px"
                height="20px"
                viewBox="0 0 32 32"
                version="1.1"
              >
                <title>comment-4</title>
                <desc>Created with Sketch Beta.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  sketch:type="MSPage"
                >
                  <g
                    id="Icon-Set"
                    sketch:type="MSLayerGroup"
                    transform="translate(-308.000000, -255.000000)"
                    fill="#c14b40"
                  >
                    <path
                      d="M327.494,279.633 L324,284 L320.506,279.633 C314.464,278.355 309.992,273.863 309.992,268.501 C309.992,262.146 316.264,256.994 324,256.994 C331.736,256.994 338.008,262.146 338.008,268.501 C338.008,273.863 333.536,278.355 327.494,279.633 L327.494,279.633 Z M324,255 C315.163,255 308,261.143 308,268.72 C308,274.969 312.877,280.232 319.542,281.889 L324,287.001 L328.459,281.889 C335.123,280.232 340,274.969 340,268.72 C340,261.143 332.837,255 324,255 L324,255 Z"
                      id="comment-4"
                      sketch:type="MSShapeGroup"
                    ></path>
                  </g>
                </g>
              </svg>
            </Link>
          </div>
          <div className="votes-container">
            <p className="article-info bold">{article.votes} Votes</p>
          </div>
          <Link to={`/full-article/${article.article_id}`}>
            <button className="btn">Read Full Article</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleArticlePreview;
