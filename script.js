var nickname = prompt('Please enter your name:');
var height = prompt('Please enter your height in inches:');
var weight = prompt('Please enter your weight in kg:');

height = height/12;
weight = weight* 2.205;
height = Math.round(2.6);
weight = Math.round(2.6);

var confirmed = confirm("Do you agree to share your personal information with our site?");

if(confirmed==true){
    console.log("Name: " + nickname + "\nHeight: " + height + "''" + "\nWeight: " + weight + " lbs");
}
else{
    console.log("User does not wish to share his/her information.");
}

