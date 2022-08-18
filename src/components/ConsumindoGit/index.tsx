import { useEffect, useState } from 'react';
import style from './ConsumindoGit.module.scss'
import axios from 'axios'

type Repositorio ={
    name:string;
    description:string
}

export default function ConsumindoGit () {

    const [alocar, setAlocar] = useState<Repositorio[]>([])

    useEffect(() =>{
        axios.get('https://api.github.com/users/eliassouza93/repos')
        .then(response =>{
            setAlocar(response.data)
        })
    },[])

    return(
        <div className={style.titulo}>
            <h3>Nome dos repositórios de: </h3>
            <h4>Elias de Souza</h4>
            {alocar.map(repo => {
                return(
                    <div key={repo.name}>
                        <p> {repo.name} </p>
                       
                    </div>
                )
            }
            )}

        </div>
    )
}