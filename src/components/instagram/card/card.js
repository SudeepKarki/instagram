import React, { useEffect, useState } from "react";
import "./card.css";

function Card(props) {
  const [loading, setLoading] = useState(true);
  const [mediaData, setMediaData] = useState([]);
  useEffect(() => {
    loadData();
  });
  async function loadData() {
    if (props.match.params.id) {
      if (!mediaData || (mediaData && mediaData.id !== props.match.params.id)) {
        let response = await fetch(
          "https://graph.instagram.com/" +
            props.match.params.id +
            "?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJWVUJvOF9XT1l3NXBId2hHMGJIT2xCX01SUVRzWkhsSUxTdExGQ1JvcnJwSjlnNjNaZAk1WSEpYUVlZASC1ZAUUo5NGxMVXFGbkg4UzZAYQXBXVlkya002WnhnS3Y4STJhOWRzVFBR"
        );
        const data = await response.json();
        setMediaData(data);
        setLoading(false);
      }
    }
  }
  if (loading) {
    return <div>Loading ...</div>;
  }
  if (!mediaData) {
    return <div>Didnt get any Media data</div>;
  }
  return (
    <>
      <h6 className="section-title">Post Details</h6>
      <hr />
      <div className="card">
        <div className="card-media">
          <img src={mediaData.media_url} />
        </div>
        <div className="card-body">
          <h2>ID : {mediaData.id}</h2>
          <h2>Media Type : {mediaData.media_type}</h2>
          <i>Date : {mediaData.timestamp}</i>
        </div>
      </div>
    </>
  );
}

export default Card;
