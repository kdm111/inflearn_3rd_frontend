const books = []
const bookList = document.querySelector('#bookList')
const bookTitleInput = document.querySelector('#bookTitle')
const bookAuthorInput = document.querySelector('#bookAuthor')
function submit() {
    if (bookTitleInput.value !== '' &&  bookAuthorInput.value !== '') {
        books.push({title : bookTitleInput.value, author : bookAuthorInput.value})
    }
    bookList.innerHTML = ""
    books.forEach((book, idx) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <button class="btn btn-sm btn-outline-danger delete-btn" onclick="deleteBook(${idx})">X</button>
            </td>
        `;
        bookList.appendChild(row);
    })
}
function deleteBook(idx) {
    books.splice(idx, 1)
    bookList.innerHTML = ""
    books.forEach((book, idx) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <button class="btn btn-sm btn-outline-danger delete-btn" onclick="deleteBook(${idx})">X</button>
            </td>
        `;
        bookList.appendChild(row);
    })
}