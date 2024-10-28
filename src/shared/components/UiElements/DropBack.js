import React from 'react';
import ReactDOM from 'react-dom';

import './DropBack.css';

const DropBack = props => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook')
  );
};

export default DropBack;
