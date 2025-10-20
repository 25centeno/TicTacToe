// Stylesheet [Used for Secret() Function] //
const stylesheet = document.styleSheets[0];

// Buttons //
const Button1 = document.getElementById("GameButton1")
const Button2 = document.getElementById("GameButton2")
const Button3 = document.getElementById("GameButton3")
const Button4 = document.getElementById("GameButton4")
const Button5 = document.getElementById("GameButton5")
const Button6 = document.getElementById("GameButton6")
const Button7 = document.getElementById("GameButton7")
const Button8 = document.getElementById("GameButton8")
const Button9 = document.getElementById("GameButton9")
const ResetButton = document.getElementById("Reset")

// Elements //
const WinnerDisplay = document.getElementById("WinnerDisplay")

// Trackers //
const P1Wins = document.getElementById("P1WinTracker")
const P2Wins = document.getElementById("P2WinTracker")
const Ties = document.getElementById("TieTracker")
const Time = document.getElementById("TimeTracker")
const TotalGames = document.getElementById("TotalGamesTracker")
const TotalMoves = document.getElementById("TotalMovesTracker")

// Values //
var TimeValue = 0
var P1WinsValue = 0
var P2WinsValue = 0
var TiesValue = 0
var TotalGamesValue = 0
var TotalMovesValue = 0
var IsXorO = 0
var TieCounter = 0

// LocalStorage //
TimeValue = localStorage.getItem("Time")
if (isNaN(TimeValue) == NaN || TimeValue == null){localStorage.setItem("Time", 0); TimeValue = 0}
P1WinsValue = localStorage.getItem("P1Wins")
if (isNaN(P1WinsValue) == true || P1WinsValue == null){localStorage.setItem("P1Wins", 0); P1WinsValue = 0}
P2WinsValue = localStorage.getItem("P2Wins")
if (isNaN(P2WinsValue) == true || P2WinsValue == null){localStorage.setItem("P2Wins", 0); P2WinsValue = 0}
TiesValue = localStorage.getItem("Ties")
if (isNaN(TiesValue) == true || TiesValue == null){localStorage.setItem("Ties", 0); TiesValue = 0}
TotalGamesValue = localStorage.getItem("TotalGames")
if (isNaN(TotalGamesValue) == true || TotalGamesValue == null){localStorage.setItem("TotalGames", 0); TotalGamesValue = 0}
TotalMovesValue = localStorage.getItem("TotalMoves")
if (isNaN(TotalMovesValue) == true || TotalMovesValue == null){localStorage.setItem("TotalMoves", 0); TotalMovesValue = 0}

