//const bookTitles = ['harryporter','thebookshop','paradise','thelineofbeauty','bigeyes','sparrow','passing','athousandships','dissolution','notalone'];
//console.log(bookTitles);

let container=document.querySelector('.container');

let ul=document.createElement('ul');
ul.classList="bookList";
container.appendChild(ul);
console.log(container);



/*function createBookList(){
    const bookTitles = ['harryporter','thebookshop','paradise','thelineofbeauty','bigeyes','sparrow','passing','athousandships','dissolution','notations'];
    for(let i=0; i<bookTitles.length;i++){
      const booksnames=document.createElement('li');
      booksnames.setAttribute('id',bookTitles[i]);
      ul.appendChild(booksnames)
    }}
createBookList()*/

const booksInfo={
  harryporter: {
    title: "harryporter",
    language: "English",
    author: "J. K. Rowling",
    stars:"★★★☆☆"
  },
   ettNyttLand: {
    title: "Ett nytt land",
    language: "Swedish",
    author: "Theodor Kallifatides",
    stars:"★★★★★"
  },
    thebookshop:
     { title: "thebookshop",
    language: "English",
    author: "Penelope Fitzgerald",
    stars:"★★★★★"

  },
  paradise: {
    title: "paradise",
    language: "English",
    author: "Abd AL Razaq",
    stars:"★☆☆☆☆"
  },
  thelineofbeauty: {
    title: "hollinghurst",
    language: "English",
    author: " Alan Hollinghurst",
    stars:"★★★☆☆"
  },
  bigeyes: {
    title: "thelineofbeauty",
    language: "English",
    author: "Margaret Kean",
    stars:"★☆☆☆☆"
  },
  sparrow: {
    title: "sparrow",
    language: "English",
    author: "L. J. Shen",
    stars:"★★☆☆☆"
  },
  passing: {
    title: "passing",
    language: "English",
    author: "Nill larsen",
    stars:"★★★★★"
  },
  athousandships: {
    title: "athousandships",
    language: "English",
    author: "Natal Highness",
    stars:"★★★★☆"
  },
  dissolution: {
    title: "dissolution",
    language: "English",
    author: "Hansom",
    stars:"★★☆☆☆"
  }
};
const bookCovers = {
  harryporter: "./img/Harry.jpg",
  ettNyttLand: "./img/nyttLand2.jpg",
  thebookshop: "./img/theBookShop.jpg",
  paradise: "./img/paradise.jpg",
  thelineofbeauty: "./img/theLine.jpg",
  bigeyes: "./img/bigEyes.jpg",
  sparrow: "./img/sparrow.jpg",
  passing: "./img/Passing.jpg",
  athousandships: "./img/athousandships.jpg",
  dissolution: "./img/Dissolution.jpg",
  
  
};

function createLi(){
  for(let bookId in booksInfo && bookCovers){
    const book = booksInfo[bookId];
    const bookItem = document.createElement('li');
    bookItem.setAttribute('id', bookId);
    
    const cover = document.createElement('img');
    cover.setAttribute('src', bookCovers[bookId]);
    bookItem.appendChild(cover);

    const title = document.createElement('h2');
    title.textContent = book.title;
    bookItem.appendChild(title);

    const author = document.createElement('p');
    author.textContent = "Author: " + book.author;
    bookItem.appendChild(author);

    const language = document.createElement('p');
    language.textContent = "Language: " + book.language;
    bookItem.appendChild(language);

    const starSpan = document.createElement("h3");
    starSpan.textContent = book.stars;
    bookItem.appendChild(starSpan);


    
    
  
    ul.appendChild(bookItem);
  }
}

createLi();

/*function addImg(){
  for(book in bookCovers){
    let bookCover=document.createElement("img");
    bookCover.setAttribute('src',bookCovers[book]);
   bookItem.appendChild(bookCover);

  }
}
addImg()*/









