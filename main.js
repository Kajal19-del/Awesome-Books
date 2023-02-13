const addingBooks = document.querySelector('#addingBooks');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const addBookBtn = document.querySelector('#addBookBtn');

// section - hold books after refresh or closing the page
if (localStorage.getItem('books') !== null) {
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

function AddBook(bookTitle, bookAuthor) {
  this.bookTitle = bookTitle;
  this.bookAuthor = bookAuthor;
}

addBookBtn.addEventListener('click', (e) => {
  e.preventDefault();

  addingBooks.innerHTML += `
  <div>
  <h3>${bookTitle.value}</h3>
  <p>${bookAuthor.value}</p>
  <button class='removeBook' name=${bookTitle.value}>Remove</button>
  <hr>
  </div>
  `;

  const newBooks = new AddBook(bookTitle.value, bookAuthor.value);

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

// remove button
const remove = document.querySelectorAll('.removeBook');

remove.forEach((item) => {
  item.addEventListener('click', () => {
    item.parentElement.remove();
    const bookname = item.name;

    // remove from local storage
    const getremove = JSON.parse(localStorage.getItem('books'));

    const newArr = getremove.filter((object) => object.bookTitle !== bookname);

    // update localstorage
    localStorage.setItem('books', JSON.stringify(newArr));
  });
});