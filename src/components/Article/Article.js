import React, { Component } from 'react';

class Article extends Component {
  render() {  
    return (
      <div>
        <h1> {this.props.title } </h1>
        <p> {this.props.created_date }</p>
        { this.props.byline ? <h2> {this.props.byline} </h2> : null }
        { this.props.image ? <img src={this.props.image} href="#" alt="" /> : null }
        <p> { this.props.abstract } </p>
      </div>
    )
  }
}

export default Article;

