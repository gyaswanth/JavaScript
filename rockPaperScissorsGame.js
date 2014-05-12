var makeChoice = function () {
    return prompt ("Select one among rock/paper/scissors");
};

var compChoice = function () {
    var rand = Math.random();
    if (rand < 0.34) {
        return "paper";
    } else if (rand <= .67) {
        return "scissors";
    } else {
        return "rock";
    }
};

var compare = function (user, comp) {
    if (user === comp ) {
        console.log("TIE!!");
        return "TIE!!";
    }
    if (user === "rock") {
        if (comp === "scissors"){
            console.log("User: rock, Comp: scissors.  User wins!!");
            return "User wins!!";
        } else {
            console.log("User: rock, Comp: paper.  Comp wins!!");
            return "Comp wins!!";
        }
    }
    if (user === "scissors") {
        if (comp === "paper"){
            console.log("User: scissors, Comp: paper.  User wins!!");
            return "User wins!!";
        } else {
            console.log("User: scissors, Comp: rock.  Comp wins!!");
            return "Comp wins!!";
        }
    }
    if (user === "paper") {
        if (comp === "rock"){
            console.log("User: paper, Comp: rock.  User wins!!");
            return "User wins!!";
        } else {
            console.log("User: paper, Comp: scissors.  Comp wins!!");
            return "Comp wins!!";
        }
    }

};

var uChoice = makeChoice();
var cChoice = compChoice();
console.log("User selected: " + uChoice);
console.log("Comp selected: " + cChoice);
var res = compare(uChoice, cChoice);


