import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ReportsInfo } from "./AllReports.js";
import {Link} from 'react-router-dom';

const client = new ApolloClient({
  uri: 'http://47.104.225.253/graphql/', // your GraphQL Server 
});

export default class App extends React.Component{
  render(){
    return(
      <ApolloProvider client={client}>
        <div className="App">
          {/*****************************************头部****************************************/}
          <div className="App-header"></div>
          {/*****************************************头部****************************************/}
          <div className="body">
            <div className="App_list_title">计算机与信息学院夏季学期<br />-报告安排-</div>
          <ReportsInfo majorid={this.props.match.params.majorid} />{/*此处是网站页面组件 */}
          </div>
          {/*****************************************头部****************************************/}
          <div className="footer">
            <div className="footer_index">
              <a><Link to={'/index/1'}>软件工程</Link></a>
            </div>
            <div className="footer_index2">
              <a><Link to={'/index/2'}>嵌入式</Link></a>
            </div>
          </div>
        </div>
      </ApolloProvider>
    )
  }
};
