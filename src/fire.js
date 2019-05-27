import firebase from 'firebase'

const config= {
    apiKey: "AIzaSyBSS4Tg9XFBfRKmmEse8hdxyy4F0VKKIxQ",
    authDomain: "burguer-queen-a6bd6.firebaseapp.com",
    databaseURL: "https://burguer-queen-a6bd6.firebaseio.com",
    projectId: "burguer-queen-a6bd6",
    storageBucket: "burguer-queen-a6bd6.appspot.com",
    messagingSenderId: "507726113807",
    appId: "1:507726113807:web:ff98f9af671d7db3"
  };
  const fire =firebase.iniciatizeApp(config);
  export default fire