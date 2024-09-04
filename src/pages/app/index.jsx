import { Link } from 'react-router-dom'
import './index.scss'
import Cabecalho from '../../components/cabecalho'
import { Cards } from '../../components/cards';


export default function App() {

    let corPrimaria = '#A3E5BA';
    let corSegundaria = '#EFFBE2';

    let cards= [{
        "assuntos": "- Componentes na renderização.",
        "data": "9/setembro",
        "titulo": "Renderização e efeito",
        "status": "Em andamento",
        "trabalho": true,
        "fimBemestre": false
    }]

    return (
        <div>

            <Cabecalho />


            <div className='cards'>

            {cards.map
                        (cards =>
                            <Cards
                                assuntos={cards.assuntos}
                                titulo={cards.titulo}
                                data={cards.data}


                            />)}



            </div>

            <Cards
            
            assuntos='Objetos e Listas de Objetos - Componentes'
            titulo='componentes'
            data='26/agosto'
            
            
            />


            
            <Cards
                        
              assuntos='riando um projeto React
              - Estilização com SCSS- Navegação entre telas- Variáveis de estado- Renderização de lista- Componentesp'
              titulo='Prova Prática e Teórica'
              data='16/setembro'
                        
                        
                        />
        </div>
    )
}
