import "./Thanks.css"
import {
    BsEmojiHeartEyes,
    BsEmojiSmile,
    BsEmojiNeutral,
    BsEmojiFrown
} from "react-icons/bs"


const ThanksForm = ({data}) => {
    return (
        <div className="thanks-container">
            <h2>Falta Pouco...</h2>
            <p>A sua opinião é muito importante, lembre-se de avaliar sua experiência</p>
            <p>Para concluir seu formulario, clique em enviar!</p>
            <h3>Aqui está o resumo do seu Formulário:</h3>
            <p className="review-data">
                <span>Satisfação com o formulário:</span>
            </p>
            <p className=" review-data">
                <span>Comentário:</span>
            </p>
        </div>

    )
}

export default ThanksForm;