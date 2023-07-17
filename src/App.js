import './App.css';
import { GrFormPreviousLink, GrFormNextLink } from 'react-icons/gr';

function App() {
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
          <div className='inputs-container'></div>
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
