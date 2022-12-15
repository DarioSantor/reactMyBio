import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppProvider";
import img from "../images/img.jpg";
import { Container,ButtonStyled } from "../styles/Global.styled";
import { NameStyled } from "../styles/ShortBio.Styled";


const ShortBio = (path) =>{
    const authorObj = useContext(AppContext);
    const [visibility,setVisibility] = useState(false);
    const [paths,setPaths] = useState(path.path)
    const [opened, setOpened] = useState(false)

    return(
        <Container>{paths?
                <>
                <NameStyled>{`${authorObj.firstName} ${authorObj.lastName}`}</NameStyled>
                <div className="stuff">
                    <img className="profile-img" src={img} alt={authorObj.photoInfo}  onClick={(()=>setVisibility(!visibility))}></img>
                    {visibility && <p className="img-description">{authorObj.photoInfo}</p>}
                </div>
                    <p>{authorObj.description}</p>
                    <Link className="see-more" to="/details" onClick={()=>setPaths(!paths)}>See More</Link>
                </>
                :
                <>
                    <NameStyled>{`${authorObj.fullName}`}</NameStyled>
                    {opened?
                        <p>{authorObj.description}</p>
                        :
                        <p>{authorObj.description.slice(0,87)}...</p>
                    }
                    <ButtonStyled onClick={()=>setOpened(!opened)}>{opened?"Hide":"Show More"}</ButtonStyled>
                </>
                }
        </Container>
    )
}

export default ShortBio;