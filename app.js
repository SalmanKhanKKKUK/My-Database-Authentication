const firebaseConfig = {
  apiKey: "AIzaSyCQUqK_8zNWyV8VMXUSCaMcCkODCPdRo48",
  authDomain: "fir-class-32011.firebaseapp.com",
  databaseURL: "https://fir-class-32011-default-rtdb.firebaseio.com",
  projectId: "fir-class-32011",
  storageBucket: "fir-class-32011.appspot.com",
  messagingSenderId: "485701548755",
  appId: "1:485701548755:web:475ed573fdb8ed326ef226"
};
// Initialize Firebase
const frb = firebase.initializeApp(firebaseConfig);

console.log(frb.database);

function signup(){
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    console.log(email.value,password.value);

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
}

function login(){
  var email=document.getElementById("emailadress");
  var password=document.getElementById("pass");

  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
}

function SignInWithGoogle(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(errorMessage);
  });

}

function send(){
 var email=document.getElementById("email");
 var name=document.getElementById("name");
 let obj={
  email:email.value,
  name:name.value
 }
//  console.log(obj);
  frb.database().ref('student').push(obj);  
}

function getDataFromFirebase(){
  frb.database().ref('student').on("child_added",(data)=>{
    console.log(data.val());
  });
}
getDataFromFirebase();

function deleteDataFromFirebase(){
  frb.database().ref('student/-NhurcaaWoZ7nyKLX5vz').remove();
}
deleteDataFromFirebase();

function editDataFromFirebase(){
  frb.database().ref('student/-NhurcaaWoZ7nyKLX5vz').set({
    email:"salmankhan747500@gmail.com",
    name:"SalmanKhan"
  })
}
editDataFromFirebase();