import Botao from '../Botao/Botao' 
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'

import './Formulario.css'



const Formulario = (props) => {

    const planos =[
      '3A Digital',
      'Frontend na 3A',
      'Backend na 3A'
    ]
    return (
        <section className="formulario">
            <form>
            <h2>Preencha os dados para criar o card do curso:</h2>
            
                <CampoTexto label="Curso" placeholder="Digite o curso"/>
                <CampoTexto label="Plano" placeholder="Digite o plano de Estudos"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>

                <ListaSuspensa label="Plano"itens={planos} />
                <Botao texto="Criar Card"/> 
            </form>
        </section>
    )
}

export default Formulario
