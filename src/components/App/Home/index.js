import React from 'react';
// ant design的引用
import { Row, Col, Layout } from 'antd';

// Apollo引用
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
// React的Router的Link标签引用
// import {Link} from 'react-router-dom';
// 自定义组件引用
// import ReportLists from "../../ReportLists";//详情页面组件，稍后会进行拆分（2020年9月18日10:00:19）
import Header from '../../Header';
import Content from '../../Content';
import Sider from '../../Sider';
import ReportLists from '../../ReportLists';
// 引入样式
import './style.css';

const client = new ApolloClient({
    uri: 'http://182.92.176.49/graphql/', // your GraphQL Server 
  });
  
class Home extends React.Component{
  render(){
    return(
      <ApolloProvider client={client}>
      
        {/* 头 */}
        <Row>

            <Col span = {24}><Header></Header></Col>
    
        </Row>
        {/* 主体 */}
        
        {/* 侧边栏 */}
        <Layout style={{marginTop: "6.3rem", height: 'auto'}}>
          <Sider></Sider>

        {/* 文章栏 */}

         <Content >
            <div style={{float: 'left', margin: 10}}>
              <ReportLists majorid = {this.props.match.params.majorid}></ReportLists>
            </div>
         </Content>

         </Layout>
        {/* 脚 */}
        
      
      </ApolloProvider>
      // <ApolloProvider client={client}>
      //   <ReportLists></ReportLists>
      //   {/* <div className="App"> */}
      //     {/*****************************************头部****************************************/}
      //     {/* <div className="App-header"></div> */}
      //     {/*****************************************头部****************************************/}
      //     {/* <div className="body">
      //       <div className="App_list_title">计算机与信息学院夏季学期<br />-报告安排-</div> */}
      //     {/* <ReportLists majorid={this.props.match.params.majorid} />此处是网站页面组件 */}
      //     {/* </div> */}
      //     {/*****************************************头部****************************************/}
      //     {/* <div className="footer">
      //       <div className="footer_index">
      //         <a><Link to={'/index/1'}>软件工程</Link></a>
      //       </div>
      //       <div className="footer_index2">
      //         <a><Link to={'/index/2'}>嵌入式</Link></a>
      //       </div>
      //     </div>
      //   </div> */}
      // </ApolloProvider>
    )
  }
};

export default Home

