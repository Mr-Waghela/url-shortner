import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/index";
import "./home.scss";
import * as shortid from "shortid";

// Assuming db is initialized somewhere else using initializeApp
function Home() {
  const [url, setUrl] = useState("");
  const [Modal, setModal] = useState(false);

  let gen = shortid.generate();
  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const urlsCollection = collection(db, "urls");
    await addDoc(urlsCollection, {
      url: url,
      code: gen,
    });
    setModal(true);
    // alert("This is your URL -" + window.location + gen);
  };
  const disableModal = async () => {
    setModal(false);
    try {
      await navigator.clipboard.writeText(host + gen);
      document.execCommand("Copy");
      alert("Link coppied to Clipboard");
    } catch (err) {
      alert("Failed to copy!");
    }
  };
  const host = window.location.href;
  return (
    <div>
      <div className="login-box">
        <h2>URL Shortener</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="user-box">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <label>Enter the URL here...</label>
          </div>
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
      {Modal ? (
        <div className="modal">
          <p className="message">
            <a className="link-copy" href={host + gen}>
              {host + gen}
            </a>
          </p>
          <div className="options">
            <button
              className="btn"
              onClick={() => {
                disableModal();
              }}
            >
              Copy Url
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Home;
