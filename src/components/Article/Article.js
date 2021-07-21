import React from 'react';

function Article(props) {

  return (
    <div>
      <h1> {props.title } </h1>
      <p> {props.created_date }</p>
      { props.byline ? <h2> {props.byline} </h2> : null }
      { props.image ? <img src={props.image} href="#" alt="" /> : null }
      <p> { props.abstract } </p>
    </div>
  )

}

export default Article;

