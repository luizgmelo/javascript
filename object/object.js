// representations
let obj = new Object();
let obj2 = {};

obj = {
    name: {
        first: 'Luiz',
        last:  'Guilherme'
    },
    address: 'Serra Talhada'
}

class Book {
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
        this.printIsbn = function() {
            console.log(this.isbn)
        };
    }
}


let book = new Book('title', 'pag', 'isbn');
debugger;
console.log(book.title);
debugger;
book.title = 'new title';
console.log(book.title);
debugger;
Book.prototype.printTitle = function() {
    console.log(this.title);
}
book.printTitle();
book.printIsbn();
console.log(book);

