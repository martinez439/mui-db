import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import DashboardIcon from '@material-ui/icons/Dashboard';

const useStyles = makeStyles((theme) => ({
    
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
   },
  }));
  

export default function NavBar() {
    const classes = useStyles();
    return (
<AppBar position="fixed" className={classes.appBar}>
<Toolbar>
  <Typography variant="h6" noWrap>
    The Simple View <DashboardIcon fontSize="large" style={{marginBottom: '-0.5rem'}}/>
  </Typography>
</Toolbar>
</AppBar>
    )
}