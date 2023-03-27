console.log("Hello World!\n==========\n");

// PROJECT Section
class Book {
  constructor(id, title, author, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.bookCount = 0;
    this.books = [];
  }

  markRead(checkbox, id) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id) {
        this.books[i].read = true;
        checkbox.checked = true;
        checkbox.disabled = true;
        break;
      }
    }
  }

  addBook(title, author, read) {
      let tit = document.querySelector("#title-input")
      let auth = document.querySelector("#author-input")
      let rea = document.querySelector("#read-input")
      auth.value;
      tit.value;
      rea.value;
    const book = new Book(this.bookCount, title, author, read);
    this.books.push(book);
    const table = document.getElementById("table");
    const row = table.insertRow(1);
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const readCell = row.insertCell(2);
    titleCell.innerHTML = book.title;
    authorCell.innerHTML = book.author;

    this.bookCount++;
  }
}

const myLibrary = new Library();
const addBooksBtn = document.getElementById("addBooksBtn");
const bookForm = document.getElementById("book-form");
bookForm.addEventListener("submit", (ev) => {
  console.log("test");
  ev.preventDefault();
  myLibrary.addBook(title,author,read);
});
