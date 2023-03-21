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

addBook(title,author,read);{
    const book = new Book(this.bookCount, title,author,read);
    this.books.push(book);
    const table = document.getElementById('booktable');
    const row = table.insertRow(-1);
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const readCell = row.insertCell(2);
    titleCell.innerHTML = book.title;
    authorCell.innerHTML = book.author;

    
    this.bookCount++;
  }


const myLibrary = new Library();
const addBooksBtn = document.getElementById("addBooksBtn");
addBookBtn.addEventListener('click', () => library.addBook());
