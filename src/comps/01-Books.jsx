import React from 'react';
import Axios from 'axios';

class Books extends React.Component {
  constructor(){
    super();
    this.state = { books: [], text: "" }
  }

  getBooks(){

    Axios.request({ method: 'get', url: "https://www.googleapis.com/books/v1/volumes?q=" + this.state.text })
      .then((response) => { this.setState({ books: response.data.items }, () => { console.log(this.state) }  ) })
      .catch((error) => {console.log( error ) })
  }

  render() {
    return(
      <div>
        <p>Books</p>
        <form action="">
          <input type="text"/>
          <input type="submit" value="Find Books" />
        </form>


      </div>
    )
  }
}

export default Books;
