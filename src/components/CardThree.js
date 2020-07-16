import React, { Component } from 'react'
import { css } from "@emotion/core";
import GridLoader from "react-spinners/GridLoader";


const override = css`
  display: block;
  margin: 1rem auto;
  border-color: #3F51B6;
`;


export default class CardThree extends Component {
        constructor(props) {
          super(props);
          this.state = {
            loading: true,
            items: []
          };
          
        };
      
      componentDidMount() {
        fetch("https://pacific-wildwood-91690.herokuapp.com/receive")
          .then(res => res.json())
          .then(
            (result) => 
              this.setState({
                items: result.Rows.Row[2].Summary.ColData[6].value,
                loading: false},
                console.log(result)
              ),
             
              
          )
      
    }


    render() {
      const { items, loading } = this.state;
      let cardThreeNum = Math.trunc(items);
      let newNumThree = cardThreeNum.toString().split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "," );
      
        return (
            <div>
              <>
              {loading ? <div className="sweet-loading">
                    <GridLoader


                      css={override}
                      size={12}
                      color={"#3f51b6"}
                      loading={this.state.loading}
                    />  </div> :
              <h1 style={{marginLeft: '1.5rem'}}>${newNumThree}</h1>}
              </>
            </div>
        )
    }
}