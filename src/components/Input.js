
const Input = (props)=>{
    return(
        <div>
        <input className="contact-input" type={`${props.email}`} placeholder={props.placeholder} name={props.name}/>
    </div>
    )
}

export default Input;