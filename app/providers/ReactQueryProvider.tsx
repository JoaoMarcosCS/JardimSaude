"use client";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

const client = new QueryClient();

const ReactQueryProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
    )
}

export default ReactQueryProvider;