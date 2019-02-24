import React from 'react';
import {Link} from 'react-router-dom';

 function header() {
  return (
    <header>
      <h1 style={headerStyle}>Todo List</h1>
      <Link to="/">Home</Link>|
      <Link to="/about">About</Link>
    </header>
  )
}

const headerStyle ={
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
      }

export default header;
