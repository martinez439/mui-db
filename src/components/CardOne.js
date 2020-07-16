import React, { Component } from 'react'
import ConnectQb from './connect'
import { css } from "@emotion/core";
import SyncLoader from "react-spinners/SyncLoader";


const override = css`
  display: block;
  margin: 1rem 0 1rem 5rem;
  border-color: #3F51B6;
`;

export default class CardOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
          loading: true,
          items: []
        };
        
      };
      
      componentDidMount() {
        fetch("https://pacific-wildwood-91690.herokuapp.com/getCompanyInfo")
          .then(res => res.json())
          .then(
            (result) => 
              this.setState({
                items: result.CompanyInfo.CompanyName,
                loading: false},
                
                console.log(result)
              ),
              
          )
      
    }


    render() {
      const { items, loading } = this.state;
        return (
          
            <div>
              
            <React.Fragment>
              {loading ? <div className="sweet-loading">
                    <SyncLoader
                      css={override}
                      size={11}
                      color={"#3f51b6"}
                      loading={this.state.loading}
                      
                    />

                <div style={{marginLeft:"1rem"}}><ConnectQb /></div>
                </div> : <h2 style={{marginLeft: '1.5rem'}}>{items}</h2>}
              </React.Fragment>
              
            </div>
            
        )
    }
}
