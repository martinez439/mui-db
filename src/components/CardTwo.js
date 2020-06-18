import React, { Component } from 'react'


export default class CardTwo extends Component {

    constructor(props) {
        super(props);
        this.state = {
          items: []
        };
        
      };
      
      componentDidMount() {
        fetch("http://localhost:8000/profitloss")
          .then(res => res.json())
          .then(
            (result) => 
              this.setState({
                items: result.Rows.Row[3].Summary.ColData[1].value},
                console.log(result.Rows.Row[3].Summary)
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