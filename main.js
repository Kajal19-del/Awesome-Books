const date = new Date();
const dateAndTime = document.querySelector('.date-and-time');
const listPage = document.querySelector('.list');
const addPage = document.querySelector('.add');
const contactPage = document.querySelector('.contact');
const bookList = document.querySelector('#bookList');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const addBookBtn = document.querySelector('#addBookBtn');
const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

dateAndTime.innerHTML = `${date.toDateString()}, ${time}`;

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
    }
  }

  static remove(index) {
    Books.splice(index, 1);
    AwesomeBook.bookData();
    localStorage.setItem('Books', JSON.stringify(Books));
  }
}

// save books in local storage and showing on page even refresh
window.onload = () => {
  if (localStorage.getItem('Books')) {
    Books = JSON.parse(localStorage.getItem('Books'));
  }
  AwesomeBook.bookData();
};
// add books on page and local storage
addBookBtn.addEventListener('click', () => {
  const bookItems = new AwesomeBook(bookTitle.value, bookAuthor.value);
  Books.push(bookItems);
  AwesomeBook.bookData();
  localStorage.setItem('Books', JSON.stringify(Books));
});

listPage.addEventListener('click', () => {
  document.querySelector('.bookLibrary').style.display = 'block';
  document.querySelector('.bookForm').style.display = 'none';
  document.querySelector('.contactInfo').style.display = 'none';
});
addPage.addEventListener('click', () => {
  document.querySelector('.bookLibrary').style.display = 'none';
  document.querySelector('.bookForm').style.display = 'block';
  document.querySelector('.contactInfo').style.display = 'none';
});
contactPage.addEventListener('click', () => {
  document.querySelector('.bookLibrary').style.display = 'none';
  document.querySelector('.bookForm').style.display = 'none';
  document.querySelector('.contactInfo').style.display = 'block';
});