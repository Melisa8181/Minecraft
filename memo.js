//////////MEMOTEST
let icons = [];
let selections = []

generateBoard();

function loadIcons() {
    icons = [
        '<img src="https://i.postimg.cc/jdj8JKTS/octopus.png" width="60%">',
        '<img src="https://i.postimg.cc/jjGVM2sc/llama.png" width="40%">',
        '<img src="https://i.postimg.cc/4x2Rhwqr/cat.png" width="90%">',
        '<img src="https://i.postimg.cc/65BkjDNk/parrot.png" width="37%">',
        '<img src="https://i.postimg.cc/qMQ99jJz/cow.png" width="60%">',
        '<img src="https://i.postimg.cc/63sSdP01/pig.png" width="75%">',
        '<img src="https://i.postimg.cc/tJNLRzFv/duck.png" width="50%">',
        '<img src="https://i.postimg.cc/Bb0rGzP1/ocelot.png" width="90%">',
        '<img src="https://i.postimg.cc/7P9s6hpR/sheep.png" width="60%">',
        '<img src="https://i.postimg.cc/Jzn9mZ0K/rabbit.png" width="45%">',
        '<img src="https://i.postimg.cc/qRXm2vgz/wolf.png" width="70%">',
        '<img src="https://i.postimg.cc/D0nMNbRr/spider.png" width="85%">',
    ] 
}

function generateBoard() {
    loadIcons();
    selections = []
    let board = document.getElementById("board");
    let cards = [];
    for (let i = 0; i < 24; i++) {
        cards.push(`
        <div class="card-area" onclick="selectCard(${i})">
            <div class="card" id="card${i}">
                <div class="face back" id="back${i}">
                    ${icons[0]}
                </div>
                <div class="face upper">
                    <i class="far fa-question-circle"></i>
                </div>
            </div>
        </div>
        `)
        if(i % 2 == 1){
            icons.splice(0, 1);
        }
    }
    cards.sort(() => Math.random() - 0.5);
    board.innerHTML = cards.join(" ");
}

function selectCard(i) {
    let card = document.getElementById("card" + i);
    if (card.style.transform != "rotateY(180deg)") {
        card.style.transform = "rotateY(180deg)"
        selections.push(i);
    }
    if (selections.length == 2) {
        deselect(selections);
        selections = []
    }
}

function deselect(selections) {
    setTimeout(() => {
        let back1 = document.getElementById("back" + selections[0]);
        let back2 = document.getElementById("back" + selections[1]);
        if(back1.innerHTML != back2.innerHTML) {
            let card1 = document.getElementById("card" + selections[0]);
            let card2 = document.getElementById("card" + selections[1]);
            card1.style.transform = "rotateY(0deg)";
            card2.style.transform = "rotateY(0deg)";
        } else {
            back1.style.background = "plum";
            back2.style.background = "plum";
        }
    }, 1000);
}


