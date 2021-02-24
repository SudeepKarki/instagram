import React, { useEffect, useState } from "react";
import "./list.css";
import { Route, Link } from "react-router-dom";

function List() {
  const [loading, setLoading] = useState(true);
  const [postLists, setPostLists] = useState([]);
  // state = {
  //   loading: true,
  //   postLists: [],
  //   selectedId: null,
  // };

  useEffect(() => {
    fetchMyAPI();
  }, []);

  async function fetchMyAPI() {
    let response = await fetch(
      "https://graph.instagram.com/me/media?fields=id,caption&access_token=IGQVJWVUJvOF9XT1l3NXBId2hHMGJIT2xCX01SUVRzWkhsSUxTdExGQ1JvcnJwSjlnNjNaZAk1WSEpYUVlZASC1ZAUUo5NGxMVXFGbkg4UzZAYQXBXVlkya002WnhnS3Y4STJhOWRzVFBR"
    );
    const data = await response.json();
    setPostLists(data);
    setLoading(false);
  }

  // console.log("Log SUdeep", data);
  console.log("Sudeep", postLists);
  const handleChange = () => {
    // this.setState({ selectedId: id });
    // console.log(id);
    // console.log(this.props);
  };
  if (loading) {
    return <div>Loading ...</div>;
  }
  if (!postLists.data.length) {
    return <div>Didnt get any data</div>;
  }
  return (
    <>
      <h6 className="section-title">
        List Of Instagram Post <small>(click the post for preview)</small>
      </h6>
      <hr />
      <div className="post-list">
        {postLists.data.map((postLists) => (
          <Link
            to={"/" + postLists.id}
            key={postLists.id}
            onClick={() => handleChange(postLists.id)}
          >
            {postLists.id}
          </Link>
        ))}
      </div>
    </>
  );
}
export default List;
