import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Time from './Componentes/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]
  const [colaboradores, setColaboradores] = useState(() => {
    // Tente obter os dados armazenados localmente
    const dadosArmazenados = localStorage.getItem('colaboradores');
    // Se existirem, converta-os de volta para um array
    return dadosArmazenados ? JSON.parse(dadosArmazenados) : [];
  });
  

  //const [colaboradores, setColaboradores] = useState([])

  //const aoNovoColaboradorAdicionado = (colaborador) => {
    const aoNovoColaboradorAdicionado = (colaborador) => {
      const novaListaColaboradores = [...colaboradores, colaborador];
      setColaboradores(novaListaColaboradores);
      // Salvar no armazenamento local
      localStorage.setItem('colaboradores', JSON.stringify(novaListaColaboradores));
    };
    
  
  

  return (
    <div className="App">
      <Banner />
      <div 
           style={{
            display: 'flex',
            flexDirection: 'row',  // ou 'column' dependendo do seu layout
            justifyContent: 'space-between',  // ou outros valores conforme necessário
            alignItems: 'flex-start',  // ou outros valores conforme necessário
            // outros estilos que você quiser aplicar ao conteúdo principal
          }}
        >
      
        <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
        <div 
             style={{
              // estilos para o container dos times
              marginLeft: '20px', // ou outro valor conforme necessário
            }}
          >
        
          {times.map(time => <Time
            key={time.nome}
            nome={time.nome}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          />)}
        </div>
      </div>

    </div>

  );
          }

export default App;
