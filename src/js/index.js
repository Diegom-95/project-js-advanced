// Importiamo lo stile CSS
import '../css/style.css';

let currentPage = 1;
let currentCategory = "";
let allBooks = [];


const bookPopup = document.createElement('div');
bookPopup.id = 'bookPopup';
bookPopup.style.display = 'none';
bookPopup.innerHTML = `
    <div id="bookPopupContent">
        <span class="closePopup">&times;</span>
        <div id="popupDetails"></div>
    </div>
`;
document.body.appendChild(bookPopup);


// Chiudi popup quando clicchi sulla X o fuori dal contenuto
bookPopup.addEventListener('click', (e) => {
    if (e.target.id === 'bookPopup' || e.target.classList.contains('closePopup')) {
        bookPopup.style.display = 'none';
    }
});


document.getElementById('searchBtn').addEventListener('click', function() {
    const category = document.getElementById('category').value.trim().toLowerCase();
    if (category === "") {
        alert("Per favore inserisci una categoria.");
        return;
    }
    currentCategory = category;
    currentPage = 1;
    allBooks = [];
    fetchBooks(category, currentPage);
});


document.getElementById('loadMoreBtn').addEventListener('click', function() {
    currentPage++;
    fetchBooks(currentCategory, currentPage);
});


function fetchBooks(category, page) {
    if (page === 1) {
        document.getElementById('booksList').innerHTML = '';
    }
    const url = `https://openlibrary.org/subjects/${category}.json?page=${page}`;
    axios.get(url).then((response) => {
        const books = response.data.works;
        if (books && books.length > 0) {
            allBooks = [...allBooks, ...books];
            displayBooks(allBooks);
            document.getElementById('loadMoreBtn').style.display = "block";
        } else {
            document.getElementById('booksList').innerHTML = "Nessun libro trovato per questa categoria.";
            document.getElementById('loadMoreBtn').style.display = "none";
        }
    }).catch((error) => console.error("Errore nella richiesta API:", error));
}


function displayBooks(books) {
    const booksList = document.getElementById('booksList');
    const booksToDisplay = books.slice(0, currentPage * 32);
    booksToDisplay.forEach((book) => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        const bookTitle = document.createElement('div');
        bookTitle.textContent = `${book.title} - ${book.authors.map(author => author.name).join(', ')}`;
        bookItem.appendChild(bookTitle);
        if (book.cover_id) {
            const coverImage = document.createElement('img');
            coverImage.src = `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`;
            bookItem.appendChild(coverImage);
        }
        bookItem.addEventListener('click', function() {
            fetchBookDetails(book.key);
        });
        booksList.appendChild(bookItem);
    });
    if (booksToDisplay.length >= allBooks.length) {
        document.getElementById('loadMoreBtn').style.display = "none";
    }
}


function fetchBookDetails(bookKey) {
    const url = `https://openlibrary.org${bookKey}.json`;
    axios.get(url).then((response) => {
        const book = response.data;
        console.log(book); // Continua a mostrare la risposta dell'API


        // Controlla se ci sono autori e ottieni il nome dell'autore tramite la chiave
        let authors = "Autore non disponibile";
        if (book.authors && Array.isArray(book.authors) && book.authors.length > 0) {
            // Estraiamo la chiave dell'autore
            const authorKey = book.authors[0].author.key;
            // Otteniamo i dettagli dell'autore
            axios.get(`https://openlibrary.org${authorKey}.json`).then((authorResponse) => {
                const authorName = authorResponse.data.name;
                authors = authorName ? authorName : "Autore non disponibile";
                displayBookDetails(book, authors);
            }).catch((error) => console.error("Errore nel recupero dei dettagli dell'autore:", error));
        } else {
            displayBookDetails(book, authors);
        }
    }).catch((error) => console.error("Errore nella richiesta dei dettagli del libro:", error));
}


function displayBookDetails(book, authors) {
    let description = book.description;
    if (typeof description === 'object' && description !== null && description.value) {
        description = description.value;
    }
    description = description || "Descrizione non disponibile";


    const details = `
        <h2>${book.title}</h2>
        <p><strong>Autori:</strong> ${authors}</p>
        <p><strong>Descrizione:</strong> ${description}</p>
    `;


    const popupDetails = document.getElementById('popupDetails');
    if (popupDetails) {
        popupDetails.innerHTML = details;
    } else {
        console.error("Elemento 'popupDetails' non trovato.");
    }


    const bookPopup = document.getElementById('bookPopup');
    if (bookPopup) {
        bookPopup.style.display = 'block';
    } else {
        console.error("Elemento 'bookPopup' non trovato.");
    }
}


document.addEventListener('click', function(event) {
    if (event.target.classList.contains('closePopup')) {
        document.getElementById('bookPopup').style.display = 'none';
    }
});





