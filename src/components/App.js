import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
require("dotenv").config();

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    // callback for when we submit search term to child component SearchBar
    // now we can call preconfigured instance of axios we called youtube
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />I have{" "}
        {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;
