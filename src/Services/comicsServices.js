import { LIMMIT, apiSlice, bashHash, publicKey } from "../api/api";

export const comicsServices = apiSlice.injectEndpoints({
    endpoints: (build) =>({
        getComicsAll: build.query({
            query: ({limit, offset, search}) => ({
                url: 'comics',
                params: {
                    limit: limit ? limit : LIMMIT,
                    offset: offset,              
                    titleStartsWith: search,   
                    orderBy: '-modified',  
                    ts: 1,
                    apikey: publicKey,
                    hash: bashHash
                }
            }),
            transformResponse: (res) => res.data.results,            
            providesTags: ['comicsServices'],
        }),
        getComiscID: build.query({
            query: ({comicsId}) => ({
                url: `comics/${comicsId}`,
                params: {  
                    ts: 1,
                    apikey: publicKey,
                    hash: bashHash
                }
            }),
            transformResponse: (res) => res.data.results[0],
            providesTags: ['comicsServices'],
        })
    })
})
export const {
    useGetComicsAllQuery,
    useGetComiscIDQuery
} = comicsServices