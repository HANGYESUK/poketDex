import styled from "@emotion/styled";

interface PokemonModalBtnProps {
    onOpenModal: () => void
}

const PokemonModalBtn = ({ onOpenModal }: PokemonModalBtnProps) => {
    return <BallImg src={'/pokeBall.png'} onClick={onOpenModal}/>
}

export default PokemonModalBtn

export const BallImg = styled.img`
  width: 100px;
  height: 100px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 999;
  &:hover {
    transition: 0.5s;
    transform: rotate(120);
  }
`