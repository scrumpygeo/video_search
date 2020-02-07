import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  onTermSubmit = term => {
    // callback for when we submit search term to child component SearchBar
    // now we can call preconfigured instance of axios we called youtube
    youtube.get("/search", {
      params: {
        q: term
      }
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
