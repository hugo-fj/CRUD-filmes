import React, { useState,useEffect } from 'react';
import {Container,Table} from 'react-bootstrap';
import Axios from 'axios';

function Lista(){
    const [lista,setLista] = useState([]);
    

    useEffect(()=>{
        Axios.get('Http://192.168.1.5:5000/api/get')
        .then((res)=>{
            setLista(res.data);
            console.log(res.data);
        })
    },[])

    return( 
        <div>
            <Container>
               
                    <Table triped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Review</th>
                        </tr>
                    </thead>
                    {lista.map((val)=>{
                        return (
                            <tbody>
                            <tr>
                            <td>{val.id}</td>
                            <td>{val.nome}</td>
                            <td>{val.review}</td>
                            </tr>
                        </tbody>
                        )
                    
                    })}
                </Table>
                    
                
            </Container>

            <Container>
                {lista.map((val)=>{
                    return <h1>Filme:{val.nome} | Review: {val.review}</h1>
                })}
            </Container>

        </div>

    )
}

export default Lista;
