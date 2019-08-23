function Book(title, author, num_pages, id) {
  this.title = title;
  this.author = author;
  this.num_pages = num_pages;
  this.id = `b${id}`;
}

book1 = new Book("Lord of the Rings", "JR T", 999, 1);
book2 = new Book("The Hobbit", "JR T", 499, 2);
book3 = new Book("Rails Tutorial", "Michael Hartl", 299, 3);

let myLibrary = [book1, book2, book3];

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book); // TODO push book item into array
}

function render(arr) {
    let bookList = document.querySelector("#book-list");
    arr.forEach(book => {
        bookList.innerHTML += `<li>${book.title}</li>`;
        bookList.innerHTML += `<button id=${book.id}>Delete</button>`
        document.querySelector(`#${book.id}`).addEventListener('click', event => {
          //delete something
        });
    });
}

document.querySelector("#new").addEventListener('click', event => {
  document.querySelector("#book_form").style.display = "block";
});




render(myLibrary);
