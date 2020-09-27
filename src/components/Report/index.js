import React from 'react';
// // Apollo组件引用
import { graphql, useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
// // React的Router的Link标签引用
import { NavLink } from 'react-router-dom';
// import { render } from '@testing-library/react';
import { Typography, Divider } from 'antd';
import { Layout, Breadcrumb, Row, Col } from 'antd';

const { Content, } = Layout;

const { Title, Paragraph, Text } = Typography;

const QUERY_REPORTS = gql`
  query ReportsById($report_id: Int){
  # Note that fields names become camelcased
    reportsById(reportId: $report_id){
      edges {
        node {
          priorId,
          id, 
          date, 
          time, 
          name, 
          occupation, 
          title, 
          content,
          platform,
          step, 
          reportId,
          majorId,
          priorId,
          nextId,
          
        }
      }
    }
  }
`

const Index = (reportid)=>{
  const { data, loading } = useQuery(
    QUERY_REPORTS, {
        variables:{
            report_id:parseInt(reportid.reportid),
        }
    }
  );

  if (loading) return <p>Loading...</p>;

  return data.reportsById.edges.map(
    ({node}, key)=>(
      <div  key={node.reportId}>
                  <Typography>
                    <Title>{node.title}</Title>
                    <Paragraph>
                      In the process of internal desktop applications development, many different design specs and
                      implementations would be involved, which might cause designers and developers difficulties and
                      duplication and reduce the efficiency of development.
                    </Paragraph>
                    <Paragraph>
                      After massive project practice and summaries, Ant Design, a design language for background
                      applications, is refined by Ant UED Team, which aims to
                      <Text strong>
                        uniform the user interface specs for internal background projects, lower the unnecessary
                        cost of design differences and implementation and liberate the resources of design and
                        front-end development
                      </Text>.
                    </Paragraph>
                    <Title level={2}>Guidelines and Resources</Title>
                    <Paragraph>
                      We supply a series of design principles, practical patterns and high quality design resources
                      (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people create their product
                      prototypes beautifully and efficiently.
                    </Paragraph>

                    <Paragraph>
                      <ul>
                        <li>
                          <a href="/docs/spec/proximity">Principles</a>
                        </li>
                        <li>
                          <a href="/docs/pattern/navigation">Patterns</a>
                        </li>
                        <li>
                          <a href="/docs/resource/download">Resource Download</a>
                        </li>
                      </ul>
                    </Paragraph>

                    <Paragraph>
                      Press <Text keyboard>Esc</Text> to exit...
                    </Paragraph>

                    <Divider />

                    <Title>介绍</Title>
                    <Paragraph>
                      蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
                    </Paragraph>
                    <Paragraph>
                      随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系
                      Ant Design。基于<Text mark>『确定』和『自然』</Text>
                      的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
                      <Text strong>更好的用户体验</Text>。
                    </Paragraph>
                    <Title level={2}>设计资源</Title>
                    <Paragraph>
                      我们提供完善的设计原则、最佳实践和设计资源文件（<Text code>Sketch</Text> 和
                      <Text code>Axure</Text>），来帮助业务快速设计出高质量的产品原型。
                    </Paragraph>

                    <Paragraph>
                      <ul>
                        <li>
                          <a href="/docs/spec/proximity">设计原则</a>
                        </li>
                        <li>
                          <a href="/docs/pattern/navigation">设计模式</a>
                        </li>
                        <li>
                          <a href="/docs/resource/download">设计资源</a>
                        </li>
                      </ul>
                    </Paragraph>

                    <Paragraph>
                      按<Text keyboard>Esc</Text>键退出阅读……
                    </Paragraph>
                    
                    <NavLink to={`/details/r/1/n/${node.nextId}`}>下一页</NavLink>

                  
                  </Typography>
                
        </div>
      
      )
  )
   
  
    
  
}

export default Index
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


