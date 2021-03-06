import React from 'react';
import CardOne from './CardOne';
import CardTwo from './CardTwo';
import CardThree from './CardThree';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import { green, pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Divider from '@material-ui/core/Divider';

import CardActions from '@material-ui/core/CardActions';
import ReminderList from './reminders';






const drawerWidth = 140;

const useStyles = makeStyles((theme) => (
  {
    root: {
      width: '250px',
      marginTop: '.5rem'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    pink: {
      color: theme.palette.getContrastText(pink[500]),
      backgroundColor: pink[500],
    },
    green: {
      color: '#fff',
      backgroundColor: green[500],
    },
    content: {
      
      diplay: 'inline-flex',
      marginLeft: '9.5rem',
      marginTop: '2.5rem',
      flexGrow: 1,
      
      //justifyContent: 'flex-end',
      padding: theme.spacing(5),
    },

    reminders: {
      
      diplay: 'inline-flex',
      marginLeft: '1.5rem',
      marginTop: '.5rem',
      flexGrow: 1,
      
      justifyContent: 'center',
      padding: theme.spacing(2),
    },
    
  }));

  
export default function DashBoard() {
  const classes = useStyles();
   return (
          <div>
          
          <Grid container className={classes.content}>
          <Grid item xs={12} sm={4} md={3.5}>
          <Card className={classes.root}>
          <CardHeader
                avatar={<Avatar>
                <FolderIcon />
               </Avatar>}
                title="Company:"
                subheader="Currently viewing"
                />
                <Divider variant="inset" />
                
                <CardOne className={classes.centerInteriorContent}/>
         <CardActions>
          
          </CardActions>   
          
          </Card>
          </Grid>
          
          <Grid item xs={12} sm={4} md={3.5}>
          <Card className={classes.root}>
          
          <CardHeader
                avatar={<Avatar className={classes.green}>
                  <PageviewIcon />
                </Avatar>}
                title="Profit and Loss"
                subheader="Total Net Income"
                />
          <Divider variant="inset" />
          
            <CardTwo />  
          </Card>
          
          </Grid>
          <Grid item xs={12} sm={4} md={2} >
          <Card className={classes.root}>
          
          <CardHeader
                avatar={<Avatar className={classes.pink}>
                    <AssignmentIcon />
                    </Avatar>}
                title="Receivables"
                subheader="Aging"
                />
             <Divider variant="inset" />
             <CardThree />
         
          </Card>
          
          </Grid>
         
        </Grid>
      
        <Grid container className={classes.reminders}>
          
        <ReminderList />
        
          </Grid>
          
        </div>
      
  
      
)
   }
