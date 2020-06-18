import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';


class ConnectQb extends Component {

    render(){
        return (
            
            <Grid>
            <div>
            <Typography paragraph>
         
          One paragraph
          
          </Typography>
                
                <button onClick={() => {
            window.location = window.location.href.includes('localhost') 
              ? 'http://localhost:8000/login' 
              : 'http://localhost:8000' }
                }
                style={{padding: '10px', 
                'fontSize': '30px', 
                'marginTop': '10rem', 
                'marginLeft' : '25rem' }}>
              Connect QuickBooks</button>
        
            </div>
            </Grid>
        )
    }
}
export default ConnectQb;