// Main Functions //
function Game(Arg1){

    function Start(){
        Time.innerHTML = TimeValue
        P1Wins.innerHTML = P1WinsValue
        P2Wins.innerHTML = P2WinsValue
        Ties.innerHTML = TiesValue
        TotalGames.innerHTML = TotalGamesValue
        TotalMoves.innerHTML = TotalMovesValue
    
        setInterval(() => {
            TimeValue = parseInt(TimeValue) + 1
            localStorage.setItem("Time", TimeValue)
            Time.innerHTML = TimeValue
        }, 1000);
    }

    function DisableOrEnable(arg2){
        if (arg2 == 1){
            Button1.setAttribute("disabled", true)
            Button2.setAttribute("disabled", true)
            Button3.setAttribute("disabled", true)
            Button4.setAttribute("disabled", true)
            Button5.setAttribute("disabled", true)
            Button6.setAttribute("disabled", true)
            Button7.setAttribute("disabled", true)
            Button8.setAttribute("disabled", true)
            Button9.setAttribute("disabled", true)
        } else if (arg2 == 2){
            Button1.removeAttribute("disabled")
            Button2.removeAttribute("disabled")
            Button3.removeAttribute("disabled")
            Button4.removeAttribute("disabled")
            Button5.removeAttribute("disabled")
            Button6.removeAttribute("disabled")
            Button7.removeAttribute("disabled")
            Button8.removeAttribute("disabled")
            Button9.removeAttribute("disabled")
        }
    }

    function CheckWinner(){
        temp1 = 0
        temp2 = 0

        if (Button1.getAttribute("class") == "GameButton x" && Button2.getAttribute("class") == "GameButton x" && Button3.getAttribute("class") == "GameButton x"){
            DisableOrEnable(1)
            temp1 = 1
            temp2 = 1
        } else if (Button4.getAttribute("class") == "GameButton x" && Button5.getAttribute("class") == "GameButton x" && Button6.getAttribute("class") == "GameButton x"){
            DisableOrEnable(1)
            temp1 = 1
            temp2 = 1
        } else if (Button7.getAttribute("class") == "GameButton x" && Button8.getAttribute("class") == "GameButton x" && Button9.getAttribute("class") == "GameButton x"){
            DisableOrEnable(1)
            temp1 = 1
            temp2 = 1
        } else if (Button1.getAttribute("class") == "GameButton x" && Button4.getAttribute("class") == "GameButton x" && Button7.getAttribute("class") == "GameButton x"){
            DisableOrEnable(1)
            temp1 = 1
            temp2 = 1
        } else if (Button2.getAttribute("class") == "GameButton x" && Button5.getAttribute("class") == "GameButton x" && Button8.getAttribute("class") == "GameButton x"){
            DisableOrEnable(1)
            temp1 = 1
            temp2 = 1
        } else if (Button3.getAttribute("class") == "GameButton x" && Button6.getAttribute("class") == "GameButton x" && Button9.getAttribute("class") == "GameButton x"){
            DisableOrEnable(1)
            temp1 = 1
            temp2 = 1
        } else if (Button1.getAttribute("class") == "GameButton x" && Button5.getAttribute("class") == "GameButton x" && Button9.getAttribute("class") == "GameButton x"){
            DisableOrEnable(1)
            temp1 = 1
            temp2 = 1
        } else if (Button7.getAttribute("class") == "GameButton x" && Button5.getAttribute("class") == "GameButton x" && Button3.getAttribute("class") == "GameButton x"){
            DisableOrEnable(1)
            temp1 = 1
            temp2 = 1

            // If X Wins ^^^ //
        } else if (Button1.getAttribute("class") == "GameButton o" && Button2.getAttribute("class") == "GameButton o" && Button3.getAttribute("class") == "GameButton o"){
            DisableOrEnable(1)
            temp1 = 1
            temp2 = 2
        } else if (Button4.getAttribute("class") == "GameButton o" && Button5.getAttribute("class") == "GameButton o" && Button6.getAttribute("class") == "GameButton o"){
            DisableOrEnable(1)
            temp1 = 1
            temp2 = 2
        } else if (Button7.getAttribute("class") == "GameButton o" && Button8.getAttribute("class") == "GameButton o" && Button9.getAttribute("class") == "GameButton o"){
            DisableOrEnable(1)
            temp1 = 1
            temp2 = 2
        } else if (Button1.getAttribute("class") == "GameButton o" && Button4.getAttribute("class") == "GameButton o" && Button7.getAttribute("class") == "GameButton o"){
            DisableOrEnable(1)
            temp1 = 1
            temp2 = 2
        } else if (Button2.getAttribute("class") == "GameButton o" && Button5.getAttribute("class") == "GameButton o" && Button8.getAttribute("class") == "GameButton o"){
            DisableOrEnable(1)
            temp1 = 1
            temp2 = 2
        } else if (Button3.getAttribute("class") == "GameButton o" && Button6.getAttribute("class") == "GameButton o" && Button9.getAttribute("class") == "GameButton o"){
            DisableOrEnable(1)
            temp1 = 1
            temp2 = 2
        } else if (Button1.getAttribute("class") == "GameButton o" && Button5.getAttribute("class") == "GameButton o" && Button9.getAttribute("class") == "GameButton o"){
            DisableOrEnable(1)
            temp1 = 1
            temp2 = 2
        } else if (Button7.getAttribute("class") == "GameButton o" && Button5.getAttribute("class") == "GameButton o" && Button3.getAttribute("class") == "GameButton o"){
            DisableOrEnable(1)
            temp1 = 1
            temp2 = 2
            // If O Wins ^^^ //
        } else if (TieCounter == 9){
            temp1 = 1
            temp2 = 3
            // Litterally if neither wins lol //
        }

        if (temp1 == 1 && temp2 == 1){
            WinnerDisplay.innerHTML = "Game Ended With <a class='x'>X</a> Winning"
            WinnerDisplay.style.color = "gray"
            ResetButton.style.display = "inline"

            P1WinsValue = parseInt(P1WinsValue) + 1
            localStorage.setItem("P1Wins", P1WinsValue)
            P1Wins.innerHTML = P1WinsValue

            TotalGamesValue = parseInt(TotalGamesValue) + 1
            localStorage.setItem("TotalGames", TotalGamesValue)
            TotalGames.innerHTML = TotalGamesValue
        } else if (temp1 == 1 && temp2 == 2){
            WinnerDisplay.innerHTML = "Game Ended With <a class='o'>O</a> Winning"
            WinnerDisplay.style.color = "gray"
            ResetButton.style.display = "inline"

            P2WinsValue = parseInt(P2WinsValue) + 1
            localStorage.setItem("P2Wins", P2WinsValue)
            P2Wins.innerHTML = P2WinsValue

            TotalGamesValue = parseInt(TotalGamesValue) + 1
            localStorage.setItem("TotalGames", TotalGamesValue)
            TotalGames.innerHTML = TotalGamesValue
        } else if (temp1 == 1 && temp2 == 3){
            WinnerDisplay.innerHTML = "Game Ended In A Tie"
            WinnerDisplay.style.color = "gray"
            ResetButton.style.display = "inline"

            TiesValue = parseInt(TiesValue) + 1
            localStorage.setItem("Ties", TiesValue)
            Ties.innerHTML = TiesValue

            TotalGamesValue = parseInt(TotalGamesValue) + 1
            localStorage.setItem("TotalGames", TotalGamesValue)
            TotalGames.innerHTML = TotalGamesValue
        }
    }

    function SetTile(){
        TieCounter = TieCounter + 1

        if (IsXorO == 0){
            if (Arg1 == 1){
                Button1.innerHTML = "X"
                Button1.setAttribute("class", "GameButton x")
                Button1.setAttribute("disabled", true)
            } else if (Arg1 == 2){
                Button2.innerHTML = "X"
                Button2.setAttribute("class", "GameButton x")
                Button2.setAttribute("disabled", true)
            } else if (Arg1 == 3){
                Button3.innerHTML = "X"
                Button3.setAttribute("class", "GameButton x")
                Button3.setAttribute("disabled", true)
            } else if (Arg1 == 4){
                Button4.innerHTML = "X"
                Button4.setAttribute("class", "GameButton x")
                Button4.setAttribute("disabled", true)
            } else if (Arg1 == 5){
                Button5.innerHTML = "X"
                Button5.setAttribute("class", "GameButton x")
                Button5.setAttribute("disabled", true)
            } else if (Arg1 == 6){
                Button6.innerHTML = "X"
                Button6.setAttribute("class", "GameButton x")
                Button6.setAttribute("disabled", true)
            } else if (Arg1 == 7){
                Button7.innerHTML = "X"
                Button7.setAttribute("class", "GameButton x")
                Button7.setAttribute("disabled", true)
            } else if (Arg1 == 8){
                Button8.innerHTML = "X"
                Button8.setAttribute("class", "GameButton x")
                Button8.setAttribute("disabled", true)
            } else if (Arg1 == 9){
                Button9.innerHTML = "X"
                Button9.setAttribute("class", "GameButton x")
                Button9.setAttribute("disabled", true)
            }
            IsXorO = 1
        } else if (IsXorO == 1){
            if (Arg1 == 1){
                Button1.innerHTML = "O"
                Button1.setAttribute("class", "GameButton o")
                Button1.setAttribute("disabled", true)
            } else if (Arg1 == 2){
                Button2.innerHTML = "O"
                Button2.setAttribute("class", "GameButton o")
                Button2.setAttribute("disabled", true)
            } else if (Arg1 == 3){
                Button3.innerHTML = "O"
                Button3.setAttribute("class", "GameButton o")
                Button3.setAttribute("disabled", true)
            } else if (Arg1 == 4){
                Button4.innerHTML = "O"
                Button4.setAttribute("class", "GameButton o")
                Button4.setAttribute("disabled", true)
            } else if (Arg1 == 5){
                Button5.innerHTML = "O"
                Button5.setAttribute("class", "GameButton o")
                Button5.setAttribute("disabled", true)
            } else if (Arg1 == 6){
                Button6.innerHTML = "O"
                Button6.setAttribute("class", "GameButton o")
                Button6.setAttribute("disabled", true)
            } else if (Arg1 == 7){
                Button7.innerHTML = "O"
                Button7.setAttribute("class", "GameButton o")
                Button7.setAttribute("disabled", true)
            } else if (Arg1 == 8){
                Button8.innerHTML = "O"
                Button8.setAttribute("class", "GameButton o")
                Button8.setAttribute("disabled", true)
            } else if (Arg1 == 9){
                Button9.innerHTML = "O"
                Button9.setAttribute("class", "GameButton o")
                Button9.setAttribute("disabled", true)
            }
            IsXorO = 0
        }
        CheckWinner()
    }

    function ResetStats(){
        TimeValue = 0
        P1WinsValue = 0
        P2WinsValue = 0
        TiesValue = 0
        TotalGamesValue = 0
        TotalMovesValue = 0

        localStorage.setItem("Time", 0)
        localStorage.setItem("P1Wins", 0)
        localStorage.setItem("P2Wins", 0)
        localStorage.setItem("Ties", 0)
        localStorage.setItem("TotalGames", 0)
        localStorage.setItem("TotalMoves", 0)

        Time.innerHTML = 0
        P1Wins.innerHTML = 0
        P2Wins.innerHTML = 0
        Ties.innerHTML = 0
        TotalGames.innerHTML = 0
        TotalMoves.innerHTML = 0
    }

    function Reset(){
        DisableOrEnable(2)

        Button1.innerHTML = ""
        Button1.setAttribute("class", "GameButton")
        Button2.innerHTML = ""
        Button2.setAttribute("class", "GameButton")
        Button3.innerHTML = ""
        Button3.setAttribute("class", "GameButton")
        Button4.innerHTML = ""
        Button4.setAttribute("class", "GameButton")
        Button5.innerHTML = ""
        Button5.setAttribute("class", "GameButton")
        Button6.innerHTML = ""
        Button6.setAttribute("class", "GameButton")
        Button7.innerHTML = ""
        Button7.setAttribute("class", "GameButton")
        Button8.innerHTML = ""
        Button8.setAttribute("class", "GameButton")
        Button9.innerHTML = ""
        Button9.setAttribute("class", "GameButton")

        WinnerDisplay.style.color = "transparent"
        WinnerDisplay.innerHTML = "Funny easter egg if you use inspect ig."
        ResetButton.style.display = "none"
        TieCounter = 0
    }

    if (Arg1 == 0){
        Start()
    } else if (Arg1 == 10){
        Reset()
    } else if (Arg1 > 0 && Arg1 < 10){
        SetTile()
        TotalMovesValue = parseInt(TotalMovesValue) + 1
        localStorage.setItem("TotalMoves", TotalMovesValue)
        TotalMoves.innerHTML = TotalMovesValue        
    } else if (Arg1 == -67){
        ResetStats()
    }
}

