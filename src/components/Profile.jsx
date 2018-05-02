import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Loading } from '.';

const GET_CURRENT_USER = gql`
  {
    viewer {
      login
      name
    }
  }
`;

const Profile = () => {
  return (
    <Query query={GET_CURRENT_USER}>
      {({ data, loading }) => {
        const { viewer } = data;

        if (loading || !viewer) {
          return <Loading />;
        }

        return (
          <div>
            <h1>Name: {viewer.name}</h1>
            <h2>Username: {viewer.login}</h2>
          </div>
        );
      }
      }
    </Query>

  );
}

export default Profile;
