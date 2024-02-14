import { useState } from 'react'
import Botao from '../Botao' 
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const planoestudo = [
        {
            nome: '3A Digital',
            corPrimaria: '',
            corSecundaria: '',
        },
        {
            nome:'Frontend na 3A',
            corPrimaria: '',
            corSecundaria: '',
        },
        {
            nome: 'Backend na 3A',
            corPrimaria: '',
            corSecundaria: '',
        },
   

   // const [curso, setCurso] = useState('')
   // const [imagem, setImagem] = useState('')

   // const aoSalvar = (evento) => {
    //    evento.preventDefault()
    //    props.aoCursoCadastrado({
    //        curso,
    //        imagem,
    //        })
   // }
   
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do curso:</h2>
            
                <CampoTexto 
                obrigatorio={true}
                label="Curso" placeholder="Digite o curso"
                valor={curso}
                aoAlterado={valor => setCurso(valor)}
                />
                
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

               <ListaSuspensa
                    obrigatorio={true}
                    label="Planos 3A" 
                    itens={planos}
                    valor={planos}
                   
                />
                <Botao>
                Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
