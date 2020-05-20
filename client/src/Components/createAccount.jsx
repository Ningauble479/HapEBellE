import React, { useState } from 'react'
import axios from 'axios'
import {gql} from 'apollo-boost'
import { useMutation } from 'react-apollo';


export default (props)=>{
    const SIGN_UP = gql`
        mutation signup($userName: String!, $email: String!, $password: String!) {
            signup(userName: $userName, email: $email, password: $password) {
              userName
              email
              password
            }
          }
        `;
    
    let [username, changeUsername] = useState(null)
    let [email, changeEmail] = useState(null)
    let [password, changePassword] = useState(null)
    let [signUp] = useMutation(SIGN_UP)

    function createUser(){
        signUp({ variables: { userName: username, email: email, password: password } });
    }

    return (
        <div>
          <h1>Add a user</h1>
          <form
            onSubmit={e => {
              e.preventDefault();
              createUser()
              changeUsername('');
              changeEmail('');
              changePassword('');
            }}
          >
            <input placeholder='User Name' value={username} onChange={(e)=>changeUsername(e.target.value)}/>
            <input placeholder='email' value={email} onChange={(e)=>changeEmail(e.target.value)}/>
            <input placeholder='password' value={password} onChange={(e)=>changePassword(e.target.value)}/>
            <button type="submit">Add Todo</button>
          </form>
        </div>
      );

}