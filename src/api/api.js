import {
    createApi, fetchBaseQuery,

} from '@reduxjs/toolkit/query/react'

export const bashHash = 'd1df32e147635a3f60183ada586521f5'
export const publicKey = '6d2f12421182427130cb956310f6627e'
export const LIMMIT = 20
export const endApi = `ts=1&apikey=${publicKey}&hash=${bashHash}`
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://gateway.marvel.com/v1/public/'}),
    tagTypes: [
        'characterServices', 
        'comicsServices', 
        'seriesServices', 
        'creatorsServices', 
        'eventsServices',
        'storiesServices'
    ],
    endpoints: builder => ({})
})