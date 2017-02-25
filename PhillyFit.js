(function() {
    
    
    const config = {
    apiKey: "AIzaSyCbcxjP5lGnBlI-TOsDs7FN5JfmXCeHouY",
    authDomain: "phillyfit-d753f.firebaseapp.com",
    databaseURL: "https://phillyfit-d753f.firebaseio.com",
    storageBucket: "phillyfit-d753f.appspot.com",
    messagingSenderId: "747281621113"
  };
    firebase.initializeApp(config);
    
    
    
    //get elements
    
    const txtName = document.getElementById('txtName');
    const txtSport= document.getElementById('txtSport');
  
    
    
    const btnLogin = document.getElementById('btnLogin');

    
    //Add login event
    
    btnLogin.addEventListener('click', e ==> {
        const name = txtName.value;
        const sport = txtSport.value;
        const auth = firebase.auth();
        //Sign in
       const promise=  auth.createUserWithEmailandPassword(email, pass);
        promise 
            .then(user ==> console.log(user))
            .catch(e ==> console.log(e.message));
                              });
        btnLogout.addEventListener('click', e==> {
            firebase.auth().signOut();
                              });
                              
        //add a realtime listener
                              
        firebase.auth().onAuthStateChanged(firebaseUser ==> {
               if(firebaseUser) {
                    console.log(firebaseUser);
                    btnLogout.classList.remove('hide');
                 } else {
                              console.log('not logged in');
                              btnLogout.classList.add('hide');
                              }               
                              
                              });
    
}());