import React from 'react'

import styled from 'styled-components'
import Button from './button';
import { AddRounded, ExploreRounded } from "@mui/icons-material"
import { useNavigate, useLocation } from 'react-router-dom';

const Container = styled.div`
flex: 1;
background:${({ theme }) => theme.navbar};
color: ${({ theme }) => theme.text_primary};
font-weight: bold;
font-size:22px;
padding:14px 50px;
display:flex;
align-items:center;
justify-content:space-between;
box-shadow:0 0 10px rgba(0,0,0,0.15);
@media only screen and (max-width: 600px) {
    padding:10px 20px;
}
`

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname.split("/")[1];

    return (
        <Container>ImagiNation

            {path === "create-post" ? (
                <Button text="Explorer"
                    leftIcon={<ExploreRounded
                        style={{ fontSize: "18px" }} />}
                    onClick={() => navigate("/")}
                />
            ) : (<Button text="Créer un post"
                leftIcon={<AddRounded
                    style={{
                        fontSize: "18px",
                    }}
                />}
                onClick={() => navigate("/create-post")}
                type={"secondary"}
            />)}

        </Container>
    )
}

export default Navbar