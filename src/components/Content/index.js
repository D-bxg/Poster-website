import React from 'react';
// 引入Apollo
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
// 引入ant design样式
import { Layout, Breadcrumb } from 'antd';

import './style.css';

const { Content, } = Layout;

const QUERY_REPORTS = gql`
    query {
    # Note that fields names become camelcased
        reportsById{
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

    return (
            <Layout style={{ padding: '0 24px 24px' , height: '100vh' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
                >
                Content
                </Content>
            </Layout>
        );
    
}
// class index extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             majorId : this.props.majorid,
//          };
//     }
//     render() {

//         const { data, loading } = useQuery(
//             QUERY_REPORTS, {
//                 variables:{
//                     major_id:parseInt(this.state.majorId),
//                 }
//             }
//         );

//         if (loading) return <p>Loading...</p>;

//         return (
//             <Layout style={{ padding: '0 24px 24px' , height: '100vh' }}>
//                 <Breadcrumb style={{ margin: '16px 0' }}>
//                     <Breadcrumb.Item>Home</Breadcrumb.Item>
//                     <Breadcrumb.Item>List</Breadcrumb.Item>
//                     <Breadcrumb.Item>App</Breadcrumb.Item>
//                 </Breadcrumb>
//                 <Content
//                 className="site-layout-background"
//                 style={{
//                     padding: 24,
//                     margin: 0,
//                     minHeight: 280,
//                 }}
//                 >
//                 Content
//                 </Content>
//             </Layout>
//         );
//     }
// }

export default Index;