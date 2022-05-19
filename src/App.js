import React, { useState, useEffect } from "react";
import "./App.css";
import Characters from "./components/characters";
import Rm from "./img/rick-and-morty.png";
import { Button } from "@mui/material";
import Pagination from "./components/pagination";
import GitHub from "@mui/icons-material/GitHub";
import Twitter from "@mui/icons-material/Twitter";
import Code from "@mui/icons-material/Code";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://rickandmortyapi.com/api/character?page=1"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  useEffect(() => {
    const url = currentPageUrl;
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setCharacters(data.results);
      setLoading(false);
      setNextPageUrl(data.info.next);
      setPrevPageUrl(data.info.prev);
    };
    fetchData();
    console.log(currentPageUrl);
  }, [currentPageUrl]);

  function nextPage() {
    setCurrentPageUrl(nextPageUrl);
  }
  function prevPage() {
    setCurrentPageUrl(prevPageUrl);
  }
  if (loading) return "Loading...";
  const charList = characters.map((people, index) => (
    <Characters
      key={index}
      name={people.name}
      status={people.status}
      species={people.species}
      location={people.location}
      episode={people.episode}
      image={people.image}
    />
  ));

  return (
    <main className="App">
      <section className="hero-wrapper HWjsSL">
        <div className="hero-img">
          <img src={Rm} alt="Rick and Morty" />
        </div>
      </section>
      <section className="character-wrapper CWjsSL">
        <div className="character-inner CIjsSL">{charList}</div>
      </section>
      <section className="buttons-wrapper BWjsSL">
        <div className="buttons-inner BIjsSL">
          <Button variant="outlined" onClick={prevPage}>
            Prev
          </Button>
          <Button variant="outlined" onClick={nextPage}>
            Next
          </Button>
        </div>
      </section>
      <Pagination
        nextPage={nextPageUrl ? nextPage : null}
        prevPage={prevPageUrl ? prevPage : null}
      />
      <footer className="footer-wrapper FWjsSL">
        <ul className="footer-social FSjsSL">
          <li>
            <a
              href="https://github.com/jschmidt424"
              title="GitHub"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <GitHub />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/jschmidt424"
              title="twitter"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <Twitter />
            </a>
          </li>
        </ul>
        <div className="footer-copyright FCjsSL">
          <p>
            <Code /> by
            <span>
              <a
                href="https://github.com/jschmidt424"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                Joshua Schmidt
              </a>
            </span>
            and the Rick and Morty API
          </p>
        </div>
      </footer>
    </main>
  );
};

export default App;
