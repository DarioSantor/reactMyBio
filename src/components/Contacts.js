import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppProvider';
import { useFetch } from "../hooks/useFetch"
import { Container, StyledForm } from '../styles/Global.styled';

const Contacts = () => {

    const response = useFetch(`https://637687fcb5f0e1eb850e4875.mockapi.io/api/v1/hobbies`)
    const hobbie = response[0];
    const loading = response[1];
    const error = response[2];
    const answersData = JSON.parse(localStorage.getItem("answers"));
    const [answers, setAnswers] = useState(answersData || [])
    const authorObj = useContext(AppContext);
    const [name, setName] = useState('default');
    const [buttonDisable, setButtonDisable] = useState(false);
    const showEmailData = JSON.parse(localStorage.getItem("showEmail"));
    const [showEmail, setShowEmail] = useState(showEmailData || false);

    const checkAnswer = (e) => {
        e.preventDefault()
        if (name == authorObj.hobbie) {
            setShowEmail(!showEmail);
            localStorage.setItem("showEmail", JSON.stringify(true))
            addAnswer()
        } else {
            addAnswer();
        }
    }

    const addAnswer = () => {
        setAnswers([...answers, name])
    }

    useEffect(() => {
        localStorage.setItem("answers", JSON.stringify(answers))
    }, [answers])

    useEffect(() => {
        if (answers.includes(name) || answers.length > 2 || showEmail || name == 'default') {
            setButtonDisable(true)
        } else {
            setButtonDisable(false)
        }
    }, [name, answers])

    return (
        <>
            <Container>
                <h2>Contactos</h2>
                <p>Para aceder ao meu e-mail é necessário responder corretamente ao questionário.</p>
                <p>Após a 3ª tentativa o formulário fica bloqueado.</p>
                <p>Se uma das respostas for a correta, o e-mail é apresentado.</p>
                <form onSubmit={checkAnswer}>
                    {loading ?
                        <>
                            <p>loading ...</p>
                        </>
                        :
                        error ?
                            (<p>Error na obtenção de dados: <b>{error}</b></p>)
                            :
                            <>
                                <h2>Questionário</h2>
                                <p>Qual a área "não profissional" e "não familiar" em que eu invisto mais tempo?</p>
                                <StyledForm>
                                    <select onChange={(e) => {
                                        setName(e.target.value);
                                    }}>
                                        <option value={'default'} >Selecionar a resposta certa</option>
                                        {hobbie.map(({ name, id }) => (
                                            <option value={name} key={id}>{name}</option>
                                        ))
                                        }
                                    </select>
                                    <button disabled={buttonDisable}>Submit</button>
                                </StyledForm>
                            </>
                    }
                </form>
                <StyledForm>
                    {
                        answers.length > 0 && answers.map((name) => (
                            showEmail && authorObj.hobbie == name ?
                                <p>{name}. <b>Correto</b>, o meu email é {authorObj.email}</p>
                                :
                                <p>{name}, a resposta está <b>INCORRETA</b></p>
                        ))
                    }
                </StyledForm>
            </Container>
        </>
    )
}

export default Contacts