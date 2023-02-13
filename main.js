const addingBooks = document.querySelector('#addingBooks');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const addBookBtn = document.querySelector('#addBookBtn');

// section - hold books after refresh or closing the page
if (localStorage.getItem('books') !==null) {
  const getbook = JSON.parse(localStorage.getItem('books'));

  getbook.forEach((item) => {
    addingBooks.innerHTML += `
      <div>
      <h3>${item.bookTitle}</h3>
      <p>${item.bookAuthor}</p>
      <button class='removeBook' name=${item.bookTitle}>Remove</button>
      <hr>
      </div>
    `;
  });
}

function addBook(bookTitle, bookAuthor) {
  this.bookTitle = bookTitle;
  this.bookAuthor = bookAuthor;
}

addBookBtn.addEventListener('click', (e) => {
  e.preventDefault();

  addingBooks.innerHTML += `
  <div>
  <h3>${item.bookTitle}</h3>
  <p>${item.bookAuthor}</p>
  <button class='removeBook' name=${item.bookTitle}>Remove</button>
  <hr>
  </div>
  `;

  const newBooks = new addBook(bookTitle.value, bookAuthor.value);

  if (localStorage.getItem('books') === null) {
    const books = [];
    books.push(newBooks);
    localStorage.setItem('books', JSON.stringify(books));
  } else {
    const books = JSON.parse(localStorage.getItem('books'));
    books.push(newBooks);
    localStorage.setItem('books', JSON.stringify(books));
  }
});