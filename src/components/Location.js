import { useState } from "react";


const LocationForm = ({ data, updateFieldHandler }) => {

    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')

    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        if (cep.length > 7) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(res => res.json())
                .then(data => {
                    setBairro(data.bairro);
                    setCidade(data.localidade);
                    setEstado(data.uf);
                });
        }
    };

    return (
        <>
            <div className="form-control">
                <label htmlFor="name">CEP:</label>
                <input type="text"
                    autoComplete="off"
                    name="text"
                    id="cep"
                    placeholder="CEP"
                    required
                    value={data.cep || ""}
                    onChange={(e) => updateFieldHandler("cep", e.target.value)}
                    onBlur={checkCEP}
                />
            </div>
            <div className="form-control">
                <label htmlFor="name">Bairro: </label>
                <input
                    disabled
                    type="text"
                    autoComplete="off"
                    name="bairro"
                    id="bairro"
                    placeholder="Bairro"
                    required
                    value={data.bairro = bairro || ''}
                    onChange={(e) => updateFieldHandler("bairro", e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="name">Cidade: </label>
                <input
                    disabled
                    type="text"
                    autoComplete="off"
                    name="cidade"
                    id="cidade"
                    placeholder="Cidade"
                    required
                    value={data.cidade = cidade || ''}
                    onChange={(e) => updateFieldHandler("cidade", e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="name">Estado: </label>
                <input
                    disabled
                    type="text"
                    autoComplete="off"
                    name="estado"
                    id="estado"
                    placeholder="Estado"
                    required
                    value={data.estado = estado || ''}
                    onChange={(e) => updateFieldHandler("estado", e.target.value)}
                />
            </div>
        </>
    );
}

export default LocationForm;