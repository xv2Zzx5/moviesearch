import "./Card.css"
import noimage from "./image.png"
function Card(props){
    return <div className="card">
        <img className = {props.poster == "N/A"? "card__noimage" : "card__img"}  src = {props.poster == "N/A"? noimage : props.poster} alt = {props.title}/>    
        <p className = "card__date">{props.date}</p>
        <h2 className = "card__title">{props.title}</h2>
        <p className="card__genre">{props.genre}</p>
        <button className = "card__btn" onClick = {props.onClick}>See details</button>
    </div>
}
export default Card