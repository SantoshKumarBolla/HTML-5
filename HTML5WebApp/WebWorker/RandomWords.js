﻿var words = new Array("apple", "chair", "person", "door", "hat", "cat", "man", "spider");

var randomIndex = 0;

function PickWord() {
    for (; ;)
    {
        var newIndex = Math.floor(Math.random() * (words.length));
        if (newIndex != randomIndex) {
            randomIndex = newIndex;
            break;
        }
    }
    var word = words[randomIndex];

    postMessage(word);//HTML5
    setTimeout("PickWord()", 1500);
}

PickWord();
