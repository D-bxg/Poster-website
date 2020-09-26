import React from 'react';
// // Apollo组件引用
import { graphql, useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
// // React的Router的Link标签引用
// import { Link } from 'react-router-dom';
// import { render } from '@testing-library/react';

const QUERY_REPORTS = gql`
  query ReportsById($report_id: Int){
  # Note that fields names become camelcased
    reportsById(reportId: $report_id){
      edges {
        node {
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

const Index = (majorid)=>{
  const { data, loading } = useQuery(
    QUERY_REPORTS, {
        variables:{
            major_id:parseInt(majorid.majorid),
        }
    }
  );

  if (loading) return <p>Loading...</p>;

  return(
    <div></div>
  )
}

export default Index

// class ReportLists extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
      
//     }
//   }
  // Polling: provides near-real-time synchronization with
  // your server by causing a query to execute periodically
  // at a specified interval
  // const { data, loading } = useQuery(
  //   QUERY_REPORTS, {
  //     variables:{
  //       major_id:parseInt(majorid),
  //     }
  //   }
  // );
  
  
  
  // render (){
  //   return(
  //     <React.Fragment>

  //     </React.Fragment>
  //   )

    // // should handle loading status
    // if (loading) return <p>Loading...</p>


    // return (
    //   data.reportsById.edges.map(({ node },idx) => (
    //   <div key={node.reportId}>
    //     {/*该处返回的为导航页面排版*/}
  
    //     <div className="list_body">
  
    //       <div className="list_title">
    //         <p>★第{idx+1}期★</p>
    //       </div>
  
    //       <div className="list_date">
    //         {node.date}
    //       </div>
  
    //       <div className="list_date">
    //         {node.time}
    //       </div>
  
    //       <div className="list_d">
    //       <div className="list_title_title">
    //         讲座专家：
    //       </div>
    //        <div className="list_ul">
    //          {node.name}
    //        </div>
    //       </div>
          
    //       <div className="list_d">
    //         <div className="list_title_title">
    //           讲座主题：
    //         </div>
    //         <div className="list_ul">
    //           {node.title}
    //         </div>
    //       </div>
          
  
          
          
    //       <div className="list_platform" dangerouslySetInnerHTML={{__html:node.platform}}>
    //       </div>
  
    //       <div  className="list_link">
    //         <a><Link to={'/details/r/' + node.reportId + '/n/' + (idx + 1)}>查询详情</Link></a>
    //       </div>
          
    //       </div>
    //       {/* 
    //       <p>
    //         Header: {node.reportHeader.icon}
    //         Date: {node.date}
    //         Time: {node.time}
    //         Name: {node.name}
    //         Occupation: {node.occupation}
    //         Title: {node.title}
    //         <Link to={'/details/' + node.reportId }>Details</Link>
    //         Footer: {node.footer}
    //       </p>
    //       */}
    //       </div>
    //     )
    //   )
    // )
//   }
  
// }

// const QUERY_REPORTS = gql` query ReportsById($major_id: Int) {
//   reportsById(majorId: $major_id){
//     edges{
//       node{
//         reportHeader{
//           icon
//         }
//         date
//         time
//         name
//         occupation
//         title
//         reportFooter{
//           image
//         }
//         reportId
//         majorId
//       }
//     }
//   }
// }`

// const A = graphql( QUERY_REPORTS)(ReportLists)

// export default A