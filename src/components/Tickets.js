import React, { Component } from "react";
import axios from "axios";


export default class Tickets extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmployee = this.onChangeEmployee.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this)
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      customer: "",
      notes: "",
      
    };
  }


  onChangeEmployee(e) {
    this.setState({
      customer: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      notes: e.target.value
    });
  }


  onSubmit(e) {
    e.preventDefault();

    const workOrder = {
      customer: this.state.customer,
      notes: this.state.notes,
      
    };

    console.log(workOrder);

    axios
      .post("http://localhost:8000/customer", workOrder)
      .then(res => console.log(res.data))
      .catch(console.error);
    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Create New Work Order</h3>
        <form onSubmit={this.onSubmit} style={{marginLeft: '12rem', marginTop: '5rem'}}>
          <div className="form-group">
            <label>Customer: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.customer}
              onChange={this.onChangeEmployee}
            />
        
            
          </div>
          <div className="form-group">
            <label>Notes: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.notes}
              onChange={this.onChangeDescription}
            />
          </div>
       

          <div className="form-group">
            <input
              type="submit"
              value="Create WO"
              className="btn btn-primary"
              onSubmit={this.onSubmit}
            />
          </div>
        </form>
      </div>
    );
  }
}
