import React, { useState,useEffect } from 'react';
import {Form,Container,Button,Col} from 'react-bootstrap';
import Axios from 'axios';

function FormFilme(){

    const [nome,setNome] = useState('');
    const [review,setReview] = useState('');
    



    const handleInputNome =(e) =>{setNome(e.target.value)};
    const handleInputReview = (e) =>{setReview(e.target.value)};
    
    const handleSubmit = () =>{
        Axios.post('Http://192.168.1.5:5000/api/inserir',{
            nome:nome,
            review:review
        }).then(()=>{
            alert("Realizado envio dos dados")
        })
    }



    return( 
        <div>
            <Container>
            <Form>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Nome do Filme:</Form.Label>
                    <Form.Control type="text" placeholder="Filme"  name="nome" value={nome} onChange={handleInputNome} />
                </Form.Group>

                <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Review:</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Escreva a análise do filme"name="review"value={review} onChange={handleInputReview} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>Enviar</Button>
            </Form>
                    
                    
            </Container>
           
            

        </div>
    )
}

export default FormFilme;


