import "./UserData.css"
import InputMask from 'react-input-mask';
const UserData = ({ data, updateFieldHandler }) => {

    return (
        <>
            <div className="form-control">
                <label htmlFor="name">Data de nascimento:</label>
                <InputMask type="text"
                    name="text"
                    id="dtnascimento"
                    placeholder="dd/mm/aaaa"
                    mask="99/99/9999"
                    required
                    maskChar={null}
                    onChange={(e) => updateFieldHandler("dtnascimento", e.target.value)}
                />
            </div>
            <div className="form-control custom-select" >
                <label htmlFor="name">Gênero:</label>
                <select 
                required 
                value={data.genero || ""}
                onChange={(e) => updateFieldHandler("genero", e.target.value)}
                >
                    <option default disabled selected></option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Outro">Outro</option>
                </select>
            </div>
            <div className="form-control custom-select">
                <label htmlFor="name">Estado civil:</label>
                <select 
                required
                value={data.civil || ""}
                onChange={(e) => updateFieldHandler("civil", e.target.value)}
                >
                    <option default disabled selected></option>
                    <option value="Solteiro">Solteiro</option>
                    <option value="Casado">Casado</option>
                    <option value="Separado">Separado</option>
                    <option value="Divorciado ">Divorciado </option>
                    <option value="Viúvo">Viúvo</option>
                </select>
            </div>
        </>
    )
}

export default UserData;