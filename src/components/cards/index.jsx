import './index.scss'

export function Cards({ titulo , assuntos,data}) {
    let corPrimaria = '#A3E5BA'
    let corSegundaria = '#EFFBE2'

    return (
        <div className='app-container'>
          
            <div className='cards'>
                <div className='card' style={{ backgroundColor: corSegundaria }}>
                    <div className='card-cabecalho' style={{ backgroundColor: corPrimaria }}>
                        <h2>{titulo}</h2>
                    </div>
                    <div className='card-conteudo'>
                        <h3>Assuntos</h3>
                        <pre>
                           {assuntos} 
                        </pre>
                    </div>
                    <p className='tag'>{data}</p>
                </div>
            </div>
        </div>
    );
}