import styled from "@emotion/styled";
import PokeCard from "./PokeCard";
import {useInfiniteQuery} from "react-query";
import {useEffect, useRef, useState} from "react";
import {pokemonListDataFetching, pokemonListDataType} from "../Service/pokemonService";

const PokeCardList = () => {
    const [pokemonList, setPokemonList] = useState<pokemonListDataType>({
        count: 0,
        next: '',
        results: []
    })

    const listBottomRef = useRef<HTMLDivElement>(null)


        const { data, fetchNextPage, isFetchingNextPage, hasNextPage, isFetching, isError } = useInfiniteQuery(
            'pokemonList',
            ({ pageParam }) => pokemonListDataFetching(pageParam),
            {
                getNextPageParam: (lastPage, allPages) => {
                    const nextPageUrl = lastPage.next;
                    return nextPageUrl;
                },
            }
        );


    const intersectionHandler: IntersectionObserverCallback = async (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isFetchingNextPage && hasNextPage) {
            await fetchNextPage();
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(intersectionHandler);
        if (listBottomRef.current) {
            observer.observe(listBottomRef.current);
        }

        return () => observer.disconnect();
    }, [listBottomRef, hasNextPage]);

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
    }, [isFetching])

    useEffect(() => {
        if(sessionStorage.getItem('scrollValue')) {
            console.log(window.innerHeight)
            window.scrollTo(0, Number(sessionStorage.getItem('scrollValue')))
        }
    }, []);

    return <List id={'pokemonList'}>
        {
            pokemonList.results.map((item, index) => {
                return <PokeCard {...item} key={`${index}`}/>
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