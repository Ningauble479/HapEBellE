import React, {useEffect} from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { CHECK_USER, UPDATE_USER } from './queries/profileQueries'




export default ()=>{
    const {data} = useQuery(CHECK_USER)
    const [update] = useMutation(UPDATE_USER)
    useEffect(()=>{
        if(data !== null && data !== undefined){
          if(data.currentUser != null && data.currentUser != undefined){
            console.log(data)
          update({ variables: { 
            id: data.currentUser._id,
            email: data.currentUser.email,
            username: data.currentUser.userName
           }})
        }
      }
      },[data])
      return(<h1></h1>)
}