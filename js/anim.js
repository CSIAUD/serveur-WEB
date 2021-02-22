const styles = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
]
let titre = document.getElementsByTagName('h1')[0]
let classe = titre.className
let interval = setInterval(() => {
        titre.className = styles[getRandomInt(15)]
    },1000)


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}