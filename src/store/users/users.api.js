import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: '/'}),
    endpoints: (builder) => ({
        // https://randomuser.me/api/?inc=gender,name,nat

        userList: builder.query({
            query: (page = 1, result = 10) => `https://randomuser.me/api/?results=${result}&page=${page}&inc=picture,name,login,phone,email`,
        }),
        userInfo: builder.query({
            query: (uuid) => `https://randomuser.me/api/?uuid=${uuid}&inc=picture,name,login,phone,email`,
        }),
    }),
})

export const {useUserListQuery, useUserInfoQuery} = api
