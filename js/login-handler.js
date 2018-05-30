var isLoggedIn;
var loggedInUser;

$(document).ready(() => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      isLoggedIn = true;    
    } else {
      console.log('not logged in');
      $('.account-container').hide();
    }
  }); 

})

function login()
{
  var userEmail = document.getElementById('login-email-field').value;
  var userPassword = document.getElementById('login-password-field').value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).then(function(result){
    showAccount(result);
  }).catch(function(error) {
    if(error) {
      window.alert('Error: somewhere');
    }
    else {
      showAccount(userName);
    }
  });
}

function googleLogin()
{
  google_provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(google_provider).then(function(result){
    isLoggedIn = true;
    showAccount(result);
  }).catch(function(err){
    console.log(err);
    console.log("failed to auth");
  });

}

function switchLoginSignUp()
{
    $('.login-container').toggle();
    $('.signup-container').toggle();
}

function showAccount(result)
{
  if (result.user.displayName == null)
  {
    var currentUser = result.user.email;
  }
  else {
    var currentUser = result.user.displayName;
  }
  console.log(currentUser);
  accountViewSwitcher();
  $('#welcome-text').html('<h4>Hello there ' + currentUser + '!</h4>');
  return currentUser;
}

function accountViewSwitcher()
{
  $('.login-container').toggle();
  $('.account-container').toggle();  
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

function logout()
{
  firebase.auth().signOut().then(function() {
    accountViewSwitcher();
  }).catch(function(error) {
    window.alert(error.message);
  });
}
