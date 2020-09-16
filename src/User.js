import React from 'react';
import { useQuery, useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';

const QUERY_USERS = gql`
  query UserModelsByUid($uid: Int) {
    userModelsByUid(uid: $uid){
      edges{
        node{
          id
          name
          lastName
          testText
          uid
        }
      }
    }
}
`;
export function UserInfo() {
  // Polling: provides near-real-time synchronization with
  // your server by causing a query to execute periodically
  // at a specified interval
  const { data, loading } = useQuery(
    QUERY_USERS, {
      pollInterval: 1000,
      variables:{
        uid: 1
      }
    }
  );
  
  // should handle loading status
  if (loading) return <p>Loading...</p>;

  const styleObj = {
    color: 'white',
    backgroundColor: 'green'
  };
   
  return data.userModelsByUid.edges.map(({ node }) => (
    <div key={node.id}>
      <p>
        User - {node.uid}: {node.name} {node.lastName}
        <div 
          style={styleObj}
          dangerouslySetInnerHTML={{__html: node.testText}}>
        </div>
      </p>
    </div>
  ));
}


