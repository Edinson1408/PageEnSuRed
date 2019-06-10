import React from 'react';
import './css/Footer.css';


class Footer extends React.Component  {
  constructor(props) {
      super(props);
      console.log(props);

    }
    render(){
  return (
    <div className="Footer">
        <b>{this.props.copyright}</b>
    </div>
  );
  }
}

export default Footer;
