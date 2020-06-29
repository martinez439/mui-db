import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';

import AddIcon from '@material-ui/icons/Add';

import CreateIcon from '@material-ui/icons/Create';


export class AddReminder extends Component {
  state = {
    reminder: '',
    isComplete: false
  }

  onSubmit = (e) => {
    e.preventDefault();
    const rem = {reminder: this.state.reminder, isComplete: this.state.isComplete};
    axios.post("http://localhost:8000/reminders/add", rem).then(res => console.log(res.data));
    this.setState({ reminder: '' });
  }

  onChange = (e) => this.setState({ reminder: e.target.value, isComplete: false });

  render() {
    return (

     

      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
          <TextField
          style={{marginBottom: '1rem'}}
          label="Add reminder"
          id="filled-start-adornment"
          className={clsx()}
          onChange={this.onChange}
          value={this.state.reminder}
          InputProps={{
            startAdornment: <InputAdornment position="start">
              <CreateIcon fontSize="small" color="disabled"/> </InputAdornment>,
          }}
          variant="filled"
        /> 

        {/*<input 
          type="text" 
          name="reminder" 
          style={{ flex: '10', padding: '5px' }}
          placeholder="Add Reminder ..." 
          value={this.state.reminder}
          onChange={this.onChange}
        />
        */}
        {/*
        <input 
          type="submit" 
          value="Submit" 
          className="btn"
          style={{flex: '1'}}
        />
        */}
          <div>
            <Button
              type="submit"
              size="large"
              style=
              {{paddingBottom: '1.1rem',
                paddingTop: '1.1rem',
                paddingRight: '2rem', 
                marginLeft: '.1rem',
                }}
              variant="contained"
              color="primary"
              endIcon={<AddIcon />}
              onSubmit={this.onSubmit}
            >
              
            </Button>
            </div>
      </form>
    )
  }
}

// PropTypes
//AddReminder.propTypes = {
 // addReminder: PropTypes.func.isRequired
//}

export default AddReminder