import { GoCheck } from "react-icons/go";
const SuccessMsg = () => {
    return (
        <div className="success-msg">
            <div className="success-msg-al">
            <GoCheck color={"#44d787"}/>
            <h2>Message sent !</h2>
            </div>
            <p>Please wait for me to reply</p>
        </div>
    )
}
export default SuccessMsg;