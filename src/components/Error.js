import React from 'react';
import  {useRouteError} from 'react-router-dom'

const Error = () => {
   const err = useRouteError() 
   console.log(err);
   
  return (
    <div>
        <h1>OOps!!!</h1>
         <h2>{err.status}</h2>
         <h3>{err.data}</h3>
    </div>
 
  )
}

export default Error;