import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Todos {
  id: string;
  value: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
  tagTypes: ["todos"],
  endpoints: (builder) => ({
    getTodos: builder.query<Todos[], void>({
      query: () => "/todos",
      providesTags: ["todos"],
    }),

    addTodos: builder.mutation<Todos, any>({
      query: ({ id, value }) => ({
        url: `/todos`,
        method: "POST",
        body: { id, value },
      }),
    }),
  }),

  // define endpoints later
});

export const { useGetTodosQuery, useAddTodosMutation } = apiSlice;
