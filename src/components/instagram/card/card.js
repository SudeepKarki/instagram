import React from "react";
import "./card.css";

class Card extends React.Component {
  state = {
    loading: true,
    mediaData: [],
  };
  componentDidMount() {
    console.log("Props", this.props);
    this.loadData();
  }
  componentDidUpdate() {
    this.loadData();
  }
  async loadData() {
    if (this.props.match.params.id) {
      if (
        !this.state.mediaData ||
        (this.state.mediaData &&
          this.state.mediaData.id !== this.props.match.params.id)
      ) {
        const url1 =
          "https://graph.instagram.com/" +
          this.props.match.params.id +
          "?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJWVUJvOF9XT1l3NXBId2hHMGJIT2xCX01SUVRzWkhsSUxTdExGQ1JvcnJwSjlnNjNaZAk1WSEpYUVlZASC1ZAUUo5NGxMVXFGbkg4UzZAYQXBXVlkya002WnhnS3Y4STJhOWRzVFBR";
        const response1 = await fetch(url1);
        const data1 = await response1.json();
        this.setState({ mediaData: data1, loading: false });
        console.log("Data", data1);
      }
    }
  }
  render() {
    if (this.state.loading) {
      return <div>Loading ...</div>;
    }
    if (!this.state.mediaData) {
      return <div>Didnt get any Media data</div>;
    }
    return (
      <>
        <h6 className="section-title">Post Details</h6>
        <hr />
        <div className="card">
          <div className="card-media">
            <img src={this.state.mediaData.media_url} />
          </div>
          <div className="card-body">
            <h2>ID : {this.state.mediaData.id}</h2>
            <h2>Media Type : {this.state.mediaData.media_type}</h2>
            <i>Date : {this.state.mediaData.timestamp}</i>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
