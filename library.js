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
        titleP.textContent = book.title;
        newCard.appendChild(titleP);

        const authorP = document.createElement('p');
        authorP.classList.add('book-info');
        authorP.textContent = book.author;
        newCard.appendChild(authorP);

        const seriesP = document.createElement('p');
        seriesP.classList.add('book-info');
        seriesP.textContent = book.series;
        newCard.appendChild(seriesP);

        const bookNumberP = document.createElement('p');
        bookNumberP.classList.add('book-info');
        bookNumberP.textContent = book.bookNumber;
        newCard.appendChild(bookNumberP);

        const readP = document.createElement('p');
        readP.classList.add('book-info');
        readP.textContent = book.read;
        newCard.appendChild(readP);
    })}

addBookToLibrary("caleb", "katie", "poppy", 1, "yes");
console.log(myLibrary);

displayMyLibrary(myLibrary);