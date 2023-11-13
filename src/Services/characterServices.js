import { LIMMIT, apiSlice, bashHash, endApi, publicKey } from "../api/api";


export const characterServices = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getCharacterAll: build.query({
            query: ({offset, searchString, limit}) => ({
                    url: 'characters',
                    params: {            
                        limit: limit ? limit : LIMMIT,
                        offset: offset,
                        nameStartsWith: searchString,
                        orderBy: '-modified',
                        ts: 1,
                        apikey: publicKey,
                        hash: bashHash
                    }
                }),
            transformResponse: (res) => res.data.results,
            providesTags: ['characterServices'],
        }),
        getCharacterID: build.query({
            query: ({characterID}) => ({
               url: `characters/${characterID}`,
               params: {
                ts: 1,
                apikey: publicKey,
                hash: bashHash
            }
            }),
            transformResponse: (res) => res.data.results[0],
            providesTags: ['characterServices']
        }),
        getCharacterIdComics: build.query({
            query: (characterID) => `characters/${characterID}/comics?${endApi}`,
            providesTags: ['characterServices']
        }),
        getCharacterIdEvents: build.query({
            query: (characterID) => `characters/${characterID}/events?${endApi}`,
            providesTags: ['characterServices']
        }),
        getCharacterIdSeries: build.query({
            query: (characterID) => `characters/${characterID}/series?${endApi}`,
            providesTags: ['characterServices']
        }),
        getCharacterIdStories: build.query({
            query: (characterID) => `characters/${characterID}/stories?${endApi}`,
            providesTags: ['characterServices']
        })
    })
})

export const {
      useGetCharacterAllQuery,
    useGetCharacterIDQuery,
    useGetCharacterIdComicsQuery,
    useGetCharacterIdEventsQuery,
    useGetCharacterIdSeriesQuery,
    useGetCharacterIdStoriesQuery,
    useLazyGetCharacterAllQuery
} = characterServices