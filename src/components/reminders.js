import React, { Component } from 'react'
import axios from 'axios';
import AddReminder from './addReminder'
import ReminderItem from './reminderItem';
import Paper from '@material-ui/core/Paper';






export default class ReminderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todos: []
      };
      this.markComplete = this.markComplete.bind(this);
      this.deleteReminder = this.deleteReminder.bind(this);
      this.remList=this.remList.bind(this);
      this.addNew = this.addNew.bind(this);
    }

      componentDidMount() {
        axios
          .get("http://localhost:8000/reminders")
    
          .then(response => {

            console.log(response.data)
            //let mongoInfo = response.data

            this.setState({ todos: response.data });
          })
          .catch(error => {
            console.log(error);
          });
      }

      markComplete (id) {
        axios
          .patch("http://localhost:8000/reminders/" + id, { isComplete: "true" })
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
          
          this.setState({
            todos: this.state.todos.filter(todo => todo._id !== id)
          });
          window.location.reload();
            
      };



      

      deleteReminder(id) {
        axios.delete("http://localhost:8000/reminders/" + id).then(response => {
          console.log(response.data);
        });
    
        this.setState({
          todos: this.state.todos.filter(todo => todo._id !== id)
        });
      }
      
      addNew() {
        axios
          .get("http://localhost:8000/reminders")
    
          .then(response => {

            console.log(response.data)
            //let mongoInfo = response.data

            this.setState({ todos: response.data });
          })
          .catch(error => {
            console.log(error);
          });
        };

        
          
  
      remList() {
        return this.state.todos.map(todo => {
          return (
            <ReminderItem
              todo={todo}
              key={todo._id}
              markComplete={this.markComplete}
              deleteReminder={this.deleteReminder}
              updateCompletedList={this.updateCompletedList}
              
              
            />
          );
        });
      }

    


      
       
    
      render() {
        return (
         
            <div className="App">
              <div className="container">
                
                    <React.Fragment>
                      <div style={{justifyContent:'flex-end'}}>
                      <AddReminder 
                      addReminder={this.addReminder}
                      addNew={this.addNew}
                      
                      />
                      </div>
                      <Paper elevation={3}>
                        <h1 
                        style={{
                          display: 'flex', 
                        marginBottom:'.5rem',
                        alignContent: 'center', 
                        alignItems:'center', 
                        justifyContent:'center'}}> Reminders:</h1> 
                      {this.remList()}
                      </Paper>
                    </React.Fragment>
                    
                
               
              </div>
            </div>
          
        );
      }
    }
