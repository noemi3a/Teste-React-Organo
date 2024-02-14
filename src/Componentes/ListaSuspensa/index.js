import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select
    className={`campo-lista ${props.obrigatorio ? 'obrigatorio' : ''}`}
    onChange={(evento) => props.aoAlterado(evento.target.value)}
    value={props.valor}
>
    <option value="" disabled hidden>
        Selecione uma opção
    </option>
    <option value="3A Digital">3A Digital</option>
    <option value="Frontend na 3A">Frontend na 3A</option>
    <option value="Backend na 3A">Backend na 3A</option>
</select>
        </div>
    )
}

export default ListaSuspensa







