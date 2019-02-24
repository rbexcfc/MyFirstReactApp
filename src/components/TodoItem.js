import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle =() =>{
        return{
            background: '#f4f4f4',
            padding:'10px',
            boarderBottom:'1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through':'none'            
        }    
    }

  render() {
      const{id,title} = this.props.todo

    return (
      <div style={this.getStyle()}>
      <p>
      <input type = 'checkbox' onChange={this.props.markComplete.bind
        (this, id)}/>
        {title}
        <button style={btnSyle} onClick={this.props.delTodo.bind(this,id)}>x</button>
        </p>
      </div>
    )
  }
}

const btnSyle={
    background:'#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 9px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'

}

TodoItem.propTypes ={
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default TodoItem