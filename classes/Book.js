// import the Media class:
const Media = require('./Media.js')
// create your Book class:
class Book extends Media{
    constructor(title, genre, year, author,numPages, rating){
        super(title, genre, year)
        this.author = author;
        this.numPages = numPages;
        this.rating = rating;
    }
    summary(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
    }
    static highestRating(bookArray){
        let highestBook = new Book("","","","","",0);
        for (let book of bookArray){
            if (book.rating > highestBook.rating){
                highestBook = book
            }
        }
        return highestBook


}
}
const book1 = new Book('To Kill a Mockingbird', 1960, 'Fiction', 'Harper Lee', 281, 4.4);
Media.totalMediaCount; // 1
const book2 = new Book('The Bluest Eye', 1970, 'Fiction', 'Toni Morrison', 206, 4.6);
Media.totalMediaCount; // 2
book1.summary()
console.log(Book.highestRating([book1, book2]))
// don't change below
module.exports = Book;
