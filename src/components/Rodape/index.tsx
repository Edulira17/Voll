import styled from "styled-components";

import whatsapp from "./assets/whatsapp.png";
import instagram from "./assets/instagram.png";
import google from "./assets/google.png";
import facebook from "./assets/facebook.png";

const RodapeEstilizado = styled.footer`
  height: 100%;
  color: white;
  padding: 1em;
  background-color: var(--azul-escuro);
  text-align: center;
`;

const ListaEstilizada = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 24px;
  width: 10%;
  margin: 1em auto;
`;

const ItemEstilizado = styled.li`
  list-style-type: none;
`;

const Rodape = () => {
  return (
    <RodapeEstilizado>
      <ListaEstilizada>
        <ItemEstilizado>
          <a href="#">
            <img src={facebook} alt="" />
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
          <a href="#">
            <img src={whatsapp} alt="" />
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
          <a href="#">
            <img src={google} alt="" />
          </a>
        </ItemEstilizado>
      </ListaEstilizada>
      <p>2024 © Desenvolvido por Alura | Projeto fictício sem fins comerciais.</p>
    </RodapeEstilizado>
  )
};

export default Rodape;
