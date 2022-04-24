import React from 'react'
import { useContext } from 'react';
import { user } from './Input';

const Output3 = () => {
    const use=useContext(user)
  return (
    <div>output3 page {use}</div>
  )
}

export default Output3