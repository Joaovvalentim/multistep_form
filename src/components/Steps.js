import "./Steps.css";
import { BiUser } from "react-icons/bi"
import { AiOutlineCalendar, AiOutlineStar } from "react-icons/ai"
import { CiLocationOn } from "react-icons/ci"
import { BsSendCheck } from "react-icons/bs"


const Steps = ({currentStep}) => {
    return (
        <div className="steps">
            <div className="step active">
                <BiUser/>
                <p>Identificação</p>
            </div>
            <div className={`step ${currentStep >=1 ? "active" : ""}`}>
            <AiOutlineCalendar/>
                <p>Dados Complementares</p>
            </div>
            <div className={`step ${currentStep >=2 ? "active" : ""}`}>
            <CiLocationOn/>
                <p>Localidade</p>
            </div>
            <div className={`step ${currentStep >=3 ? "active" : ""}`}>
            <AiOutlineStar/>
                <p>Avalição</p>
            </div>
            <div className={`step ${currentStep >=4 ? "active" : ""}`}>
            <BsSendCheck/>
                <p>Envio</p>
            </div>
        </div>

    )
}

export default Steps;