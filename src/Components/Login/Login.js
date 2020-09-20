import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSignedOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';
import './Login.css';

function Login(){

    const[newUser, setNewUaser]= useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email:'',
    password:'',
  });

  initializeLoginFramework();

  const[loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn =() => {
    handleGoogleSignIn()
    .then(res =>{
       handleResponse(res, true);
    })
}

const fbSignIn = () => {
   handleFbSignIn()
  .then(res =>{
   handleResponse(res, true);
   })
  }

   const signOut = () => {
       handleSignedOut()
       .then(res =>{
           handleResponse(res, false);
       })
   } 

   const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
    
  }
  const handleBlur = (e) =>{
    // console.log(e.target.name, e.target.value);
    let isFormValid = true ;
    if(e.target.name === 'email'){
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
      //console.log(isEmailValid);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6 ;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFormValid=isPasswordValid && passwordHasNumber;
    }
    if(isFormValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name]= e.target.value ;
      setUser(newUserInfo);
    }
  }

  const handleSubmit = (e) =>{
    if(newUser && user.email && user.password){
       createUserWithEmailAndPassword(user.name,user.email, user.password)
       .then(res =>{
        handleResponse(res, true);

       })
    }
    if(!newUser && user.email && user.password){
        signInWithEmailAndPassword(user.email, user.password)
        .then(res =>{
            handleResponse(res, true);
    
           })
    }
    e.preventDefault(); 
  }
return(
    // style={{textAlign: 'center'}}
    <div className="container" > 
      
  <Form onSubmit={handleSubmit}>
      { newUser && <Form.Label>Name</Form.Label> }
      <br/>
      {newUser &&<input className="box" name="name" type="text" onBlur={handleBlur} placeholder="name"/>}
      
      <br/>
      <Form.Label>Email</Form.Label>
      <br/>
      <input className="box" type="text" name="email" onBlur={handleBlur} placeholder="email" required/>
      <br/>
      <Form.Label>Password</Form.Label>
      <br/>
      <input className="box" type="password" name="password" id="" onBlur={handleBlur} placeholder="password" required/>
      <br/>
      <input  type="checkbox" onChange={() => setNewUaser(!newUser)} name="newUser" id=""/>
      <label htmlFor="">New user Sign Up</label>
      <br/>
      <input className="login" type="submit" value={newUser ? 'Sign Up' : 'Sign In'}/>
      
  </Form>
  {
      user.isSignedIn ? <button onClick={signOut}>Sign Out</button> :
      <button className="signInMethod" onClick={googleSignIn}>Sign in using Google</button>
    
    }
    <br/>
    <button className="signInMethod" onClick={fbSignIn}>Sign in using Facebook</button>
    
    {
      user.isSignedIn && <div><p>Welcome, {user.name}</p>
      </div>
    }
  <p style={{color:'red'}}>{user.error}</p>
  {user.success && <p style={{color:'green'}}>User {newUser ? 'created' : 'Logged In'} successfully</p>}
      
</div>




//  <div className='container'>
//     <Form onSubmit={handleSubmit}> 

//     <Form.Group controlId="formBasicName">
//         {
//         newUser && <Form.Label>Name</Form.Label>
//         }
//     {newUser && <Form.Control type="name" onBlur={handleBlur} placeholder="Enter your name" />
        
//      }
//     </Form.Group>

//     <Form.Group controlId="formBasicEmail">
    
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" onBlur={handleBlur} placeholder="Enter email" />
//     </Form.Group>

//     <Form.Group controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" onBlur={handleBlur} placeholder="Password" />
//     </Form.Group>
//     <Form.Group controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" onChange={() => setNewUaser(!newUser)} label="New user Sign Up" />
//         <Button inputType="submit" value={newUser ? 'Sign Up' : 'Sign In'}></Button>
//         <Button onClick={()=> setLoggedInUser({})}>Sign Out</Button>
//     </Form.Group>
//     <Button variant="primary" type="submit"  value={newUser ? 'Sign Up' : 'Sign In'}>
//         Submit
//     </Button>
    
//     {
//      user.isSignedIn ?<button onClick={signOut}>Sign Out</button> : <button className="btn btn-lg btn-google btn-block text-uppercase" onClick={googleSignIn} type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>
//       }

//      <button class="btn btn-lg btn-facebook btn-block text-uppercase" onClick={fbSignIn} type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
//  {
//            user.isSignedIn && <div> <p>Welcome, {user.name}</p>
//            </div>
//          }
//         <p style={{color:'red'}}>{user.error}</p>
//            {user.success && <p style={{color:'green'}}>User {newUser ? 'created' : 'Logged In'} successfully</p>}
//     </Form>


     
//          </div>       
);

}

export default Login;

