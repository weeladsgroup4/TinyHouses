// Search script variables
let houseData = '';
let priceSlider;// = document.getElementById("priceSlider");
let priceOutput;// = document.getElementById("priceText");
let sizeSlider;// = document.getElementById("distanceSlider");
let sizeOutput;// = document.getElementById("distanceText");
let citySlider;
let citySliderOutput;
let cityOnly, innerCity, outerCity, showOptions, allOptions = false;

// Login script variables
let isLoggedIn;
let loggedInUser;

let config = {
    apiKey: "AIzaSyC3jpBVkEo3hupDE70BpIQC_efZ7hcyDIk",
    authDomain: "login-70071.firebaseapp.com",
    databaseURL: "https://login-70071.firebaseio.com",
    projectId: "login-70071",
    storageBucket: "login-70071.appspot.com",
    messagingSenderId: "852685215526"
};