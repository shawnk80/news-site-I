import React from 'react';

function ArticleTeaser(props) {

  return (
    <div>
      <a href="#" onClick={() => props.handleTitleClick(props.id)}>{ props.title }</a>
      <p> { props.created_date } </p>
    </div>
  )
 
}

export default ArticleTeaser;
