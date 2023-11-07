import { LIMMIT, apiSlice, bashHash, publicKey } from "../api/api";

export const creatorsServices = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getCreatorsAll: build.query({
            query: ({ search, limit, offset }) => ({
                url: 'creators',
                params: {
                    limit: limit ? limit : LIMMIT   ,
                    offset: offset,
                    nameStartsWith: search,
                    orderBy: 'modified',
                    ts: 1,
                    apikey: publicKey,
                    hash: bashHash
                }
            }),
            transformResponse: (res) => res.data.results,            
            providesTags: ['creatorsServices'],
        })
    })
})

export const {
    useGetCreatorsAllQuery  
} = creatorsServices