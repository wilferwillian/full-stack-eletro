import Email from '../Img/img/email2.jpg';
import Whatsapp from '../Img/img/whatsapp.jpg';
import './Contato/estilo.css';
import React, {useState, useEffect} from 'react';

const Contatos = () =>{

    const [comentarios, setComentarios] = useState([]);
    const [render, setRender] = useState(false);
    const [msg , setMsg] = useState(false);

    useEffect(async () => {
        const url = "http://localhost/proyectoFullStack/FullStackEletro-Ract/Backend/indexCom.php";
        const response = await fetch(url);
        setComentarios(await response.json());
    }, [render])



    async function registerComent(event){
        event.preventDefault();
        let formData = new FormData(event.target);

        const url = "http://http://localhost/full-stack-eletro";

        fetch(url, {
            method: "POST",
            body: formData
        }).then((response) => response.json()).then((dados) => {
            setRender(!render);
            setMsg(dados);
            setTimeout(() => {
                setMsg(false);
            }, 2000);
        });
    }


    return (
    <div className="container mt-5">
        <header>
            <h2 className="text-primary">Fale Conosco</h2>
        </header>
        <hr />
        <section className="control">
            <div className="contato">
                <img src={Email} />
               <strong>contato@fullstackeletro.com.br</strong> 
            </div>
            <div className="contato">
                <img src={Whatsapp} />
               <strong> (11) 959237091</strong>
            </div>
        </section>

        
        <section className="formulario">

            <form onSubmit={registerComent}>
                <div className="form-group">
                    <label for="exampleFormControlInput1"><strong>Nome:</strong></label>
                    <input type="text" className="form-control"  name="nome" id="exampleFormControlInput1" placeholder="Seu nome" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">< strong>Deixe sua opinião, sugestão ou comentário:</strong></label>
                    <textarea className="form-control" name="msg" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button className="btn btn-primary btn-lg btn-block">Enviar</button>
            </form>

        </section>


        { msg && <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
            Cadastro realizado com sucesso
        </div>

        }

            <h2>Comentários</h2>
            
            <section>
                {
                    comentarios.map((element) => {
                        return (

                            <div key={element.comentario_id} className="card w-50 mx-auto mt-3">
                                <div className="card-header">
                                    {element.nome}
                                </div>
                                <div className="card-body">
                                    Mensagem: {element.msg}
                                </div>
                            </div>
                        )
                    }).reverse()
                }

                
            </section>
    </div>
    );
}
export default Contatos;