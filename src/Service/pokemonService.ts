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
        back_default: string,

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

export interface pokemonSpeciesDataType {
    color: {
        name: string
    },
    names: {
        name: string,
        language: {
            name: string
        }
    }[]
}

export interface pokemonDetailDataParsedType {
    id: number;
    weight: number;
    height: number;
    name: string;
    koreanName: string;
    color: string;
    types: string[];
    images: {
        frontDefault: string;
        dreamWorldFront: string;
        officialArtworkFront: string;
        backDefault?: string;
    },
    baseStats: {
        name: string;
        value: number;
    }[]
}

export const pokemonListDataFetching = async (nextPage: string) => {
    const data: pokemonListDataType = await fetch(nextPage ? nextPage : process.env.REACT_APP_POKEMON_API_HOST || '').then((response) => response.json());
    return data
}

export const pokemonDetailDataFetching = async (name: string) => {

    const pokemonDetailUrl = `${process.env.REACT_APP_POKEMON_API_HOST}/${name}`
    const pokemonSpeciesUrl = `${process.env.REACT_APP_POKEMON_SPEC_API_HOST }/${name}`

    const detail: pokemonDetailDataTye  = await fetch(pokemonDetailUrl).then((response) => response.json());
    const species: pokemonSpeciesDataType  = await fetch(pokemonSpeciesUrl).then((response) => response.json());

    const koreanName = species.names.find(item => item.language.name === 'ko')?.name || detail.name

    const resultData: pokemonDetailDataParsedType = {
        id: detail.id,
        name: detail.name,
        koreanName: koreanName,
        color: species.color.name,
        height: detail.height / 10, //미터 단위
        weight: detail.weight / 10, //kg 단위
        types: detail.types.map(item => item.type.name),
        images: {
            frontDefault: detail.sprites.front_default,
            dreamWorldFront: detail.sprites.other.dream_world.front_default,
            officialArtworkFront: detail.sprites.other['official-artwork'].front_default,
            backDefault: detail.sprites.back_default,
        },
        baseStats: detail.stats.map(item => {
            return {
                name: item.stat.name,
                value: item.base_stat,
            }
        })
    }

    return resultData
}

