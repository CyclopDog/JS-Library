function Book(title, author, num_pages, id) {
  this.title = title;
  this.author = author;
  this.num_pages = num_pages;
  this.id = `b${id}`;
  this.status = false;
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
        bookList.innerHTML += `<li id=${book.id}>${book.title}</li>`;
        bookList.innerHTML += `<button id=delete-${book.id}>Delete</button>`
        document.querySelector(`#delete-${book.id}`).addEventListener('click', event => {
        //   let delBook = arr.indexOf(book);
        //   delete arr[delBook];
          let child = document.getElementById(book.id);
          bookList.removeChild(child);
        });
        book.status == false ? bookList.innerHTML +=  `Status: NOT READ` : bookList.innerHTML += "Status: READ"
        bookList.innerHTML += `<button id=read-${book.id}>Read</button>`
        document.querySelector(`#read-${book.id}`).addEventListener('click', read => {
            book.status == false ? book.status = true : book.status = false;
          });
    });
}

document.querySelector("#new").addEventListener('click', event => {
  document.querySelector("#book_form").style.display = "block";
});




render(myLibrary);
