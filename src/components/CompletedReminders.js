import React, { Component } from 'react'
import axios from 'axios';
import FinishedItem from './FinishedItem';




export default class CompletedReminders extends Component {
    state = {
        todos: []
      };

      componentDidMount() {
        axios
          .get("http://localhost:8000/reminders/unchecked")
    
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
            <FinishedItem
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
                      
                      {this.remList()}
                    </React.Fragment>
                
               
              </div>
            </div>
          
        );
      }
    }
