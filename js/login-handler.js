$(document).ready(()=> {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('user logged in');
      $('.user-container').hide();
    } else {
      console.log('not logged in');
      $('.account-container').hide();
    }
  });
});

function login()
{
  var userEmail = document.getElementById('login-email-field').value;
  var userPassword = document.getElementById('login-password-field').value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert('Error: ' + errorMessage);
  });
}

function showSignUp()
{

    console.log('sign up clicked');
    $('.login-container').hide();
    $('.signup-container').show();
}

function signup()
{
  var userEmail = document.getElementById('signup-email-field').value;
  var userPassword = document.getElementById('signup-password-field').value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert('Error: ' + errorMessage);
  });  
}
