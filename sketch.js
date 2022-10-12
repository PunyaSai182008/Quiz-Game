var wrongAnswer1 = true;
var wrongAnswer2 = true;
var wrongAnswer3 = true;
var rightAnswer = true;
var score = 0;
var totalscore=5;

function setup() {
    createCanvas(1360, 662);
    background("dodgerblue");
    push();
    textSize(80);
    textStyle(BOLD);
    fill("white");
    text("Test Your General Knowledge", 100, 150,);
    pop();
    textSize(30)
    fill("white")
    text("Enter Your Name: ", 400, 350)
    login = createInput("");
    login.position(650, 330)

    button = createButton("Submit")
    button.style("color", "dodgerblue")
    button.style("border-color", "white")
    button.style("background-color", "white",);
    button.style("font-size", "25px");
    button.position(558, 450);

    button.mousePressed(() => {
        name1 = login.value();
        if (name1 == "") {
            alert("Name Can't be Blank")
            return false;
        }
        else {
            button.mouseClicked(greetingpage);
        }
    })
}

function greetingpage() {
    background("aquamarine");
    login.hide();
    button.hide();
    user = login.value();
    greeting = createElement("h1");
    greeting.html("Welcome To Quiz " + user + "!");
    greeting.position(440, 112);
    greeting.style("color", "dodgerblue")
    greeting.style("font-size", "50px")
    startQuiz = createButton("Start Quiz")
    startQuiz.style("background-color", "orange")
    startQuiz.style("font-size", "25px");
    startQuiz.position(620, 313);
    startQuiz.mouseClicked(question1)
}

function question1() {
    background("lightblue");
    greeting.hide();
    startQuiz.hide();
    q1 = createElement("h1")
    q1.html("Q1. Who is the President of U.S.A?")
    q1.style("background-color", "white");
    q1.position(401, 143);

    q1a = createButton("Donald Trump");
    q1a.style("background-color", "white");
    q1a.style("color", "black");
    q1a.style("font-size", "24px");
    q1a.position(402, 250);
    q1a.mouseClicked(q1Option1Ans)




    q1b = createButton("Kamala Harris");
    q1b.style("background-color", "white");
    q1b.style("color", "black");
    q1b.style("font-size", "24px");
    q1b.position(402, 300);
    q1b.mouseClicked(q1Option2Ans);



    q1c = createButton("Joe Biden");
    q1c.style("background-color", "white");
    q1c.style("color", "black");
    q1c.style("font-size", "24px");
    q1c.position(402, 350);
    q1c.mouseClicked(q1Option3Ans)


    q1d = createButton("Mike Pence");
    q1d.style("background-color", "white");
    q1d.style("color", "black");
    q1d.style("font-size", "24px");
    q1d.position(402, 400);
    q1d.mouseClicked(q1Option4Ans);

    nextbutton = createButton("Next");
    nextbutton.style("background-color", "white");
    nextbutton.style("color", "dodgerblue");
    nextbutton.style("font-size", "24px");
    nextbutton.position(402, 500);
    nextbutton.mousePressed(question2);

}

function q1Option1Ans() {
    q1a.style("background-color", "red")
    q1c.style("background-color", "green")
    q1a.attribute('disabled', '');
    q1b.attribute('disabled', '');
    q1c.attribute('disabled', '');
    q1d.attribute('disabled', '');

    wrongAnswer1 = createElement("h1");
    wrongAnswer1.html("Wrong Answer");
    wrongAnswer1.style("color", "red")
    wrongAnswer1.position(402, 550);
}

function q1Option2Ans() {
    q1b.style("background-color", "red")
    q1c.style("background-color", "green")
    q1a.attribute('disabled', '');
    q1b.attribute('disabled', '');
    q1c.attribute('disabled', '');
    q1d.attribute('disabled', '');
    wrongAnswer2 = createElement("h1");
    wrongAnswer2.html("Wrong Answer");
    wrongAnswer2.style("color", "red")
    wrongAnswer2.position(402, 550);

}

