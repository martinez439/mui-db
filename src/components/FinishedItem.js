import React, { Component } from "react";
import PropTypes from "prop-types";

export class FinishedItem extends Component {
  getStyle = () => {
    return {
      color: "gray",
      background: "#FFFFF",
      padding: "20px",
      borderBottom: "3px #ccc dotted",
      textDecoration: "line-through",
    };
  };

  componentDidMount = (props) => {
    //console.log(this.props.todo);
  };

  render() {
    const { reminder } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
         
          {reminder}
          <button style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}

// PropTypes
FinishedItem.propTypes = {
  todo: PropTypes.object.isRequired,
 
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
}; 

export default FinishedItem;