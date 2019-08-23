let bookList = document.getElementById("book-list");
let myLibrary = ['Lord OF The Rings', 'The Hobbit', 'Rails Tutorial by Michael'];

function Book() {
  // the constructor...
}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book); // TODO push book item into array
}

function render(arr) {
    arr.forEach(book => {
        bookList.innerHTML += '<li>' + book + '</li>';
    });
}

render(myLibrary);