import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import PeopleIcon from '@material-ui/icons/People';
import CardHeader from '@material-ui/core/CardHeader';
import { css } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";


const override = css`
  display: flex;
  margin: 4rem 0 0 5rem;
  border-color: #3F51B6;
`;
const avatar = `
backgroundColor: red[500]
`;


export default class CustomerList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          items: [],
          loading: true
        };
        
      };
      
      componentDidMount() {
        fetch("https://pacific-wildwood-91690.herokuapp.com/customers")
          .then(res => res.json())
          .then(
            (result) => 
              this.setState({
                items: result.QueryResponse.Customer,
                loading: false},
                console.log(result)
              ),
              
          )
      
    }


    render() {
      const { items, loading } = this.state;
        return (
            <div>
              <>
              {loading ? <div>
                    <HashLoader

                      css={override}
                      size={52}
                      color={"#3f51b6"}
                      loading={this.state.loading}
                    />  </div> :

                  
              <Card 
              style={{ marginRight:'2rem'}}
              className="CustomerList">
                <CardHeader title="Customers"  subheader="Active"
                avatar={
                  <Avatar aria-label="recipe" className={avatar} style={{backgroundColor: '#3f51b5'}}>
                    <PeopleIcon />
                  </Avatar>
                } />
                
              
              <List>
              
                {items.map(item => (
                  <ListItem style={{display: 'flex'}} alignItems="flex-start" key={item.Id}>
                    <Divider component="li" style={{
                        margin: '0 0 25px 0'
                  }}><li><h4>{item.DisplayName}</h4></li>
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