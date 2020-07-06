import React, { Component } from 'react'
import Card from '@material-ui/core/Card';


export default class CustomerList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          items: []
        };
        
      };
      
      componentDidMount() {
        fetch("http://localhost:8000/customers")
          .then(res => res.json())
          .then(
            (result) => 
              this.setState({
                items: result.QueryResponse.Customer},
                console.log(result)
              ),
              
          )
      
    }


    render() {
      const { items } = this.state;
        return (
            <div>
              <>
              <Card>
              
            
              <ul>
                {items.map(item => (
                  <li key={item.Id}>{item.DisplayName}</li>
                ))}
                
              </ul>
                
              </Card>
              </>
            </div>
        )
    }
}