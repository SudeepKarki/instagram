import React from "react";
import "./list.css";
import { Route, Link } from "react-router-dom";

class List extends React.Component {
  state = {
    loading: true,
    postLists: [],
    selectedId: null,
  };
  async componentDidMount() {
    const url =
      "https://graph.instagram.com/me/media?fields=id,caption&access_token=IGQVJWVUJvOF9XT1l3NXBId2hHMGJIT2xCX01SUVRzWkhsSUxTdExGQ1JvcnJwSjlnNjNaZAk1WSEpYUVlZASC1ZAUUo5NGxMVXFGbkg4UzZAYQXBXVlkya002WnhnS3Y4STJhOWRzVFBR";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ postLists: data.data, loading: false });
    console.log("List", data);
  }
  handleChange = (id) => {
    // this.setState({ selectedId: id });
    // console.log(id);
    // console.log(this.props);
  };
  render() {
    if (this.state.loading) {
      return <div>Loading ...</div>;
    }
    if (!this.state.postLists.length) {
      return <div>Didnt get any data</div>;
    }
    return (
      <>
        <h6 className="section-title">
          List Of Instagram Post <small>(click the post for preview)</small>
        </h6>
        <hr />
        <div className="post-list">
          {this.state.postLists.map((postList) => (
            <Link
              to={"/" + postList.id}
              key={postList.id}
              onClick={() => this.handleChange(postList.id)}
            >
              {postList.caption}
            </Link>
          ))}
        </div>
      </>
    );
  }
}
export default List;
