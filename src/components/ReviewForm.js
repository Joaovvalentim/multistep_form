import "./ReviewForm.css"
import {
    BsEmojiHeartEyes,
    BsEmojiSmile,
    BsEmojiNeutral,
    BsEmojiFrown
} from "react-icons/bs"


const ReviewForm = ({ data, updateFieldHandler }) => {
    return (
        <div className="review-form">
            <div className="form-control score-container">
                <label className="radio-container">
                    <input
                        type="radio"
                        value="unsatisfied"
                        name="revie"
                        required
                        checked={data.review === "unsatisfied"}
                        onChange={(e) => updateFieldHandler("review", e.target.value)}
                    />
                    <BsEmojiFrown />
                    <p>Insatisfeito</p>
                </label>
                <label className="radio-container">
                    <input
                        type="radio"
                        value="neutral"
                        name="revie"
                        required
                        checked={data.review === "neutral"}
                        onChange={(e) => updateFieldHandler("review", e.target.value)}
                    />
                    <BsEmojiNeutral />
                    <p>Poderia serer melhor</p>
                </label>
                <label className="radio-container">
                    <input
                        type="radio"
                        value="satisfied"
                        name="revie"
                        required
                        checked={data.review === "satisfied"}
                        onChange={(e) => updateFieldHandler("review", e.target.value)}
                    />
                    <BsEmojiSmile />
                    <p>Satisfeito</p>
                </label>          
                <label className="radio-container">
                    <input type="radio"
                        value="very_satisfied"
                        name="revie"
                        required
                        checked={data.review === "very_satisfied"}
                        onChange={(e)=> updateFieldHandler("review", e.target.value)}
                    />
                    <BsEmojiHeartEyes />
                    <p>Muito Satisfeito</p>
                </label>
            </div>
            <div className="form-control">
                <label htmlFor="comment"> Comentário:</label>
                <textarea 
                name="comment" 
                id="comment" 
                placeholder="Como foi sua experiência?" 
                required
                value={data.comment || ""}
                onChange={(e)=> updateFieldHandler("comment", e.target.value)}
                />
            </div>
        </div>

    )
}

export default ReviewForm;