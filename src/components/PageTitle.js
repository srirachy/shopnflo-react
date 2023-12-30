import React from 'react';

const PageTitle = ({title, content, textClass}) => {
  const divClass = (textClass) ? `container text-center p-3 ${textClass}`  : "container text-center p-3";
  return (
    <div className={divClass}>
      {title ? <h1>{title}</h1> : <h1>Title</h1>}
      {content ? <p>{content}</p> : null}
    </div>
  );
}
 
export default PageTitle;