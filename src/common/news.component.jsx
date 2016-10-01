import React, {Component} from 'react';

class News extends Component {
  constructor(props) {
    super(props);
    // Temporary variable to fill the page with dummy articles
    // Later to be replaced by a database call
    var articles = {
      0: {
        title: 'Hello World Title',
        author: 'Philipp Keil',
        pubDate: 'Yesterday',
        body: 'Nam ut dictum tellus, ut tempus felis. Aenean posuere erat enim, eget vulputate neque tempor in. Fusce ornare aliquet placerat. Suspendisse tortor dolor, auctor in libero eu, ullamcorper sagittis dolor. Vestibulum lacinia, nisi id lobortis commodo, libero ipsum semper magna, et pellentesque sapien nunc at sapien. Donec vestibulum cursus lectus, nec placerat risus pharetra sed. Integer at tincidunt justo, a rutrum ex. Integer consequat vitae libero eu feugiat. Vivamus quis pellentesque leo, lacinia tempus urna. Nunc semper laoreet consequat. Vestibulum pretium gravida est, quis elementum arcu cursus eget.',
        url: 'http://www.google.com'
      },
      1: {
        title: 'Hello World Title',
        author: 'Philipp Keil',
        pubDate: 'Yesterday',
        body: 'Nam ut dictum tellus, ut tempus felis. Aenean posuere erat enim, eget vulputate neque tempor in. Fusce ornare aliquet placerat. Suspendisse tortor dolor, auctor in libero eu, ullamcorper sagittis dolor. Vestibulum lacinia, nisi id lobortis commodo, libero ipsum semper magna, et pellentesque sapien nunc at sapien. Donec vestibulum cursus lectus, nec placerat risus pharetra sed. Integer at tincidunt justo, a rutrum ex. Integer consequat vitae libero eu feugiat. Vivamus quis pellentesque leo, lacinia tempus urna. Nunc semper laoreet consequat. Vestibulum pretium gravida est, quis elementum arcu cursus eget.',
        url: 'http://www.google.com'
      },
      2: {
        title: 'Hello World Title',
        author: 'Philipp Keil',
        pubDate: 'Yesterday',
        body: 'Nam ut dictum tellus, ut tempus felis. Aenean posuere erat enim, eget vulputate neque tempor in. Fusce ornare aliquet placerat. Suspendisse tortor dolor, auctor in libero eu, ullamcorper sagittis dolor. Vestibulum lacinia, nisi id lobortis commodo, libero ipsum semper magna, et pellentesque sapien nunc at sapien. Donec vestibulum cursus lectus, nec placerat risus pharetra sed. Integer at tincidunt justo, a rutrum ex. Integer consequat vitae libero eu feugiat. Vivamus quis pellentesque leo, lacinia tempus urna. Nunc semper laoreet consequat. Vestibulum pretium gravida est, quis elementum arcu cursus eget.',
        url: 'http://www.google.com'
      }
    };

    // Sets the temporary list of articles as a state so it can later be
    // iterated upon and be manipulated
    this.state = {
      articles: articles,
      activeArticle: null // key (articleId) from the articles object
    };

    // bind this to the methods
    this.setActiveArticle = this.setActiveArticle.bind(this);
  }

  setActiveArticle(articleId) {
    this.setState({
      activeArticle: articleId
    })
  };

  render() {
    var smallTextStyle = {
      textTransform: "none",
      color: "#a3bfc6"
    };

    return (
      <div className="container" id="content_page">
        <div className="row">
          <h1 className="text-center hidden-xs">
            Newsreader <small style={smallTextStyle}>A coding project by Philipp Keil</small>
          </h1>
          <h1 className="text-center visible-xs">Newsreader</h1>
        </div>
        <div className="row">
        {
          // Iterate over all articles and create Article components out of them
          // React gets keys from the articleId
          Object.keys(this.state.articles).map(function(articleId) {
            return (
              <Article
                title={this.state.articles[articleId].title}
                author={this.state.articles[articleId].author}
                pubDate={this.state.articles[articleId].pubDate}
                body={this.state.articles[articleId].body}
                url= {this.state.articles[articleId].url}
                key={articleId} // used by React to distiguish btween the elements
                articleId={articleId}
                activeArticle={this.state.activeArticle}
                onTitleClick={this.setActiveArticle}
              />
            )
          }, this)
        }
        </div>
      </div>
    );
  }
}

class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titleHover: false
    };
    // https://facebook.github.io/react/docs/reusable-components.html#no-autobinding
    this.onTitleClick = this.onTitleClick.bind(this);
    this.onHover = this.onHover.bind(this);
  };

  onTitleClick(e) {
    this.props.onTitleClick((this.props.articleId != this.props.activeArticle ?
      this.props.articleId:
      null
    ));
  };

  onHover(e) {
    this.setState({
      hover: (e.type == 'mouseenter')
    });

  };

  render() {
    var articleStyle = {
      backgroundColor: (this.state.hover ? '#192226': '#222B31'),
      borderColor: '#222B31',
      borderBottom: '4px solid #EE445F'
    };

    var articleTitleStyle = {
      backgroundColor: (this.state.hover ? '#192226': '#222B31'),
      borderColor: '#EE445F',
      borderBottomWidth: '1px',
      color: '#FFF'
    };

    var articleBodyStyle = {
      display: (this.props.articleId == this.props.activeArticle ? '': 'none'),
    }

    var articleAStyle = {
      textDecoration: 'none',
      color: '#FFF'
    }
    return (
      <div
      className="panel panel-default"
      style={articleStyle}
      onMouseEnter={this.onHover}
      onMouseLeave={this.onHover}
      >
        <div
        className="panel-heading"
        onClick={this.onTitleClick}
        style={articleTitleStyle}
        >
          <div className="row">
            <div className="col-sm-2 hidden-xs">
              <p className="text-left">
                {this.props.author}
              </p>
            </div>
            <div className="col-xs-12 col-sm-8">
              <p className="text-center">
                {this.props.title}
              </p>
            </div>
            <div className="col-sm-2 hidden-xs">
              <p className="text-right">
                {this.props.pubDate}
              </p>
            </div>
          </div>
        </div>
        <a href={this.props.url} style={articleAStyle}>
        <div className="panel-body" style={articleBodyStyle}>
            <h2>{this.props.title}</h2>
            <p>{this.props.body}</p>
        </div>
        </a>
      </div>
    );
  }
};

export default News;
