
const Card = (props) => {
    return (
        <div className="skill-card">
            {props.item.icon}
        <p>{props.item.name}</p>
        </div>
    )
}

export default Card;