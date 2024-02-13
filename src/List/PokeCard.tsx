import styled from "@emotion/styled";
import PokeNameChip from "../common/PokeNameChip";
import PokeMarkChip from "../common/PokeMarkChip";
import {useQuery} from "react-query";
import {pokemonDetailDataFetching, pokemonDetailDataParsedType} from "../Service/pokemonService";
import {useEffect, useState} from "react";
import pokeNameChip from "../common/PokeNameChip";
import {useNavigate} from "react-router-dom";

const imgSrc = "https://mblogthumb-phinf.pstatic.net/20160817_259/retspe_14714118890125sC2j_PNG/%C7%C7%C4%AB%C3%F2_%281%29.png?type=w800"

interface PokeCardProps {
    name: string;
    url: string;
}

const PokeCard = ({ name, url }: PokeCardProps) => {

    const [pokemonDetail, setPokemonDetail] = useState<pokemonDetailDataParsedType>()

    const navigate = useNavigate()

    useEffect(() => {
         pokemonDetailDataFetching(name).then(response => {
             setPokemonDetail(response)
         })


    }, [name]);

    return <Item onClick={() => navigate(`/pokemon/${name}`)}>
        <Header>
            <PokeNameChip name={pokemonDetail?.name} id={pokemonDetail?.id}/>
        </Header>
        <Body>
            <Image src={pokemonDetail?.images.officialArtworkFront} alt={pokemonDetail?.name}/>
        </Body>
        <Footer>
            <PokeMarkChip/>
        </Footer>
    </Item>
}

const Item = styled.li`
  display: flex;
  flex-direction: column;
  
  width: 250px;
  height: 380px;
  
  padding: 8px;
  
  cursor: pointer;
  
  border: 1px solid #c0c0c0;
  box-shadow: 1px 1px 3px 1px #c0c0c0;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
  }
  
  &:active {
    background-color: yellow;
    opacity: 0.8;
    transition: background-color 0s;
  }
`

const Header = styled.section`
  display: flex;
  flex-direction: row;
`

const Body = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`

const Image = styled.img`
    width: 180px;
  height: 180px;
`

const Footer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`






export default PokeCard