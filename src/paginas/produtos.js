import React, {useState, useEffect} from 'react';

const Produtos = () => {

        const [produ, setProdu] = useState([]);

        useEffect(async () => {
            const url ="http://localhost/full_stack_eletro/Back-End/Backend/Api.php"
            const resp = await fetch(url);
            setProdu(await resp.json()); 
        }, [])

      
        
        return(
            <>
            <section className="container mx-auto mt-5 produtos row justify-content-center bg-info">
                {
                    
                    produ.map(row => {
                            return(
                            <div className="col-3 my-2 bg-danger">

                                <div key={row.idproduct} className="box_produto card border border-success border-2" style={{width:"12rem"}} id={row.categoria}>
                                    <img className="card-img-top" src={row.imagen} alt="imagem" img-fluid/>
                                    <br />
                                    <div className="card-body">
                                        <p className="card-text">{row.descripcao}</p>
                                    </div>
                                    <hr />
                                    <div>
                                        <p className="card-text" style={{textDecoration: "line-though"}}>R${row.preco}</p>
                                    </div>
                                    <div>
                                        <p className="card-text"> R${row.precoFinal} </p>
                                    </div>
                                    <a className="btn btn-dark" role="button">Comprar</a>
                                </div>
                                
                             </div>    
                            )
                        }
                   
                    )
                }
            </section>
            </>
        );
}

export default Produtos;