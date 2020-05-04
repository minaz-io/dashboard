import React from 'react';
import CheckAuth from './components/CheckAuth';

export default function Layout(props: any) {
  return (
    <>
      <CheckAuth {...props} />
      {props.children}
    </>
  );
}
