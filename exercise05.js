//TODO: add functionality for date to be able to take user input
//TODO: add null as option for readdate instead of " "
//TODO: add better comments
//TODO: Need to seriously clean up

var Book = function(Title, Genre, Author, Read, ReadDate){
    this.Title = Title || "Unknown Title";
    this.Genre = Genre || "Unknown Genre";
    this.Author = Author || "Unknown Author";
    this.Read = Read || false;
    if (this.Read === true) {
        this.ReadDate =  Date();
    } else {
        this.ReadDate = null;
    }
};

var book1 = new Book("Gone with the Wind", "Historical Fiction", "Margaret Mitchell", true);
var book2 = new Book("The Great Gatsby", "Fiction", "F. Scott Fitzgerald");
var book3 = new Book("The Grapes of Wrath", "", "John Steinbeck", true);
var book4 = new Book("1984", "Fiction", "George Orwell");
var book5 = new Book("Harry Potter", "", "J.K. Rowling", true);
var book6 = new Book("Python", "CompSci", "Me");

var allBooks = [book1, book2, book3, book4, book5, book6];

var bookLists = function (allBooks) {
    // an array of all of the books
    this.bookShelf = allBooks || [];

    // a count of all of the books that are read
    var booksReadCounter = 0;
    //?? Why do I need this in front of bookShelf to define it?
    for (var i=0; i < this.bookShelf.length; i++){
        if (this.bookShelf[i].Read) {
            booksReadCounter += 1;
        }
    }
    this.booksRead = booksReadCounter;

    // a count of all of the books that are NOT read
    var booksNotReadCounter = 0;
    for (var j=0; j < this.bookShelf.length; j++){
        if (this.bookShelf[j].Read === false) {
            booksNotReadCounter += 1;
        }
    }
    this.booksNotRead = booksNotReadCounter;

    this.currentBook = function(title){
        //Book.current = true || false;
        for (var l=0; l < this.bookShelf.length; l++){
            if (this.bookShelf[l].Title === title) {
                    this.bookShelf[l].current = true;
            }
        }
    };

    //randomly selects the next book
    // TODO: may need to verify that the 'current' book is not being selected
    this.nextBook = function(){
        var unreadBookList = [];
        for (var k=0; k < this.bookShelf.length; k++){
            if (this.bookShelf[k].Read !== true) {
                unreadBookList.push(this.bookShelf[k]);
            }
        }

        console.log(unreadBookList.length);
        var randomBook = Math.floor(Math.random() * unreadBookList.length);
        //for (var i=0; i < this.bookShelf.length; i++){
        console.log(randomBook);
        console.log(this.bookShelf[randomBook]);
        //}
    };

    //TOD0: Right now all the read books will have the same most recent date
    // this makes it difficult to be able to choose what is ACTUALLY the most recent date
    // and it chooses the last item in the list that has been read.
    this.lastBook = function(){
        var soonestDate = this.bookShelf[0].ReadDate;
        var latestBook = this.bookShelf[0];
        for (var k=0; k < this.bookShelf.length; k++){
            if (this.bookShelf[k].ReadDate >= soonestDate) {
                soonestDate = this.bookShelf[k].ReadDate;
                latestBook = this.bookShelf[k];
                //console.log(this.bookShelf[k]);

            }
        }
        console.log(latestBook);
    };

    //adds a book to the books list
    this.addBook = function(title, genre, author, read, readDate, current){
        var newBook = new Book(title, genre, author, read, readDate, current);
        //console.log(newBook);
        this.bookShelf.push(newBook);
        //console.log(this.bookShelf);
    };

    this.finishCurrentBook = function(){
        for (var k=0; k < this.bookShelf.length; k++){
            if (this.bookShelf[k].current === true) {
                this.bookShelf[k].current = false;
                this.bookShelf[k].Read = true;
                this.bookShelf[k].ReadDate = Date();
                console.log(ashleysList.nextBook());
                //console.log(this.bookShelf);
            }
        }
    };

};

// ?? Why do we need to do this??
var ashleysList = new bookLists(allBooks);

//console.log(ashleysList.bookShelf);
//console.log(ashleysList.booksRead);
//console.log(ashleysList.booksNotRead);
//console.log(ashleysList.currentBook("The Great Gatsby"));
//console.log(ashleysList.nextBook());
//console.log(ashleysList.addBook("Ashley", "Awesome", "Ashley", false, null, false));
//console.log(ashleysList.finishCurrentBook());
console.log(ashleysList.lastBook());