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
        fetch("http://localhost:8000/getCompanyInfo")
          .then(res => res.json())
          .then(
            (result) => 
              this.setState({
                items: result.CompanyInfo.CompanyName},
                console.log(result)
              ),
              
          )
      
    }


    render() {
      const { items } = this.state;
        return (
            <div>
              <>
              <Card >
              <h2 style={{marginLeft: '1.5rem'}}>{items}</h2>
              </Card>
              </>
            </div>
        )
    }
}