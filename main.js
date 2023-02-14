const bookList = document.querySelector('#bookList');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const addBookBtn = document.querySelector('#addBookBtn');

let Books = [];

class AwesomeBook {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static bookData() {
    bookList.innerHTML = '';
    for (let i = 0; i < Books.length; i += 1) {
      bookList.innerHTML += `
        <div class='library'>
          <p class='Title'>'${Books[i].title}' by  ${Books[i].author}</p>
          <button class='removeBook' onclick='AwesomeBook.remove(${i})'>remove</button>
        </div>
      `;

      bookTitle.value = '';
      bookAuthor.value = '';
      bookTitle.focus();
    }
  }

  static remove(index) {
    Books.splice(index, 1);
    AwesomeBook.bookData();
    localStorage.setItem('Books', JSON.stringify(Books));
  }
}
