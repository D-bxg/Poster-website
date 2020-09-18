import React from 'react';
// Apollo引用
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
// React的Router的Link标签引用
import {Link} from 'react-router-dom';
// 自定义组件引用
import ReportLists from "../../ReportLists";//详情页面组件，稍后会进行拆分（2020年9月18日10:00:19）

const client = new ApolloClient({
    uri: 'http://47.104.225.253/graphql/', // your GraphQL Server 
  });
  
class Home extends React.Component{
  render(){
    return(
      <ApolloProvider client={client}>
        <ReportLists></ReportLists>
        {/* <div className="App"> */}
          {/*****************************************头部****************************************/}
          {/* <div className="App-header"></div> */}
          {/*****************************************头部****************************************/}
          {/* <div className="body">
            <div className="App_list_title">计算机与信息学院夏季学期<br />-报告安排-</div> */}
          {/* <ReportLists majorid={this.props.match.params.majorid} />此处是网站页面组件 */}
          {/* </div> */}
          {/*****************************************头部****************************************/}
          {/* <div className="footer">
            <div className="footer_index">
              <a><Link to={'/index/1'}>软件工程</Link></a>
            </div>
            <div className="footer_index2">
              <a><Link to={'/index/2'}>嵌入式</Link></a>
            </div>
          </div>
        </div> */}
      </ApolloProvider>
    )
  }
};

export default Home