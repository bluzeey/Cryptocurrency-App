import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders={
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'f466d5b6f0mshcc168a1529c8acap1b5e8ejsnf72c0338e51d'
}
const baseUrl='https://bing-news-search1.p.rapidapi.com/news'

const createRequest=(url)=>({url,headers:cryptoNewsHeaders})

export const cryptoNewsApi= createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query:({newsCategory,count})=>createRequest(`/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const {useGetCryptoNewsQuery}=cryptoNewsApi;