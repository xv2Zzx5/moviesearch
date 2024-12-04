import Search from "./components/search/Search";
import Card from "./components/card/Card";
import "./App.css";
import { useState } from "react";
import loadingImg from "./loading.svg";
import Hc from "./components/HorizontalCard/HorizontalCard";
const apikey = "c963c2f0";
function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [imdbId, setImdbId] = useState(null);
  const [pastMovies, setPastMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [pastMovieDetails, setPastMovieDetails] = useState([]);
  function search(name) {
    if(name == ""){
      return
    }
    setLoading(true);
    setError(false);
    setImdbId(null);
    if(pastMovies.some((movie) => movie.search == name)){
      setMovies(pastMovies.find((movie) => movie.search == name).movies)
      setLoading(false)
      return 
    }
    fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${name}`)
      .then((data) => data.json())
      .then((data) => {
        if (data.Response == "False") {
          throw new Error("Something went wrong");
        }
        setMovies(data.Search);
        setPastMovies([...pastMovies, {
          search: name,
          movies: data.Search

        }])
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }
  function getDetails(id){
    if(id == ""){
      return
    }
    setLoading(true);
    setError(false);
    setImdbId(id);
    
    if(pastMovieDetails.some((movie) => movie.id == id)){
      setMovieDetails(pastMovieDetails.find((movie) => movie.id == id))
      setLoading(false)
      return 
    }
    fetch(`http://www.omdbapi.com/?apikey=${apikey}&i=${id}`)
      .then((data) => data.json())
      .then((data) => {
        if (data.Response == "False") {
          throw new Error("Something went wrong");
        }
        const details = {
          title: data.Title,
          poster: data.Poster,
          genre: data.Genre,
          description: data.Plot,
          country: data.Country,
          rating: data.imdbRating,
          year: data.Released,
          earnings: data.BoxOffice,
          actor: data.Actors,
          directors: data.Director,
          runtime: data.Runtime,
          awards: data.Awards,
          id: data.imdbID 
        }
        setMovieDetails(details)
        setPastMovieDetails([...pastMovieDetails, details])
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }
  return (
    <div className="container">
      <Search loading={loading} onSearch={search} />
      {loading ? <img className="loading" src={loadingImg} /> : null}
      {error ? (
        <h2>Something went wrong</h2>
      ) : imdbId == null ? (
        <div className="cards">
          {movies.map((movie) => (
            <Card
              title={movie.Title}
              date={movie.Year}
              genre={movie.Type}
              poster={movie.Poster}
              key={movie.imdbID}
              imdbID={movie.imdbID}
              onClick = {(event) => getDetails(movie.imdbID)}
            />
          ))}
        </div>
      ) : (
        <Hc
          {...movieDetails}
          close = {() => setImdbId(null)}
        />
      )}
    </div>
  );
}

export default App;
