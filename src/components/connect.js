import React, { Component } from 'react'
import Qb from '../Quickbooks/C2QB_green_btn_lg_hover.png'
import Grid from '@material-ui/core/Grid';


class ConnectQb extends Component {

    render(){
        return (
            
            <Grid>
            <div>
           
                
                <button onClick={() => {
            window.location = window.location.href
              ? 'https://pacific-wildwood-91690.herokuapp.com/login' 
              : 'https://pacific-wildwood-91690.herokuapp.com/' }
                }
                style={{padding: '2px',   
                marginLeft: '1rem',
                
                backgroundColor:'white',
                border:'none' }}>
              <img src={Qb} alt="Logo" 
              style={{height: '30px'}}></img>
              </button>
        
            </div>
            </Grid>
        )
    }
}
export default ConnectQb;

