let ALLCARDS = [];

class Card {
    constructor(id,name,arcana,suit,img,fortune_telling,keywords,meaning_face_up,meaning_face_down,questions_to_ask){
        this.id = id;
        this.name = name;
        this.arcana = arcana;
        this.suit = suit;
        this.img = img;
        this.fortune_telling = fortune_telling;
        this.keywords = keywords;
        this.meaning_face_up = meaning_face_up;
        this.meaning_face_down = meaning_face_down;
        this.questions_to_ask = questions_to_ask;
    }

    static all(){
        return ALLCARDS;
    }

    static drawCard(){
        let cardNumber = Math.floor(Math.random() * 77);
        return Card.all()[cardNumber];
    }
}