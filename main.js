
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let authorPlace = document.getElementById("authorPlace");
let quotePlace = document.getElementById("quotePlace");

let quoteIndex = 0;

//Next Button
next.onclick = function(){
    if(quoteIndex == (quotes.length-1)){
        quoteIndex = 0;
    }else{
        quoteIndex++;
    }

    let Author = quotes[quoteIndex].Author;
    let quote = quotes[quoteIndex].quote;

    authorPlace.innerHTML = " ~ "+Author;
    quotePlace.innerHTML = quote;
    
};

//Prev Button
prev.onclick = function(){
    if(quoteIndex == 0){
        quoteIndex = (quotes.length-1);
    }else{
        quoteIndex--;
    }

    let Author = quotes[quoteIndex].Author;
    let quote = quotes[quoteIndex].quote;

    authorPlace.innerHTML = " ~ "+Author;
    quotePlace.innerHTML = quote;
};




// Quotes Object Array 
var quotes = [
    {
        'Author':"Umar Bin Al Khattab",
        'quote' :'“There is no relationship between Allah and anyone except through obedience to Him."'

    },
    {
        'Author':"Hasan Al Basri",
        'quote' :'“Sell this life for the next and you win both of them. Sell the next life for this and you lose both of them.”'
    },
    {
        'Author':"Umar Bin Al Khattab",
        'quote' : '“We were the most humiliated people on earth & Allah gave us honour through Islam.”'
    },
    {
        'Author':"Umar Bin Al Khattab",
        'quote' : '"Patience is the healthiest ingredient of our life."'
    },
    {
        'Author':"Imam Ibn al-Qayyim",
        'quote' : '"The perfection of Tawheed is found when there remains nothing in the heart except Allaah."'
    },
    {
        'Author':"Al-Hasan al-Basree",
        'quote' :'"The best attribute a believer can have is forgiveness."'
    },
    {
        'Author':"Ibn Qayyim al-Jawziyyah",
        'quote' : '"Imaan is of two halves; half is patience (Sabr) and half is being thankful (Shukr)." '
    },
    {
        'Author':"Maulana Jalaluddin Rumi",
        'quote' : '"Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself."'
    },
    {
        'Author':"Ibn Al-Qayyim",
        'quote' :'"A man is the one who fears the death of his heart, not his body."'
    },
    {
        'Author':"Hazrat Ali ibn Abu Talib (R.A.)",
        'quote' :'"The tongue is like a lion, if you let it loose, it will wound someone." '
    },
    {
        'Author':"Ibn Al-Qayyim",
        'quote' :'"Religion consists entirely of good character. Whoever surpasses you in good character surpasses you in religion."'
    }
];
