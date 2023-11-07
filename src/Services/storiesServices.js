import { LIMMIT, apiSlice, bashHash, publicKey } from "../api/api";

export const StoriesServices = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getStoriesAll: build.query({
            query: ({ search, limit, offset }) => ({
                url: 'stories',
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
            providesTags: ['storiesServices'],
        })
    })
})

export const {
    useGetStoriesAllQuery
} = StoriesServices