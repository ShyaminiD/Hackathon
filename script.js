async function getBooks(){
    const data = await 
    fetch("https://anapioficeandfire.com/api/books/?page=1&pageSize=50");
    const books = await data.json();
    console.log(books);
    console.log(books.length);
    displayBooks(books);
    
}
   getBooks();
   
  function displayBooks(books){
   for(var i = 0; i< books.length; i++)
   {
      const bookCover = document.createElement("div");
      bookCover.style.height= "25rem";
      bookCover.style.width= "35%";
      bookCover.style.background ="#13094e";
      bookCover.style.textAlign ="center";
      bookCover.style.margin ="0.5rem";
      bookCover.style.paddingTop ="2rem";
      bookCover.style.borderRadius ="5%";
    

      
  
      bookCover.innerHTML = `
      <h2>${books[i].name}</h2>
      <h5>ISBN ${books[i].isbn}</h5>
      <p>Number of Pages: ${books[i].numberOfPages}</p>
      <p>Author: ${books[i].authors}</p>
      <p>Publisher: ${books[i].publisher}, Date:${books[i].released}</p>
      <p class = "character">Characters: </br>
          ${books[i].characters[0]}</br>
          ${books[i].characters[1]}</br>
          ${books[i].characters[2]}</br>
          ${books[i].characters[3]}</br>
          ${books[i].characters[4]}</br>
          </p>
         `;
      document.body.append(bookCover);
      document.body.style.color = "#f4f1f1";
      document.body.style.display = "flex";
      document.body.style.flexWrap = "wrap";
      document.body.style.alignItems = "center";
      document.body.style.justifyContent = "center";
      document.body.style.background = "whitesmoke";
      document.body.style.gap = "1.5rem";
      
      
}
   }
  