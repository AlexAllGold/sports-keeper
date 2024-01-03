import React from 'react';
import { useParams } from 'react-router-dom';

function Client() {
  const { id } = useParams();
  return <h1>Client {id}</h1>;
}

export { Client };
