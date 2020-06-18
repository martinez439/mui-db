import React, { Component } from 'react'


export default class CardThree extends Component {

    constructor(props) {
        super(props);
        this.state = {
          items: []
        };
        
      };
      
      componentDidMount() {
        fetch("http://localhost:8000/receive")
          .then(res => res.json())
          .then(
            (result) => 
              this.setState({
                items: result.Rows.Row[2].Summary.ColData[6].value},
                console.log(result)
              ),
             
              
          )
      
    }


    render() {
      const { items } = this.state;
        return (
            <div>
              <>
              <h1 style={{marginLeft: '1.5rem'}}>${items}</h1>
              </>
            </div>
        )
    }
}