import "./HorizontalCard.css";
import close from "./close.png";
function HorizontalCard(props) {
  return (
    <div className="hc">
      <img className="hc__image" alt={props.title} src={props.poster} />
      <div>
        <h2 className="hc__title">Title: {props.title}</h2>
        <p className = "hc__info">Genre: {props.genre} </p>
        <p className="hc__info">Description: {props.description}</p>
        <p className = "hc__info">Country: {props.country}</p>
        <p className="hc__info">Rating: {props.rating}/10</p>
        <p className = "hc__info">Released: {props.year}</p>
        <p className="hc__info">BoxOffice: {props.earnings}</p>
        <p className="hc__info">Actors: {props.actor}</p>
        <p className = "hc__info">Director(s): {props.directors}</p>
        <p className = "hc__info">Runtime: {props.runtime}</p>
        <p className = "hc__info">Awards: {props.awards}</p>
        <button className="hc__close" onClick={props.close}>
          <img src={close} />
        </button>
      </div>
    </div>
  );
}
export default HorizontalCard;

