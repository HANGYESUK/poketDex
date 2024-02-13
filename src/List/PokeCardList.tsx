import styled from "@emotion/styled";
import PokeCard from "./PokeCard";
import {useQuery} from "react-query";
import { pokemonListDataFetching, pokemonListDataType} from "../Service/pokemonService";
import {useEffect, useState} from "react";

const PokeCardList = () => {
    const [pokemonList, setPokemonList] = useState<pokemonListDataType>({
        count: 0,
        next: '',
        results: []
    })

    const { data, isSuccess } = useQuery('pokemonListData', pokemonListDataFetching)

    useEffect(() => {
        if(data) {
            setPokemonList(data)
        }
    }, [isSuccess])

    return <List>
        {
            pokemonList.results.map((item, index) => {
                return <PokeCard {...item} key={`${index}`}/>
            })
        }
    </List>
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`

export default PokeCardList