let srcLinks = ["images/dice1.png", "images/dice2.png","images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]


document.querySelectorAll("button")[0].addEventListener("click", function(){
    let randomIndex1 = Math.floor(Math.random() * srcLinks.length)
    let randomIndex2 = Math.floor(Math.random() * srcLinks.length)

    let img1 = document.getElementsByClassName("img1")
    let img2 = document.getElementsByClassName("img2")
    let titleText = document.getElementsByTagName("h1")

    img1[0].src = srcLinks[randomIndex1]
    img2[0].src = srcLinks[randomIndex2]

    if(randomIndex1 > randomIndex2){
        titleText[0].textContent = "🚩Player 1 Wins "
    }else if(randomIndex1 < randomIndex2){
        titleText[0].textContent = "Player 2 Wins🚩"
    }else if(randomIndex1 == randomIndex2){
        titleText[0].textContent = "Draw! "
    }
})