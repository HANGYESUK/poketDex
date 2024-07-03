import styled from "@emotion/styled";
import PokeCard from "./PokeCard";
import {useInfiniteQuery} from "react-query";
import {useEffect, useRef, useState} from "react";
import {pokemonListDataFetching, pokemonListDataType} from "../Service/pokemonService";
import PokemonDetailModal from "../Detail/PokemonDetailModal";
import PokemonModalBtn from "../Detail/PokemonModalBtn";

const PokeCardList = () => {
    const [pokemonList, setPokemonList] = useState<pokemonListDataType>({
        count: 0,
        next: '',
        results: []
    })

    console.log('배포 자동화 성공!!')

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

    const [selectPokemon, setSelectPokemon] = useState<string>('')

    const listBottomRef = useRef<HTMLDivElement>(null)


        const { data, fetchNextPage, isFetchingNextPage, hasNextPage, isFetching } = useInfiniteQuery(
            'pokemonList',
            ({ pageParam }) => pokemonListDataFetching(pageParam),
            {
                getNextPageParam: (lastPage, allPages) => {
                    const nextPageUrl = lastPage.next;
                    return nextPageUrl;
                },
            }
        );


    useEffect(() => {
        const intersectionHandler: IntersectionObserverCallback = async (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting && !isFetchingNextPage && hasNextPage) {
                await fetchNextPage();
            }
        };

        const observer = new IntersectionObserver(intersectionHandler);
        if (listBottomRef.current) {
            observer.observe(listBottomRef.current);
        }

        return () => observer.disconnect();
    }, [ listBottomRef, hasNextPage ]);

    useEffect(() => {
        if(data) {
            const isFirstPage = data.pages.length === 1
            setPokemonList({
                ...data.pages[isFirstPage ? 0 : data.pages.length -1],
                results: data.pages.map(item => {
                    return item.results
                }).flat(2)
            })
        }
    }, [data, isFetching])

    return <List id={'pokemonList'}>
        <PokemonModalBtn onOpenModal={() => {
            if(selectPokemon) setIsModalVisible(prevState => !prevState)
        }}/>
        {isModalVisible && <PokemonDetailModal pokemonName={selectPokemon} onClose={() => setIsModalVisible(prevState => !prevState)}/>}
        {
            pokemonList.results.map((item, index) => {
                return <PokeCard {...item} key={`${index}`} onClickPokemon={() => {
                    setSelectPokemon(item.name)
                    setIsModalVisible(prevState => !prevState)
                }}/>
            })
        }
        <div ref={listBottomRef} />
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