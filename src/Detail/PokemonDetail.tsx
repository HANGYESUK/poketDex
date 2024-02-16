import styled from "@emotion/styled";
import PokeMarkChip from "../common/PokeMarkChip";
import {useParams} from "react-router-dom";
import {pokemonDetailDataFetching} from "../Service/pokemonService";
import {useQuery} from "react-query";
import {useEffect, useLayoutEffect} from "react";

const PokemonDetail = () => {
    const pokemonName  = useParams().name || 'pikachu'


    const { data: pokemonDetail, isLoading  } = useQuery(`pokemonDetail${pokemonName}`, () => pokemonDetailDataFetching(pokemonName))

    useEffect(() => {
        const merge = (arr1?: number[], arr2?: number[]) => {
            var result = []
            let i = 0;
            let j = 0;
            if(arr1 && arr2) {
                while(i < arr1.length && j < arr2.length) {

                    if(arr2[j] > arr1[i]) {
                        result.push(arr1[i])
                        i++
                    }
                    else {
                        result.push(arr2[j])
                        j++
                    }
                }

                while(i < arr1.length) {
                    result.push(arr1[i])
                    i++
                }
                while(j < arr2.length) {
                    result.push(arr2[j])
                    j++
                }
            }

            return result

        }

        const  mergeSort = (arr: number[]): number[] => {
            if(arr.length <= 1) return arr;
            let mid = Math.floor(arr.length/2)
            let arr1 = mergeSort(arr.slice(0, mid))
            let arr2 = mergeSort(arr.slice(mid))
            return merge(arr1, arr2)
        }

        mergeSort([10, 12, 11, 12])
    }, []);

    return <Container>
        <ImageContainer>
            <Image src={pokemonDetail?.images.frontDefault} alt={"포켓몬 사진"}/>
        </ImageContainer>
        <Divider/>
        <Body>
            <h2>기본 정보</h2>
            <Table>
                <tbody>
                <TableRow>

                    <TableHeader>번호</TableHeader>
                    <td>{pokemonDetail?.id}</td>

                </TableRow>
                <TableRow>
                    <TableHeader>이름</TableHeader>
                    <td>{`${pokemonDetail?.koreanName} (${pokemonDetail?.name})`}</td>
                </TableRow>
                <TableRow>
                    <TableHeader>타입</TableHeader>
                    <td>{pokemonDetail?.types.toString()}</td>
                </TableRow>
                <TableRow>
                    <TableHeader>키</TableHeader>
                    <td>{`${pokemonDetail?.height} M`}</td>
                </TableRow>
                <TableRow>
                    <TableHeader>몸무게</TableHeader>
                    <td>{`${pokemonDetail?.weight} Kg`}</td>
                </TableRow>
                </tbody>
            </Table>
            <h2>능력치</h2>
            <Table>
                <tbody>

                {
                    pokemonDetail?.baseStats.map(item => {
                        return  <TableRow key={item.name}>

                            <TableHeader>{item.name}</TableHeader>
                            <td>{item.value}</td>

                        </TableRow>
                    })
                }

                </tbody>
            </Table>
        </Body>
        <Footer>
            <PokeMarkChip />
        </Footer>
    </Container>
}

const Container = styled.section`
  border: 1px solid #c0c0c0;
  margin: 16px 32px;
  border-radius: 16px;
  box-shadow: 1px 1px 1px 1px #c0c0c0;
`

const ImageContainer = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`

const Image = styled.img`
width: 350px;
height: 350px;
`
const Divider = styled.hr`
  margin: 32px;
  border-style: none;
  border-top: 1px dashed #d3d3d3;
`

const Body = styled.section`
  margin: 0 32px;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0 auto 16px;
  
  th, td {
    padding: 6px 12px;
  }
`
const TableHeader = styled.th`
    width: 1px;
  white-space: nowrap;
  text-align: left;
  font-weight: normal;
  font-size: 14px;
  color: #a0a0a0;
`


const TableRow = styled.tr`
  border-width: 1px 0;
    border-style: solid;
  border-color: #f0f0f0;
`

const Footer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 32px 16px;
`

export default PokemonDetail