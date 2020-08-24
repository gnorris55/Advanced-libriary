function book(name, author, read = false) {

    return {
        name, 
        author,
        read
    };
}

let bookview = new Vue({
    el: "#app",
    data: {
        books: [
        ]
    },
})


const bookCollectionController = (function() {

    let bookList = [];
    function addBook(book) {
        bookList.push(book);
        libView.render(bookList);
    }

    return {
        addBook: addBook,
    };
    
}) ();

const libView = (function() {

    function render(bookList) {
        bookview.books = bookList;
    }

    return {

        render: render
    }

}) ();

let newBook = book("Harry Potler", "JK", true);
let bookTwo = book("The hobler", "smeagle", false);

bookCollectionController.addBook(newBook);
bookCollectionController.addBook(bookTwo);