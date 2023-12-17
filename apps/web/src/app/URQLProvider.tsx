'use client';

import { useMemo } from 'react';
import { cacheExchange } from '@urql/exchange-graphcache';
import { relayPagination } from '@urql/exchange-graphcache/extras';
import { refocusExchange } from '@urql/exchange-refocus';
import { UrqlProvider, createClient, fetchExchange, ssrExchange } from '@urql/next';

import schema from '@/gql/graphql';

type URQLProviderProps = {
  children: React.ReactNode;
};

export default function URQLProvider({ children }: URQLProviderProps) {
  const [client, ssr] = useMemo(() => {
    if (!process.env.NEXT_PUBLIC_API_URL) throw new Error('Missing NEXT_PUBLIC_API_URL');

    const cache = cacheExchange({
      schema,
      resolvers: {
        Root: {
          allStarships: relayPagination(),
        },
      },
    });

    const ssr = ssrExchange();
    const client = createClient({
      url: process.env.NEXT_PUBLIC_API_URL,
      exchanges: [refocusExchange(), cache, ssr, fetchExchange],
      suspense: true,
    });

    return [client, ssr];
  }, []);

  return (
    <UrqlProvider client={client} ssr={ssr}>
      {children}
    </UrqlProvider>
  );
}
