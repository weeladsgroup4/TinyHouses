$(document).ready(() => {
   firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

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
    /*
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert('Error: ' + errorMessage);
    */
  });
}

function googleLogin()
{
  google_provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(google_provider).then(function(result){
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
    var name = result.user.email;
  }
  else {
    var name = result.user.displayName;
  }

  console.log(result);
  $('#welcome-text').html('<h1>Hello there ' + name + '!</h1>');
  $('.login-container').hide();
  $('.account-container').show();
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
    window.alert('Log out successfull');
  }).catch(function(error) {
    window.alert(error.message);
  });
}
