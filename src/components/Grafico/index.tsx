import { ResponsiveContainer } from "recharts";
import { Bar } from "recharts";
import { XAxis } from "recharts";
import { YAxis } from "recharts";
import { BarChart } from "recharts";
import IProfissional from "../../types/IProfissional";
import IConsulta from "../../types/IConsulta";
import useDadosGraficos from "./useDadosGraficos";

interface Props {
  profissionais: IProfissional[] | null;
  consultas: IConsulta[] | null;
}

interface IDados {
  nome: string;
  consultas: number;
}

const Grafico = ({ profissionais, consultas }: Props) => {
  let dados: Array<IDados> = useDadosGraficos({ profissionais, consultas });

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        layout="vertical"
        data={dados}
        margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
      >
        <XAxis type="number"></XAxis>
        <YAxis type="category" dataKey="nome"></YAxis>
        <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Grafico;