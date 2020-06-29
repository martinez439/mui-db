import React, { Component } from 'react'
import axios from 'axios';
import AddReminder from './addReminder'
import ReminderItem from './reminderItem';




export default class ReminderList extends Component {
    state = {
        todos: []
      };

      componentDidMount() {
        axios
          .get("http://localhost:8000/reminders")
    
          .then(response => {

            console.log(response.data)
            let mongoInfo = response.data

            this.setState({ todos: mongoInfo });
          })
          .catch(error => {
            console.log(error);
          });
      }
  
      remList() {
        return this.state.todos.map(todo => {
          return (
            <ReminderItem
              todo={todo}
              key={todo._id}
            />
          );
        });
      }
       
    
      render() {
        return (
         
            <div className="App">
              <div className="container">
                
                    <React.Fragment>
                      <AddReminder addReminder={this.addReminder} />
                      {this.remList()}
                    </React.Fragment>
                
               
              </div>
            </div>
          
        );
      }
    }
