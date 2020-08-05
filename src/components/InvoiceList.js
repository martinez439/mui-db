import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import DescriptionIcon from '@material-ui/icons/Description';
import { css } from "@emotion/core";
import ScaleLoader from "react-spinners/ScaleLoader";
import CardHeader from '@material-ui/core/CardHeader';


const override = css`
  display: block;
  margin: 4rem 0 0 5rem;
  border-color: #3F51B6;
`;
const avatar = `
backgroundColor: red;
`;



export default class InvoiceList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true
    };
    
  };
      
      componentDidMount() {
        fetch("https://pacific-wildwood-91690.herokuapp.com/invoices")
          .then(res => res.json())
          .then(
            (result) => 
              this.setState({
                items: result.QueryResponse.Invoice,
                loading: false},
                console.log(result)
              ),
              
          )
      
    }


    render() {
      const { items, loading } = this.state;
        return (
            <div className="InvoiceList">
              <>
              {loading ? <div className="sweet-loading">
                    <ScaleLoader



                      css={override}
                      height={37}
                      width={5}
                      radius={2}
                      margin={3}
                      color={"#3f51b6"}
                      loading={this.state.loading}
                    />  </div> :

              <Card style={{ display: 'inline-block', paddingRight: '2rem', width: '400px'}}>
                <CardHeader title="Invoices"  subheader="Outstanding"
                avatar={
                  <Avatar aria-label="recipe" className={avatar} style={{backgroundColor: 'none'}}>
                    <DescriptionIcon  color="primary"/>
                  </Avatar>
                }/>
              <List>
              
              {items.map(item => (
                <ListItem style={{display: 'flex'}} key={item.Id}>
                  <Divider component="li" style={{
                      margin: '1rem 0 1rem 1rem',
                      width: '100%'
                }}>
                  <li key={item.Id}>
                   
                    <h2 style={{display: 'flex', justifyContent:'flex-start'}}>$ {item.Line[0].Amount} {"  "}</h2>
                    {"  "} <h2 style={{display: 'flex', justifyContent:'center'}}> {"  "} | {"  "} </h2> {" "}
                    <h5 style={{ display: 'flex', justifyContent:'flex-end', color: '#878787'}}> {item.CustomerRef.name}
                </h5>
                
                </li>
                </Divider>
                </ListItem>
              ))}
              
            </List>  
            
              
                
              </Card>}
              </>
            </div>
        )
    }
}