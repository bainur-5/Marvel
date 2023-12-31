import { LIMMIT, apiSlice, bashHash, publicKey } from "../api/api";

export const seriesServices = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getSeriesAll: build.query({
            query: ({ search, limit, offset }) => ({
                url: 'series',
                params: {
                    limit: limit ? limit : LIMMIT   ,
                    offset: offset,
                    titleStartsWith: search,
                    seriesType: 'ongoing',
                    orderBy: '-modified',
                    ts: 1,
                    apikey: publicKey,
                    hash: bashHash
                }
            }),
            transformResponse: (res) => res.data.results,            
            providesTags: ['seriesServices'],
        })
    })
})

export const {
    useGetSeriesAllQuery
} = seriesServices