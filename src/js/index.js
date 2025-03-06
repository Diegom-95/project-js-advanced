import '../css/style.css';

let currentPage = 1;
let currentCategory = "";
let allBooks = [];

// Popup creation
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


// Closing Popup
bookPopup.addEventListener('click', (e) => {
    if (e.target.id === 'bookPopup' || e.target.classList.contains('closePopup')) {
        bookPopup.style.display = 'none';
    }
});


// Search functionality
document.getElementById('searchBtn').addEventListener('click', function() {
    const category = document.getElementById('category').value.trim().toLowerCase();
    if (category === "") {
        alert("Please enter a category.");
        return;
    }
    currentCategory = category;
    currentPage = 1;
    allBooks = [];
    fetchBooks(category, currentPage);
});

// Loading multiple books
document.getElementById('loadMoreBtn').addEventListener('click', function() {
    currentPage++;
    fetchBooks(currentCategory, currentPage);
});


// API request
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
            document.getElementById('booksList').innerHTML = "No books found for this category.";
            document.getElementById('loadMoreBtn').style.display = "none";
        }
    }).catch((error) => console.error("API request error:", error));
}

// Viewing books
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
        console.log(book); 
        
        let authors = "Author not available";
        if (book.authors && Array.isArray(book.authors) && book.authors.length > 0) {
            const authorKey = book.authors[0].author.key; 
            axios.get(`https://openlibrary.org${authorKey}.json`).then((authorResponse) => {
                const authorName = authorResponse.data.name;
                authors = authorName ? authorName : "Author not available";
                displayBookDetails(book, authors);
            }).catch((error) => console.error("Error retrieving author details:", error));
        } else {
            displayBookDetails(book, authors);
        }
    }).catch((error) => console.error("Error requesting book details:", error));
}


function displayBookDetails(book, authors) {
    let description = book.description;
    if (typeof description === 'object' && description !== null && description.value) {
        description = description.value;
    }
    description = description || "Description not available";


    const details = `
        <h2>${book.title}</h2>
        <p><strong>Authors:</strong> ${authors}</p>
        <p><strong>Description:</strong> ${description}</p>
    `;


    const popupDetails = document.getElementById('popupDetails');
    if (popupDetails) {
        popupDetails.innerHTML = details;
    } else {
        console.error("Element 'popupDetails' not found.");
    }


    const bookPopup = document.getElementById('bookPopup');
    if (bookPopup) {
        bookPopup.style.display = 'block';
    } else {
        console.error("Element 'popupDetails' not found.");
    }
}


document.addEventListener('click', function(event) {
    if (event.target.classList.contains('closePopup')) {
        document.getElementById('bookPopup').style.display = 'none';
    }
});