function q1Option3Ans() {
    q1c.style("background-color", "green")
    q1a.attribute('disabled', '');
    q1b.attribute('disabled', '');
    q1c.attribute('disabled', '');
    q1d.attribute('disabled', '');

    rightAnswer = createElement("h1");
    rightAnswer.html("Right Answer");
    rightAnswer.style("color", "green")
    rightAnswer.position(402, 550);
    score += 1


}

function q1Option4Ans() {
    q1d.style("background-color", "red")
    q1c.style("background-color", "green")
    q1a.attribute('disabled', '');
    q1b.attribute('disabled', '');
    q1c.attribute('disabled', '');
    q1d.attribute('disabled', '');
    wrongAnswer3 = createElement("h1");
    wrongAnswer3.html("Wrong Answer");
    wrongAnswer3.style("color", "red")
    wrongAnswer3.position(402, 550);
}


function question2() {
    background("lightblue");
    q1.hide();
    q1a.hide();
    q1b.hide();
    q1c.hide();
    q1d.hide();
    nextbutton.hide();

    if (wrongAnswer1.show) {
        wrongAnswer1.hide();
    }
    if (wrongAnswer2.show) {
        wrongAnswer2.hide();
    }
    if (wrongAnswer3.show) {
        wrongAnswer3.hide();
    }
    if (rightAnswer.show) {
        rightAnswer.hide();
    }

    q2 = createElement("h1")
    q2.html("Q2. Who is regarded as “Maker of Modern India”?")
    q2.style("background-color", "white");
    q2.position(401, 143);

    q2a = createButton("M. G. Ranade");
    q2a.style("background-color", "white");
    q2a.style("color", "black");
    q2a.style("font-size", "24px");
    q2a.position(402, 250);
    q2a.mouseClicked(q2Option1Ans)



    q2b = createButton("Salman Khan	");
    q2b.style("background-color", "white");
    q2b.style("color", "black");
    q2b.style("font-size", "24px");
    q2b.position(402, 300);
    q2b.mouseClicked(q2Option2Ans);



    q2c = createButton("Mahatma Gandhi");
    q2c.style("background-color", "white");
    q2c.style("color", "black");
    q2c.style("font-size", "24px");
    q2c.position(402, 350);
    q2c.mouseClicked(q2Option3Ans)



    q2d = createButton("Ram Mohan Roy");
    q2d.style("background-color", "white");
    q2d.style("color", "black");
    q2d.style("font-size", "24px");
    q2d.position(402, 400);
    q2d.mouseClicked(q2Option4Ans);

    nextbutton = createButton("Next");
    nextbutton.style("background-color", "white");
    nextbutton.style("color", "dodgerblue");
    nextbutton.style("font-size", "24px");
    nextbutton.position(402, 500);
    nextbutton.mousePressed(question3);

}

function q2Option1Ans() {
    q2a.style("background-color", "red")
    q2d.style("background-color", "green")
    q2a.attribute('disabled', '');
    q2b.attribute('disabled', '');
    q2c.attribute('disabled', '');
    q2d.attribute('disabled', '');

    wrongAnswer1 = createElement("h1");
    wrongAnswer1.html("Wrong Answer");
    wrongAnswer1.style("color", "red")
    wrongAnswer1.position(402, 550);
}

function q2Option2Ans() {
    q2b.style("background-color", "red")
    q2d.style("background-color", "green")
    q2a.attribute('disabled', '');
    q2b.attribute('disabled', '');
    q2c.attribute('disabled', '');
    q2d.attribute('disabled', '');
    wrongAnswer2 = createElement("h1");
    wrongAnswer2.html("Wrong Answer");
    wrongAnswer2.style("color", "red")
    wrongAnswer2.position(402, 550);

}

function q2Option3Ans() {
    q2c.style("background-color", "red")
    q2d.style("background-color", "green")
    q2a.attribute('disabled', '');
    q2b.attribute('disabled', '');
    q2c.attribute('disabled', '');
    q2d.attribute('disabled', '');

    wrongAnswer3 = createElement("h1");
    wrongAnswer3.html("Wrong Answer");
    wrongAnswer3.style("color", "red")
    wrongAnswer3.position(402, 550);




}

