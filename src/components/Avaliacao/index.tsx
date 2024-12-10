import Card from "./Card"
import IProfissional from "../../types/IProfissional"
import styled from "styled-components"

const SecaoCard = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`

const Avaliacao = ({profissionais} : {profissionais: IProfissional[] | null}) => {
  return (
    <SecaoCard>
      {profissionais?.map((profissional) => {
        return <Card profissional={profissional}/>
      })}
    </SecaoCard>
  )
}


export default Avaliacao