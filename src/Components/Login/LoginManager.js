import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';




export const initializeLoginFramework = () =>{
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
}

  export const createUserWithEmailAndPassword =(name,email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res =>{
      const newUserInfo =res.user;
      newUserInfo.error = '' ;
      newUserInfo.success= true ;
      updateUserName(name);
      return newUserInfo ;
    })
    .catch(error => { 
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success= false;
      return newUserInfo ;
    });
  }

  export const signInWithEmailAndPassword = (email,password) =>{
    return firebase.auth().signInWithEmailAndPassword(email, password)
     .then(res => {
       const newUserInfo = res.user;
       newUserInfo.error = '' ;
       newUserInfo.success= true ;
       return newUserInfo
     })
     .catch(error => {
       const newUserInfo = {};
       newUserInfo.error = error.message;
       newUserInfo.success= false;
      return newUserInfo;
     });
   }

   export const handleGoogleSignIn = () =>{
    const googleProvider =new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then(res =>{
      const {displayName, email} = res.user;
      const signedInUser = {
        isSignedIn:true,
        name: displayName,
        email: email,
        success :true
      }
      return signedInUser;
    
    })
    .catch(err => {
      console.log(err);
      console.log(err.message);
    })
  }

  export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider).then(function(result) {
      
      // var token = result.credential.accessToken;
     
      var user = result.user;
      user.success = true;
      return user ;
      
    }).catch(err =>{
        console.log(err);
        console.log(err.message);
    });
  }

  export const handleSignedOut = () =>{
    return firebase.auth().signOut()
    .then(res => {
      const signOutUser = {
        isSignedOut: false,
        name: '',
        email:'',
        error:''
      }
      return signOutUser;
    })
    .catch(err =>{

    });
  }

   const updateUserName = name =>{
    var user = firebase.auth().currentUser;

        user.updateProfile({
        displayName: name
        
        }).then(function() {
        console.log('update successfully');
        }).catch(function(error) {
        console.log(error);
        });
    }