function q2Option4Ans() {
    q2d.style("background-color", "green")
    q2a.attribute('disabled', '');
    q2b.attribute('disabled', '');
    q2c.attribute('disabled', '');
    q2d.attribute('disabled', '');

    rightAnswer = createElement("h1");
    rightAnswer.html("Right Answer");
    rightAnswer.style("color", "green")
    rightAnswer.position(402, 550);
    score += 1
}


function question3() {
    background("lightblue");
    q2.hide();
    q2a.hide();
    q2b.hide();
    q2c.hide();
    q2d.hide();
    nextbutton.hide();

    if (wrongAnswer1.show) {
        wrongAnswer1.hide();
    }
    if (wrongAnswer2.show) {
        wrongAnswer2.hide();
    }
    if (wrongAnswer3.show) {
        wrongAnswer3.hide();
    }
    if (rightAnswer.show) {
        rightAnswer.hide();
    }

    q3 = createElement("h1")
    q3.html("Q3.  For which of the following disciplines is Nobel Prize awarded?")
    q3.style("background-color", "white");
    q3.position(401, 143);

    q3a = createButton("Physics and Chemistry");
    q3a.style("background-color", "white");
    q3a.style("color", "black");
    q3a.style("font-size", "24px");
    q3a.position(402, 250);
    q3a.mouseClicked(q3Option1Ans)



    q3b = createButton("Physiology or Medicine");
    q3b.style("background-color", "white");
    q3b.style("color", "black");
    q3b.style("font-size", "24px");
    q3b.position(402, 300);
    q3b.mouseClicked(q3Option2Ans);



    q3c = createButton("Literature, Peace and Economics");
    q3c.style("background-color", "white");
    q3c.style("color", "black");
    q3c.style("font-size", "24px");
    q3c.position(402, 350);
    q3c.mouseClicked(q3Option3Ans)



    q3d = createButton("All of the above");
    q3d.style("background-color", "white");
    q3d.style("color", "black");
    q3d.style("font-size", "24px");
    q3d.position(402, 400);
    q3d.mouseClicked(q3Option4Ans);

    nextbutton = createButton("Next");
    nextbutton.style("background-color", "white");
    nextbutton.style("color", "dodgerblue");
    nextbutton.style("font-size", "24px");
    nextbutton.position(402, 500);
    nextbutton.mousePressed(question4);

}

function q3Option1Ans() {
    q3a.style("background-color", "red")
    q3d.style("background-color", "green")
    q3a.attribute('disabled', '');
    q3b.attribute('disabled', '');
    q3c.attribute('disabled', '');
    q3d.attribute('disabled', '');

    wrongAnswer1 = createElement("h1");
    wrongAnswer1.html("Wrong Answer");
    wrongAnswer1.style("color", "red")
    wrongAnswer1.position(402, 550);
}

function q3Option2Ans() {
    q3b.style("background-color", "red")
    q3d.style("background-color", "green")
    q3a.attribute('disabled', '');
    q3b.attribute('disabled', '');
    q3c.attribute('disabled', '');
    q3d.attribute('disabled', '');
    wrongAnswer2 = createElement("h1");
    wrongAnswer2.html("Wrong Answer");
    wrongAnswer2.style("color", "red")
    wrongAnswer2.position(402, 550);

}

function q3Option3Ans() {
    q3c.style("background-color", "red")
    q3d.style("background-color", "green")
    q3a.attribute('disabled', '');
    q3b.attribute('disabled', '');
    q3c.attribute('disabled', '');
    q3d.attribute('disabled', '');

    wrongAnswer3 = createElement("h1");
    wrongAnswer3.html("Wrong Answer");
    wrongAnswer3.style("color", "red")
    wrongAnswer3.position(402, 550);




}

function q3Option4Ans() {
    q3d.style("background-color", "green")
    q3a.attribute('disabled', '');
    q3b.attribute('disabled', '');
    q3c.attribute('disabled', '');
    q3d.attribute('disabled', '');

    rightAnswer = createElement("h1");
    rightAnswer.html("Right Answer");
    rightAnswer.style("color", "green")
    rightAnswer.position(402, 550);
    score += 1
}


