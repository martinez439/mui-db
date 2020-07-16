import React, { Component } from 'react'
import { css } from "@emotion/core";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: #3F51B6;
`;


export default class CardTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      items: []
    };
    
  };
      
      componentDidMount() {
        fetch("https://pacific-wildwood-91690.herokuapp.com/profitloss")
          .then(res => res.json())
          .then(
            (result) => 
              this.setState({
                items: result.Rows.Row[3].Summary.ColData[1].value,
                loading: false},
                console.log(typeof result.Rows.Row[3].Summary.ColData[1].value)
              ),
             
              
          )
      
    }
   


    render() {
      const { items, loading } = this.state;
      let firstNum = Math.trunc(items);
      let newNum = firstNum.toString().split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "," );
      
        return (
            <div>
              <>
              <React.Fragment>
              {loading ? <div className="sweet-loading">
                    <ClimbingBoxLoader

                      css={override}
                      size={12}
                      color={"#3f51b6"}
                      loading={this.state.loading}
                    />  </div> :

        <h1 style={{marginLeft: '1.5rem'}}>${newNum}</h1> }
              
              </React.Fragment>
              </>
            </div>
        )
    }
}