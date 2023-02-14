const bookList = document.querySelector('#bookList');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const addBookBtn = document.querySelector('#addBookBtn');

// section - hold books after refresh or closing the page
let Books = [];

function BookData() {
  bookList.innerHTML = '';
  for (let i = 0; i < Books.length; i++) {
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

function remove(index) {
  Books.splice(index, 1);
  BookData();
  localStorage.setItem('Books', JSON.stringify(Books));
};
