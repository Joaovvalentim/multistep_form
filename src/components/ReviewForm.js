import "./ReviewForm.css"
import {
    BsEmojiHeartEyes,
    BsEmojiSmile,
    BsEmojiNeutral,
    BsEmojiFrown
} from "react-icons/bs"


const ReviewForm = () => {
    return (
        <div className="review-form">
            <div className="form-control score-container">
                <label className="radio-container">
                    <input type="radio" value= "unsatisfied" name="revie" required></input>
                    <BsEmojiFrown/>
                    <p>Insatisfeito</p>
                </label>
                <label className="radio-container">
                    <input type="radio" value= "neutral" name="revie" required></input>
                    <BsEmojiNeutral/>
                    <p>Poderia serer melhor</p>
                </label>
                <label className="radio-container">
                    <input type="radio" value= "satisfied" name="revie" required></input>
                    <BsEmojiSmile/>
                    <p>Satisfeito</p>
                </label>                <label className="radio-container">
                    <input type="radio" value= "very_satisfied" name="revie" required></input>
                    <BsEmojiHeartEyes/>
                    <p>Muito Satisfeito</p>
                </label>
            </div>
            <div className="form-control">
                    <label htmlFor="comment"> Comentário:</label>
                    <textarea name="comment" id="comment" placeholder="Como foi sua experiência?" required></textarea>
                </div>
        </div>

    )
}

export default ReviewForm;