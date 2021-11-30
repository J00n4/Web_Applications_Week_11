import logo from './logo.svg';
import './App.css';

function onSubmit(event) {
  event.preventDefault();
  //const formData = new FormData(event.target);

  const bookName = document.getElementById("name").value;
  const bookAuthor = document.getElementById("author").value;
  const bookPages = document.getElementById("pages").value;
  fetch("/api/book", {
    method: "POST",
    body: {
      name: bookName,
      author: bookAuthor,
      pages: bookPages
    }
    //body: formData,
  })
}

function App() {
  return (
    <div className="App">
      <h1>books</h1>
      <form id="submit_form" method="post">
        <input type="string" id="name" />
        <input type="string" id="author" />
        <input type="number" id="pages" />
        <input onClick={() => onSubmit()} type="submit" id="submit" />
      </form>
    </div>
  );
}

export default App;
