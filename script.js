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
  myLibrary.push(book);
}

function render(arr) {
    let bookList = document.querySelector("#book-list");
    bookList.innerHTML = "";
    arr.forEach(book => {
        let book_content = "";
        book_content += `<li id=${book.id}>${book.title}`;
        book_content += `<button id=delete-${book.id}>Delete</button>`

        book_content += "<br><br>"
        book.status == false ? book_content +=  `Status: NOT READ` : book_content += "<div>Status: READ"
        book_content += `<button id=read-${book.id}>Toggle Read</button></li>`
        bookList.innerHTML += book_content;
    });

    arr.forEach(book => {
      document.querySelector(`#delete-${book.id}`).addEventListener('click', event => {
        let location = arr.indexOf(book);
        delete arr[location];
        render(arr);
      });
      document.querySelector(`#read-${book.id}`).addEventListener('click', read => {
          book.status == false ? book.status = true : book.status = false;
          render(arr);
        });
    });
}

document.querySelector("#new").addEventListener('click', event => {
  document.querySelector("#book_form").style.display = "block";
});

document.getElementById('book_form').addEventListener("submit",function(e) {
    e.preventDefault(); // before the code
    let t = document.querySelector('#book_form #title').value;
    let a = document.querySelector('#book_form #author').value;
    let p = document.querySelector('#book_form #num_pages').value;
    let i = myLibrary.length + 1;
    new_book = new Book(t, a, p, i);
    addBookToLibrary(new_book);
    clearForm();
    render(myLibrary);
  });

function clearForm(){
  let fields = document.querySelectorAll('#book_form .field');
  fields.forEach(field => field.value = "");
}
render(myLibrary);
