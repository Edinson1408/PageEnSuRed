import React from 'react';
import logo from './img/logo.svg';
import './css/Content.css';


class Content extends React.Component {

render(){
      const { body }=this.props;
  return (
    <div className="Content">
        {body}
    </div>
  );
  }
}

export default Content;
