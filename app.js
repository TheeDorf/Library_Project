console.log("Hello World!\n==========\n");

// PROJECT Section
class Book {
    constructor(id, title, author, read){
        this.id = id;
        this.title = title;
        this.author= author;
        this.read = read;
    }
}

class Library {
    constructor(){
        this.bookCount = 0;
        this.books = [];
    }

    markRead (checkbox, id){
        for (let i=o; i < this.books.length; i++){
            if (this.books[i].id){
                this.books[i].read = true;
                checkbox.checked = true;
                checkbox.disabled= true;
                break;
            }
        }
    }
}



