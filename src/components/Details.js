import React, { useContext, useState } from 'react'
import Modal from "react-modal"
import { AppContext } from '../context/AppProvider'
import ShortBio from './ShortBio';
import { ButtonStyled, UlStyled } from '../styles/Global.styled';

const Details = () => {
    const authorObj = useContext(AppContext);

    return (
        <div>
            <ShortBio path={false} />
            <UlStyled>
                {authorObj.details.map((details, id) =>
                    <li key={id}>
                        <Biografia key={id} details={details} />
                    </li>
                )}
            </UlStyled>
        </div>
    )
}

const Biografia = ({ details }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Modal className="modal"
                isOpen={open}
                onRequestClose={handleClose}
                ariaHideApp={false}
            >
                <p>{details.year}</p>
                <p>{details.title}</p>
                <p>{details.info}</p>
                <ButtonStyled onClick={handleClose}>Close</ButtonStyled>
            </Modal>
            <h3 onClick={handleOpen}>{details.year}</h3>
            <p>
                {details.title}
            </p>
        </>
    )
}

export default Details