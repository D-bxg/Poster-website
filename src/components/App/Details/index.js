import React from 'react';
// Apollo组件
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
//自定义组件
// import ReportDetails from "../../Report";//详情组件，稍后会把该组件进行拆分（2020年9月18日09:58:25）
// ant design的引用
import { Row, Col, Layout } from 'antd';

// Apollo引用
// React的Router的Link标签引用
import {withRouter} from 'react-router-dom';
// 自定义组件引用
// import ReportLists from "../../ReportLists";//详情页面组件，稍后会进行拆分（2020年9月18日10:00:19）
import Header from '../../Header';
import Content from '../../Content';
import Sider from '../../Sider';
import Report from '../../Report';

const client = new ApolloClient({
  uri: 'http://182.92.176.49/graphql/', // your GraphQL Server 
});

class Details extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }

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
              <Report reportid={this.props.match.params.reportid} 
            num={this.props.match.params.priorId}></Report>
              
            </div>
         </Content>

         

         </Layout>
        {/* 脚 */}
        
      
      </ApolloProvider>
        
      )
  }
}

export default withRouter(Details)

// import React from 'react';
// import { useQuery } from 'react-apollo';
// import { gql } from 'apollo-boost';
// import  '../assets/css/AllReports.css';
// import '../assets/css/tools.css';

// const QUERY_REPORT_DETAILS = gql`
//   query ReportsById($report_id: Int) {
//     reportsById(reportId: $report_id){
//       edges{
//         node{
//           reportHeader{
//             icon
//           }
//           date
//           time
//           name
//           occupation
//           title
//           content
//           platform
//           step
//           reportFooter{
//             image
//           }
//           reportId
//           majorId
//         }
//       }
//     }
// }
// `;
// export default function ReportDetails(reportid) {
//   // Polling: provides near-real-time synchronization with
//   // your server by causing a query to execute periodically
//   // at a specified interval
//   const { data, loading } = useQuery(
//     QUERY_REPORT_DETAILS, {
//       variables: {
//         report_id: parseInt(reportid.reportid),
//       }
//     }
//   );

//   // should handle loading status
//   if (loading) return <p>Loading...</p>;
   
//   return data.reportsById.edges.map(({ node } , dex) => (

    
//     <div key={node.reportId}>
//       {/*此处为细节页面*/}
//       <div className="App">
//         {/*****************************************头部****************************************/}
//         <div className="App-header"></div>
//         {/*****************************************头部****************************************/}
//         <div className="body">


          
//           {/***********************标题***********************/}
//           <div className="main-title">
//             <div className="b-title"><p>{node.title}</p></div>

//             <div className="b-date">
//               <p>★★★二〇二〇年第{parseInt(reportid.num)}期★★★</p>
//             </div>
//           </div>
//           {/***********************标题***********************/}
//           <div className="information">
//             {/*讲座时间*/}
//             <div>
            
//             </div>

//             {/*讲座时间*/}
//             <div className="d">

//               <div className="i-title">
//                 <p>讲座时间:</p>
//               </div>

//               <div className="i-text">
//                 <div><p><b>{node.date}</b></p></div>
//                 <div><p><b>{node.time}</b></p></div>
//               </div>

//             </div>
//             {/*讲座时间*/}
//             <div className="d">

//               <div className="i-title">
//                 <p>讲座专家:</p>
//               </div>

//               <div className="i-text">
//                 <div className="name">
//                   <p>{node.name}</p>
//                 </div>
//                 <div className="occupation" dangerouslySetInnerHTML={{__html:node.occupation}}>
//                 {/*<p>{node.occupation}</p>*/}
//                 </div>
//               </div>

//             </div>
//             {/*讲座内容*/}
//             <div className="d">

//               <div className="i-title">
//                 <p>讲座内容:</p>
//               </div>

//               <div className="i-text">
//                 <div className="main-text" dangerouslySetInnerHTML={{__html:node.content}}>
//                 {/*<p>{node.content}</p>*/}
//                 </div>
//               </div>

//             </div>
//             {/*讲座流程*/}
//             <div className="d">

//               <div className="i-title">
//                 <p>讲座流程:</p>
//               </div>

//               <div className="i-text">
//                 <div className="platform" dangerouslySetInnerHTML={{__html:node.platform}}>
//                   {/*<p>{node.platform}</p>*/}
//                 </div>
//                 <div className="s"></div>
//                 <div className="step" dangerouslySetInnerHTML={{__html:node.step}}>
//                   {/*<p>{node.step}</p>*/}
//                 </div>
//               </div>

//             </div>
//           </div>
//           {/***********************标题***********************/}
          

//         </div>
//         {/*****************************************头部****************************************/}
//         <div className="footer"></div>
//       </div>
//     </div>
    
//   ));
// }