function question4() {
    background("lightblue");
    q3.hide();
    q3a.hide();
    q3b.hide();
    q3c.hide();
    q3d.hide();
    nextbutton.hide();

    if (wrongAnswer1.show) {
        wrongAnswer1.hide();
    }
    if (wrongAnswer2.show) {
        wrongAnswer2.hide();
    }
    if (wrongAnswer3.show) {
        wrongAnswer3.hide();
    }
    if (rightAnswer.show) {
        rightAnswer.hide();
    }

    q4 = createElement("h1")
    q4.html("Q4. India has largest deposits of ____ in the world.")
    q4.style("background-color", "white");
    q4.position(401, 143);

    q4a = createButton("Gold");
    q4a.style("background-color", "white");
    q4a.style("color", "black");
    q4a.style("font-size", "24px");
    q4a.position(402, 250);
    q4a.mouseClicked(q4Option1Ans)



    q4b = createButton("Copper");
    q4b.style("background-color", "white");
    q4b.style("color", "black");
    q4b.style("font-size", "24px");
    q4b.position(402, 300);
    q4b.mouseClicked(q4Option2Ans);



    q4c = createButton("Mica");
    q4c.style("background-color", "white");
    q4c.style("color", "black");
    q4c.style("font-size", "24px");
    q4c.position(402, 350);
    q4c.mouseClicked(q4Option3Ans)



    q4d = createButton("None of the above");
    q4d.style("background-color", "white");
    q4d.style("color", "black");
    q4d.style("font-size", "24px");
    q4d.position(402, 400);
    q4d.mouseClicked(q4Option4Ans);

    nextbutton = createButton("Next");
    nextbutton.style("background-color", "white");
    nextbutton.style("color", "dodgerblue");
    nextbutton.style("font-size", "24px");
    nextbutton.position(402, 500);
    nextbutton.mousePressed(question5);

}

function q4Option1Ans() {
    q4a.style("background-color", "red")
    q4c.style("background-color", "green")
    q4a.attribute('disabled', '');
    q4b.attribute('disabled', '');
    q4c.attribute('disabled', '');
    q4d.attribute('disabled', '');

    wrongAnswer1 = createElement("h1");
    wrongAnswer1.html("Wrong Answer");
    wrongAnswer1.style("color", "red")
    wrongAnswer1.position(402, 550);
}

function q4Option2Ans() {
    q4b.style("background-color", "red")
    q4c.style("background-color", "green")
    q4a.attribute('disabled', '');
    q4b.attribute('disabled', '');
    q4c.attribute('disabled', '');
    q4d.attribute('disabled', '');

    wrongAnswer2 = createElement("h1");
    wrongAnswer2.html("Wrong Answer");
    wrongAnswer2.style("color", "red")
    wrongAnswer2.position(402, 550);

}

function q4Option3Ans() {
    q4c.style("background-color", "green")
    q4a.attribute('disabled', '');
    q4b.attribute('disabled', '');
    q4c.attribute('disabled', '');
    q4d.attribute('disabled', '');

    rightAnswer = createElement("h1");
    rightAnswer.html("Right Answer");
    rightAnswer.style("color", "green")
    rightAnswer.position(402, 550);
    score += 1

}

function q4Option4Ans() {
    q4d.style("background-color", "red")
    q4c.style("background-color", "green")
    q4a.attribute('disabled', '');
    q4b.attribute('disabled', '');
    q4c.attribute('disabled', '');
    q4d.attribute('disabled', '');

    wrongAnswer3 = createElement("h1");
    wrongAnswer3.html("Wrong Answer");
    wrongAnswer3.style("color", "red")
    wrongAnswer3.position(402, 550);


}


