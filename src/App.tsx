import Container from "./components/Container";
import "./App.css";
import Cabecalho from "./components/Cabecalho";
import Titulo from "./components/Titulo";
import Rodape from "./components/Rodape";
import Tabela from "./components/Tabela";
import useDadosConsulta from "./hooks/useDadosConsulta";

function App() {
  const { dados, erro } = useDadosConsulta();

  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Tabela consultas={dados}/>
      </Container>
      <Rodape />
    </>
  );
}

export default App;
