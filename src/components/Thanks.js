import "./Thanks.css"
import {
    BsEmojiHeartEyes,
    BsEmojiSmile,
    BsEmojiNeutral,
    BsEmojiFrown
} from "react-icons/bs"

const emojiData = {
    unsatisfied: <BsEmojiFrown/>,
    neutral: <BsEmojiNeutral/>,
    satisfied: <BsEmojiSmile/>,
    very_satisfied: <BsEmojiHeartEyes/>
}
const ThanksForm = ({data}) => {
    return (
        <div className="thanks-container">
            <h2>Falta Pouco...</h2>
            <p>A sua opinião é muito importante, lembre-se de avaliar sua experiência</p>
            <p>Para concluir seu formulario, clique em enviar!</p>
            <h3>Aqui está o resumo do seu Formulário: {data.name}</h3>
            <p className=" review-data">
                <span>Nome: </span>
                {data.name}
            </p>
            <p className=" review-data">
                <span>Email: </span>
                {data.email}
            </p>
            <p className=" review-data">
                <span>Data de nascimento: </span>
                {data.dtnascimento}
            </p>
            <p className=" review-data">
                <span>Gênero: </span>
                {data.genero}
            </p>
            <p className=" review-data">
                <span>Estado Civil: </span>
                {data.civil}
            </p>
            <p className=" review-data">
                <span>CEP: </span>
                {data.cep}
            </p>
            <p className=" review-data">
                <span>Bairro: </span>
                {data.bairro}
            </p>
            <p className=" review-data">
                <span>Cidade: </span>
                {data.cidade}
            </p>
            <p className=" review-data">
                <span>Estado: </span>
                {data.estado}
            </p>
            <p className="review-data">
                <span>Satisfação com o formulário: </span>
                {emojiData[data.review]}
            </p>
            <p className=" review-data">
                <span>Comentário: </span>
                {data.comment}
            </p>
        </div>

    )
}

export default ThanksForm;