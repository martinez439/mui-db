import React, { Component } from 'react'
import Card from '@material-ui/core/Card';


export default class InvoiceList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          items: []
        };
        
      };
      
      componentDidMount() {
        fetch("http://localhost:8000/invoices")
          .then(res => res.json())
          .then(
            (result) => 
              this.setState({
                items: result.QueryResponse.Invoice},
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
                  <li key={item.Id}>
                      {item.CustomerRef.name} | {" "}$
                      {item.Line[0].Amount}</li>
                ))}
                
              </ul>
                
              </Card>
              </>
            </div>
        )
    }
}