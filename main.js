const bookList = document.querySelector('#bookList');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const addBookBtn = document.querySelector('#addBookBtn');

let Books = [];

function BookData() {
  bookList.innerHTML = '';
  for (let i = 0; i < Books.length; i += 1) {
    bookList.innerHTML += `
      <div>
      <h3 class='booksTitle'>${Books[i].booksTitle}</h3>
      <p class='booksAuthor'>${Books[i].booksAuthor}</p>
      <button class='removeBook' onclick='remove(${i})'>remove</button>
      <hr>
      </div>
    `;

    bookTitle.value = '';
    bookAuthor.value = '';
  }
}

// eslint-disable-next-line no-unused-vars
function remove(index) {
  Books.splice(index, 1);
  BookData();
  localStorage.setItem('Books', JSON.stringify(Books));
}

// save books in local storage and showing on page even refresh
window.onload = () => {
  if (localStorage.getItem('Books')) {
    Books = JSON.parse(localStorage.getItem('Books'));
  }
  BookData();
};

// add books on page and local storage
addBookBtn.addEventListener('click', () => {
  const bookItems = {
    booksTitle: bookTitle.value,
    booksAuthor: bookAuthor.value,
  };
  Books.push(bookItems);
  BookData();
  localStorage.setItem('Books', JSON.stringify(Books));
});
