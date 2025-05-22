"use client";

import { store } from "@/store/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

// This file includes providers that works with 'use client'

const Providers = ({ children }: { children: ReactNode }): ReactNode => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  );
};

export default Providers;
