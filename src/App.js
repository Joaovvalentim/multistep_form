import './App.css';
//Components
import { GrFormPreviousLink, GrFormNextLink } from 'react-icons/gr';
import { BsFillSendCheckFill } from 'react-icons/bs';
import UserForm from './components/UserForm';
import UserDataForm from './components/UserData';
import Location from './components/Location';
import ReviewForm from './components/ReviewForm';
import Thanks from './components/Thanks';
//Hooks
import { useForm } from './hooks/useForm';



function App() {

  const formComponents = [
    <UserForm />, <UserDataForm />, <Location />, <ReviewForm />, <Thanks />]
  const { currentStep, currentComponent, changeStep, isLastStep , isFirtsStep} = useForm(formComponents)


  return (
    <div className="app">
      <div className="header">
        <h2>Formulário de Inscrição</h2>
        <small>Formulário de Estudo: Nenhuma informação será salva ou utilizada.</small>
        <p>Obrigado por completar o formulário! Entraremos em contato em breve.</p>
      </div>
      <div className='form-container'>
        <p>etapas</p>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className='inputs-container'>{currentComponent}</div>
          <div className='action'></div>
          {!isFirtsStep && (          <button type='button' onClick={() => changeStep(currentStep - 1)}>
            <GrFormPreviousLink />
            <span>Voltar</span>
          </button>)}
          {!isLastStep ? (<button type='submit'>
            <span>Avançar</span>
            <GrFormNextLink />
          </button>
          ) : (<button type='button'>
            <span>Enviar</span>
            <BsFillSendCheckFill />
          </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
