import './App.css';
//Components
import { GrFormPreviousLink, GrFormNextLink } from 'react-icons/gr';
import { AiOutlineAlert } from 'react-icons/ai';
import UserForm from './components/UserForm';
import UserDataForm from './components/UserData';
import Location from './components/Location';
import ReviewForm from './components/ReviewForm';
import Thanks from './components/Thanks';
import Steps from './components/Steps';
import Sucess from './components/Sucess';
//Hooks
import { useForm } from './hooks/useForm';
import { useState } from 'react';

const formTemplate = {
  name: "",
  email: "",
  datanascimento: "",
  gender: "",
  cep: "",
  cidade: "",
  district: "",
  review: "",
  comment: "",
}

function App() {

  const [data, setData] = useState(formTemplate);

const updateFieldHandler = (key, value) =>{
  setData((prev) =>{
    return{...prev, [key]:value}
  })
}

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <UserDataForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Location data={data} updateFieldHandler={updateFieldHandler}/>,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <Thanks data={data} />,
    <Sucess/>
  ]
  const { currentStep, currentComponent, changeStep, isLastStep, isFirtsStep} = useForm(formComponents)

  return (
    <div className="app">
      <div className="header">
        <h2>Formulário de Inscrição</h2>
        <AiOutlineAlert />
        <small><b><i>Formulário de Estudo: Nenhuma informação será salva ou utilizada.</i></b></small>
        <p>Obrigado por completar o formulário! Entraremos em contato em breve.</p>
      </div>
      <div className='form-container'>
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className='inputs-container'>{currentComponent}</div>
          <div className='actions'>
            {!isFirtsStep && (<button type='button' onClick={() => changeStep(currentStep - 1)}>
              <GrFormPreviousLink />
              <span className='span'>Voltar</span>
            </button>)}
            {!isLastStep ? (<button type='submit'>
              <span className='span'>Avançar</span>
              <GrFormNextLink />
            </button>
            ):(<></>
            )}           
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
