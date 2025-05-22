import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Todos {
    id: string
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }), 
  endpoints: (builder) => ({
    getTodos: builder.query<Todos[], void>({
        query: () => '/todos',
      }),
  }), // define endpoints later
})

export const { useGetTodosQuery } = apiSlice