function question5() {
    background("lightblue");
    q4.hide();
    q4a.hide();
    q4b.hide();
    q4c.hide();
    q4d.hide();
    nextbutton.hide();

    if (wrongAnswer1.show) {
        wrongAnswer1.hide();
    }
    if (wrongAnswer2.show) {
        wrongAnswer2.hide();
    }
    if (wrongAnswer3.show) {
        wrongAnswer3.hide();
    }
    if (rightAnswer.show) {
        rightAnswer.hide();
    }

    q5 = createElement("h1")
    q5.html("Q5. What was the first commercially successful video game?")
    q5.style("background-color", "white");
    q5.position(401, 143);

    q5a = createButton("Pong");
    q5a.style("background-color", "white");
    q5a.style("color", "black");
    q5a.style("font-size", "24px");
    q5a.position(402, 250);
    q5a.mouseClicked(q5Option1Ans)



    q5b = createButton("Super Mario Bros");
    q5b.style("background-color", "white");
    q5b.style("color", "black");
    q5b.style("font-size", "24px");
    q5b.position(402, 300);
    q5b.mouseClicked(q5Option2Ans);



    q5c = createButton("God Of War");
    q5c.style("background-color", "white");
    q5c.style("color", "black");
    q5c.style("font-size", "24px");
    q5c.position(402, 350);
    q5c.mouseClicked(q5Option3Ans)



    q5d = createButton("Minecraft");
    q5d.style("background-color", "white");
    q5d.style("color", "black");
    q5d.style("font-size", "24px");
    q5d.position(402, 400);
    q5d.mouseClicked(q5Option4Ans);

    nextbutton = createButton("Next");
    nextbutton.style("background-color", "white");
    nextbutton.style("color", "dodgerblue");
    nextbutton.style("font-size", "24px");
    nextbutton.position(402, 500);
    nextbutton.mousePressed(lastPage);

}

function q5Option1Ans() {
    q5a.style("background-color", "green")
    q5a.attribute('disabled', '');
    q5b.attribute('disabled', '');
    q5c.attribute('disabled', '');
    q5d.attribute('disabled', '');

    rightAnswer = createElement("h1");
    rightAnswer.html("Right Answer");
    rightAnswer.style("color", "green")
    rightAnswer.position(402, 550);
    score += 1


   
}

function q5Option2Ans() {
    q5b.style("background-color", "red")
    q5a.style("background-color", "green")
    q5a.attribute('disabled', '');
    q5b.attribute('disabled', '');
    q5c.attribute('disabled', '');
    q5d.attribute('disabled', '');

    wrongAnswer2 = createElement("h1");
    wrongAnswer2.html("Wrong Answer");
    wrongAnswer2.style("color", "red")
    wrongAnswer2.position(402, 550);

}

function q5Option3Ans() {
    q5c.style("background-color", "red")
    q5a.style("background-color", "green")
    q5a.attribute('disabled', '');
    q5b.attribute('disabled', '');
    q5c.attribute('disabled', '');
    q5d.attribute('disabled', '');

    
    wrongAnswer1 = createElement("h1");
    wrongAnswer1.html("Wrong Answer");
    wrongAnswer1.style("color", "red")
    wrongAnswer1.position(402, 550);
}

function q5Option4Ans() {
    q5d.style("background-color", "red")
    q5a.style("background-color", "green")
    q5a.attribute('disabled', '');
    q5b.attribute('disabled', '');
    q5c.attribute('disabled', '');
    q5d.attribute('disabled', '');

    wrongAnswer3 = createElement("h1");
    wrongAnswer3.html("Wrong Answer");
    wrongAnswer3.style("color", "red")
    wrongAnswer3.position(402, 550);


}








function lastPage() {
    background("dodgerblue");
    q5.hide();
    q5a.hide();
    q5b.hide();
    q5c.hide();
    q5d.hide();
    nextbutton.hide();

    if (wrongAnswer1.show) {
        wrongAnswer1.hide();
    }
    if (wrongAnswer2.show) {
        wrongAnswer2.hide();
    }
    if (wrongAnswer3.show) {
        wrongAnswer3.hide();
    }
    if (rightAnswer.show) {
        rightAnswer.hide();
    }

    fill("white");
    text("Results: " + user +" You Scored "  + score, 500, 331);

    replay = createButton("Replay")
    replay.style
}










