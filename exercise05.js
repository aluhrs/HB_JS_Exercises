var Book = function(Title, Genre, Author, Read, ReadDate){
    this.Title = Title || "Unknown Title";
    this.Genre = Genre || "Unknown Genre";
    this.Author = Author || "Unknown Author";
    this.Read = true || false;
    this.ReadDate =  " " || Date();
};

var newBook = new Book("", "Historical Fiction", "Margaret Mitchell", true, " ");
console.log(newBook);



var BookLists = function (argument) {
    this.booksRead = [];
    this.bookShelf = [];
};