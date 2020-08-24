function book(name, author, read = "not read") {

    return {
        name, 
        author,
        read
    };
}

const bookCollectionController = (function() {

    let bookList = [];
    function addBook(book) {
        bookList.push(book);
        libView.render(bookList);
    }

    function createBook(name, author, read) {
        
        let readStatus = _determineStatus(read);
        let repeated = _detectReplicas(name);

        if (repeated) {
            alert("already listed this book")
        }
        else {
            let tempBook = book(name,author,readStatus);
            addBook(tempBook);
        }
    }

    function destroyItem(name) {
        for (let i = 0; i < bookList.length; i++) {
            if (bookList[i].name == name) {
                bookList.splice(i, 1);
                libView.render(bookList);
                break;
            }
        }
    }
    function changeStatus(name) {
        for (let i = 0; i < bookList.length; i++) {
            if (bookList[i].name == name) {
                if (bookList[i].read == "read") {
                    bookList[i].read = "not read"
                }
                else {
                    bookList[i].read = "read"
                }
                libView.render(bookList);
                break;
            }
        }
    }

    function _detectReplicas(name) {
        for (let i = 0; i < bookList.length; i++) {
            if (bookList[i].name == name) {
                return true;
            }
        }
        return false;
    }
    
    function _determineStatus(read) {
        if (read) {
            return "read";
        }
        else {
            return "not read";
        }
    }

    return {
        addBook: addBook,
        createBook: createBook,
        destroyItem: destroyItem,
        changeStatus: changeStatus
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

let bookview = new Vue({
    el: "#app",
    data: {
        books: [
    ]
    }
})

let firstBook = book("Harry Potter","JK Rolling");
let secondBook = book("Foundation","Isaac Asimov");
let thirdBook = book("How to do karate","Steven Seagal");
bookCollectionController.addBook(firstBook);
bookCollectionController.addBook(secondBook);
bookCollectionController.addBook(thirdBook);