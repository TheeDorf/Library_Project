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
        if (this.books[i].id === id) {
          this.books[i].read = true;
          checkbox.checked = true;
          checkbox.disabled = true;
          break;
        }
      }
    }
  
    addBook(title, author, read) {
      const book = new Book(this.bookCount, title, author, read);
      this.books.push(book);
      const table = document.getElementById("table");
      const row = table.insertRow(1);
      const titleCell = row.insertCell(0);
      const authorCell = row.insertCell(1);
      const readCell = row.insertCell(2);
      titleCell.textContent = book.title;
      authorCell.textContent = book.author;
      readCell.innerHTML = `<input type="checkbox" name="read" onchange="myLibrary.markRead(this, ${book.id})">`;
      this.bookCount++;
    }
  }
  
  const myLibrary = new Library();
  const bookForm = document.getElementById("book-form");
  bookForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const title = document.querySelector("#title-input").value;
    const author = document.querySelector("#author-input").value;
    const read = document.querySelector("#read-checkbox").checked;
    myLibrary.addBook(title, author, read);
  });
  
  