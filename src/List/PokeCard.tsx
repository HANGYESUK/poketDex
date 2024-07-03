import styled from "@emotion/styled";
import PokeNameChip from "../common/PokeNameChip";
import PokeMarkChip from "../common/PokeMarkChip";
import {useQuery} from "react-query";
import {pokemonDetailDataFetching} from "../Service/pokemonService";
import {useMemo} from "react";
import {PokemonImagesSkeleton} from "../common/PokemonImagesSkeleton";

interface PokeCardProps {
    name: string;
    url: string;
    onClickPokemon: () => void;
    'data-cy'?: string;
}

const PokeCard = ({ name, url, onClickPokemon, 'data-cy': dataCy, }: PokeCardProps) => {

    const pokemonName = useMemo(() => name, [name])

     const { data: pokemonDetail, isLoading  } = useQuery(`pokemonDetail${pokemonName}`, () => pokemonDetailDataFetching(pokemonName))

    if(isLoading) {
        return (
            <Item color={'#fff'}>
                <Header>
                    <PokeNameChip name={'포켓몬'} color={'#ffca99'} id={0}/>
                </Header>
                <Body>
                    <PokemonImagesSkeleton />
                </Body>
                <Footer>
                    <PokeMarkChip/>
                </Footer>
            </Item>
        )
    }

    return <Item color={'#fff'} data-cy={dataCy} onClick={() => {
        onClickPokemon()
        sessionStorage.setItem("scrollValue", window.pageYOffset.toString())
    }}>
        <Header>
            <PokeNameChip name={pokemonDetail?.koreanName} color={pokemonDetail?.color} id={pokemonDetail?.id}/>
        </Header>
        <Body>
            <Image src={pokemonDetail?.images.frontDefault} alt={pokemonDetail?.name}/>
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