function Secret(){
    const GameButtons = Array.from(stylesheet.cssRules).find(rule => {
        return rule.selectorText === '.GameButton'; 
    });

    const GameButtonsX = Array.from(stylesheet.cssRules).find(rule => {
        return rule.selectorText === '.GameButtonDiv .x:disabled'; 
    });

    const GameButtonsO = Array.from(stylesheet.cssRules).find(rule => {
        return rule.selectorText === '.GameButtonDiv .o:disabled'; 
    });

    const JustX = Array.from(stylesheet.cssRules).find(rule => {
        return rule.selectorText === '.x'; 
    });

    const JustO = Array.from(stylesheet.cssRules).find(rule => {
        return rule.selectorText === '.o'; 
    });

    const All = Array.from(stylesheet.cssRules).find(rule => {
        return rule.selectorText === '*'; 
    });

    GameButtons.style.backgroundImage = "url('http://xzaviare.lcctcwebdesign.com/NullLabs/Images/Wolfy/StupidWolfy.png')"
    GameButtons.style.backgroundSize = "100%"

    GameButtonsX.style.backgroundImage = "url('http://xzaviare.lcctcwebdesign.com/NullLabs/Images/Wolfy/StupidWolfyPartyHat.png')"
    GameButtonsX.style.backgroundSize = "100%"

    GameButtonsO.style.backgroundImage = "url('http://xzaviare.lcctcwebdesign.com/NullLabs/Images/Wolfy/Zombiewolfybutgreenbutmoregreen.png')"
    GameButtonsO.style.backgroundSize = "100%"

    JustO.style.color = "Green"
    JustX.style.color = "Orange"

    document.getElementById("Title").innerHTML = "EVIL WOLFY GAME 67"
    document.getElementById("Title").style.animation = "stupidThing 1s linear infinite"

    ResetButton.style.animation = "stupidThing 1s linear infinite"
    document.getElementById("resetStats").style.animation = "stupidThing 1s linear infinite"

    document.body.style.backgroundImage = "url('http://xzaviare.lcctcwebdesign.com/NullLabs/Images/NullLabsBackground.png')"

    All.style.color = "lightgray"
}

// Start //
Game(0)