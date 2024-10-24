import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function TanstackQueryProvider({ children }) {
  //INSTANCE-QUERY CLIENT
  const queryClient = new QueryClient({
      defaultOptions: {
            queries: {
            //   gcTime: 5000,
            //   staleTime: 10000,
            //   refetchInterval: 3000,
            //   refetchOnMount: false,
            //   refetchOnWindowFocus: false,
            //   refetchOnReconnect: false,
              // enabled: false,
          
            },
          },

  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default TanstackQueryProvider;
