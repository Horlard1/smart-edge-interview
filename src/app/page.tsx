"use client";
import { useAddTodosMutation, useGetTodosQuery } from "@/api/apiSlice";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const { data, error, isLoading, refetch } = useGetTodosQuery();
  const [newListItem, setNewListItem] = useState("");
  const [addPost, { status, isLoading: loadingPost }] = useAddTodosMutation();

  return (
    <div className="w-full h-screen text-black justify-center items-center bg-gray-100 flex flex-col space-y-5">
      <div className="flex gap-5 items-center">
        <input
          value={newListItem}
          onChange={(e: any) => setNewListItem(e.target.value)}
          type="text"
          className="test-sm border border-gray-300 rounded-lg px-4 py-2.5"
          placeholder="Enter a todo list"
        />
        <button
          disabled={newListItem?.trim?.() === ""}
          onClick={async () => {
            const trimmedValue = newListItem?.trim?.();
            await addPost({
              id: data && data?.length + 1,
              value: trimmedValue,
            });
            setNewListItem("");
          }}
          className="px-4 py-2.5 disabled:bg-gray-300 disabled:text-gray-700 rounded-lg border hover:opacity-70  bg-blue-600 text-white cursor-pointer text-center text-sm"
        >
          {loadingPost ? "Loading..." : "+ Add"}
        </button>
      </div>
      {isLoading ? (
        <div className="grid grid-cols-2 gap-5 ">
          <div className="h-10 w-full bg-gray-200 animate-pulse"></div>
          <div className="h-10 w-full bg-gray-200 animate-pulse"></div>
        </div>
      ) : //@ts-ignore
      data?.length > 0 ? (
        <div className="border border-gray-300 rounded-lg">
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Todo</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.map?.((item) => (
                <tr key={item?.id}>
                  <td>{item?.id}</td>
                  <td>{item?.value}</td>
                  <td>
                    <button className="text-xs px-2 py-1.5 border rounded-lg hover:bg-red-600 hover:text-white">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p className="text-sm">No data avialable!</p>
        </div>
      )}
    </div>
  );
}
