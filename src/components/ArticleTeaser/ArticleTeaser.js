import React, { Component } from 'react';

class ArticleTeaser extends Component {
  render() {
    return (
      <div>
        <a href="#" onClick={() => this.props.handleTitleClick(this.props.id)}>{ this.props.title }</a>
        <p> { this.props.created_date } </p>
      </div>
    )
  }
}

export default ArticleTeaser;
