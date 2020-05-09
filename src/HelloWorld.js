import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const HELLO_WORLD = gql`
  {
    hello
  }
`;

const HelloWorld = () => {
  const { loading, error, data } = useQuery(HELLO_WORLD);
  if (loading) console.log('loading');
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;
  // console.log(data);
  // return <p>{data.hello}</p>;
  return <p>World</p>;
};

export default HelloWorld;
