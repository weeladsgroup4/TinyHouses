firebase.initializeApp(config);

$(document).ready(() => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            isLoggedIn = true;
        } else {
            console.log('not logged in');
            $('.account-container').hide();
        }
    });

});

function login()
{
    let userEmail = document.getElementById('login-email-field').value;
    let userPassword = document.getElementById('login-password-field').value;

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
    let google_provider = new firebase.auth.GoogleAuthProvider();
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
    let currentUser;
    if (result.user.displayName === null)
    {
        currentUser = result.user.email;
    }
    else {
        currentUser = result.user.displayName;
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
    let userEmail = document.getElementById('signup-email-field').value;
    let userPassword = document.getElementById('signup-password-field').value;

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;

        window.alert('Error: ' + errorMessage + " (Code " + errorCode + ")");
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
