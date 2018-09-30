import React, { Component } from 'react';


export const result =  props => {
    return (
        <div className="result">
   <div className="result-header">
     <h3>
       <strong>
         <i className={`fa fa-${props.icon}`} aria-hidden="true" />{" "}
         {props.title}
       </strong>
     </h3>
   </div>
   <div className="result_body">{props.children}</div>
 </div>
);
};