import {types} from "util";

export interface pokemonListDataType {
    count: number;
    next : string;
    results: {
        name: string;
        url: string
    }[]
}

export interface pokemonDetailDataTye {
    id: number;
    weight: number;
    height: number;
    name: string;
    types: {
        type: {
            name: string
        }
    }[];
    sprites: {
        front_default: string,
        other: {
            dream_world: {
                front_default: string;
            }
            'official-artwork': {
                front_default: string;
            }
        }

    }
    stats: {
        base_stat: number;
        stat: {
            name: string;
            url: string;
        }
    }[]
}

export interface pokemonDetailDataParsedType {
    id: number;
    weight: number;
    height: number;
    name: string;
    types: string[];
    images: {
        frontDefault: string;
        dreamWorldFront: string;
        officialArtworkFront: string;
    },
    baseStats: {
        name: string;
        value: number;
    }[]
}

export const pokemonListDataFetching = async () => {
    const data: pokemonListDataType = await fetch("https://pokeapi.co/api/v2/pokemon/").then((response) => response.json());
    return data
}

export const pokemonDetailDataFetching = async (name: string): Promise<pokemonDetailDataParsedType> => {
    const detail: pokemonDetailDataTye  = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => response.json());
    return {
        id: detail.id,
        name: detail.name,
        height: detail.height / 10, //미터 단위
        weight: detail.weight / 10, //kg 단위
        types: detail.types.map(item => item.type.name),
        images: {
            frontDefault: detail.sprites.front_default,
            dreamWorldFront: detail.sprites.other.dream_world.front_default,
            officialArtworkFront: detail.sprites.other['official-artwork'].front_default,
        },
        baseStats: detail.stats.map(item => {
            return {
                name: item.stat.name,
                value: item.base_stat,
            }
        })
    }
}

