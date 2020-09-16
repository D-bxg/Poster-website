import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ReportDetails } from "./Report.js";

const client = new ApolloClient({
  uri: 'http://47.104.225.253/graphql/', // your GraphQL Server 
});

export default class Details extends React.Component{
  render(){
      return(
        <ApolloProvider client={client}>
        
          <ReportDetails 
            reportid={this.props.match.params.reportid} 
            num={this.props.match.params.num}
          />{/*此处为细节页面组件*/}
        
        </ApolloProvider>
      )
  }
}

