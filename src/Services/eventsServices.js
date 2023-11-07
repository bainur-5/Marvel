import { LIMMIT, apiSlice, bashHash, publicKey } from "../api/api";

export const eventsServices = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getEventsAll: build.query({
            query: ({ search, limit, offset }) => ({
                url: 'events',
                params: {
                    limit: limit ? limit : LIMMIT   ,
                    offset: offset,
                    nameStartsWith: search,
                    orderBy: '-modified',
                    ts: 1,
                    apikey: publicKey,
                    hash: bashHash
                }
            }),
            transformResponse: (res) => res.data.results,            
            providesTags: ['eventsServices'],
        })
    })
})

export const {
    useGetEventsAllQuery
} = eventsServices