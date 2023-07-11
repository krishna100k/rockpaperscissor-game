const promptSync = require("prompt-sync");
const prompt = promptSync();


console.log("Choose between Rock, Paper and Scissor")
let playerPlay = prompt("");
let player = playerPlay.toLowerCase();

let options = ["rock", "paper", "scissor"];
let randomNumber = Math.floor(Math.random()*3);
let computerPlay = options[randomNumber];

if(player == "rock" && computerPlay == "paper"){
    console.log("Your Choice: " + player +  "\nComputer Choice: " + computerPlay + "\n Computer Wins")
}else if (player == "paper" && computerPlay == "scissor"){
    console.log("Your Choice: " + player +  "\nComputer Choice: " + computerPlay + "\n Computer Wins") 
}else if(player == "scissor" && computerPlay == "rock"){
    console.log("Your Choice: " + player +  "\nComputer Choice: " + computerPlay + "\n Computer Wins")
}else if(player == "rock" && computerPlay == "scissor"){
    console.log("Your Choice: " + player +  "\nComputer Choice: " + computerPlay + "\n You Win")
}else if(player == "paper" && computerPlay == "rock"){
    console.log("Your Choice: " + player +  "\nComputer Choice: " + computerPlay + "\n You Win")
}else if(player == "scissor" && computerPlay == "paper"){
    console.log("Your Choice: " + player +  "\nComputer Choice: " + computerPlay + "\n You Win")
}else if(player == "scissor" && computerPlay == "scissor"){
    console.log("Your Choice: " + player +  "\nComputer Choice: " + computerPlay + "\n Tie")
}else if(player == "paper" && computerPlay == "paper"){
    console.log("Your Choice: " + player +  "\nComputer Choice: " + computerPlay + "\n Tie")
}else if(player == "rock" && computerPlay == "rock"){
    console.log("Your Choice: " + player +  "\nComputer Choice: " + computerPlay + "\n Tie")
}else{
    console.log("Please Enter a correct option");
}