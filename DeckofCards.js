class Card {
    constructor(suit,value,number){
        this.suit = suit;
        this.value = value;
        this.number = number;
    }

    showcard(){
        console.log("Suit:",this.suit,"Value:",this.value,"Number:",this.number)
    }
}

class Deck extends Card{
    constructor(){
        for(let i=0;i<13;i++){
            let Hearths = new Card("Hearth","Ace",i)
        }
    }
}

let deck = new Deck();
deck.showcard()