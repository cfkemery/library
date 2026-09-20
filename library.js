const myLibrary = [];

function Book(title, author, series, bookNumber, read) {
    this.title = title;
    this.author = author;
    this.series = series;
    this.bookNumber = bookNumber;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, series, bookNumber, read) {
    const book = new Book(title,author, series, bookNumber, read);
    myLibrary.push(book);
}

function displayMyLibrary(array) {
    const display = document.querySelector('.library');
    display.innerHTML = '';
    array.forEach(book => {
        const newCard = document.createElement('div');
        newCard.classList.add('book-card');
        display.appendChild(newCard);

        const titleP = document.createElement('p');
        titleP.classList.add('book-title');
        titleP.textContent = `Title: ${book.title}`;
        newCard.appendChild(titleP);

        const authorP = document.createElement('p');
        authorP.classList.add('book-info');
        authorP.textContent = `Author: ${book.author}`;
        newCard.appendChild(authorP);

        const seriesP = document.createElement('p');
        seriesP.classList.add('book-info');
        seriesP.textContent = `Series: ${book.series}`;
        newCard.appendChild(seriesP);

        const bookNumberP = document.createElement('p');
        bookNumberP.classList.add('book-info');
        bookNumberP.textContent = `Book Number in Series: ${book.bookNumber}`;
        newCard.appendChild(bookNumberP);

        const readP = document.createElement('p');
        readP.classList.add('book-info');
        readP.textContent = `Read: ${book.read}`;
        newCard.appendChild(readP);
    })}

function submitNewBook() {
    const dialog = document.getElementById('new-book');
    const titleForm = document.getElementById('title').value;
    const authorForm = document.getElementById('author').value;
    const seriesForm = document.getElementById('series').value;
    const bookNumberForm = document.getElementById('book-number').value;
    const readForm = document.querySelector('input[name="read"]:checked').value;

    addBookToLibrary(titleForm, authorForm, seriesForm, bookNumberForm, readForm);

    dialog.close();

    displayMyLibrary(myLibrary);
}

const submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', function() {
    event.preventDefault();
    submitNewBook();
});