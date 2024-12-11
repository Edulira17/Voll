import Container from "./components/Container";
import "./App.css";
import Cabecalho from "./components/Cabecalho";
import Titulo from "./components/Titulo";
import Rodape from "./components/Rodape";
import Tabela from "./components/Tabela";
import Grafico from "./components/Grafico";
import useDadosConsulta from "./hooks/useDadosConsulta";
import useDadosProfissional from "./hooks/useDadosProfissional";
import Avaliacao from "./components/Avaliacao";
import Botao from "./components/Botao";
import Subtitulo from "./components/Subtitulo";

function App() {
  const { dados: consultas, erro: consultasErro } = useDadosConsulta();
  const { dados: profissionais, erro: profissionaisErro } = useDadosProfissional();

  if (consultasErro || profissionaisErro) {
    console.log("Ocorreu um erro na requisição!");
  }

  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Botao>Cadastrar Especialistas</Botao>
        <Titulo imagem="consulta">Consultas do Dia</Titulo>
        <Subtitulo>Dezembro/24</Subtitulo>
        <Tabela consultas={consultas} />
        <Grafico consultas={consultas} profissionais={profissionais} />
        <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
        <Avaliacao profissionais={profissionais}/>
      </Container>
      <Rodape />
    </>
  );
}

export default App;
