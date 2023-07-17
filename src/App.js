import './App.css';
//Components
import { GrFormPreviousLink, GrFormNextLink } from 'react-icons/gr';
import UserForm from './components/UserForm';
import UserDataForm from './components/UserData';
import Location from './components/Location';
import ReviewForm from './components/ReviewForm';
import Thanks from './components/Thanks';
//Hooks
import { useForm } from './hooks/useForm';



function App() {

const formComponents = [
  <UserForm/>, <UserDataForm/>, <Location/>, <ReviewForm/>, <Thanks/>]
const {currentStep, currentComponent} =  useForm(formComponents)


  return (
    <div className="app">
      <div className="header">
        <h2>Formulário de Inscrição</h2>
        <small>Formulário de Estudo: Nenhuma informação será salva ou utilizada.</small>
        <p>Obrigado por completar o formulário! Entraremos em contato em breve.</p>
      </div>
      <div className='form-container'>
        <p>etapas</p>
        <form>
          <div className='inputs-container'>{currentComponent}</div>
          <div className='action'></div>
          <button type='button'>
            <GrFormPreviousLink />
            <span>Voltar</span>
          </button>
          <button type='submit'>
            <span>Avançar</span>
            <GrFormNextLink />
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
