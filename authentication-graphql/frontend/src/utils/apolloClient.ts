import { ApolloClient, InMemoryCache } from '@apollo/client';
import Cookies from 'js-cookie';

const token = `Bearer ${Cookies.get('token')}`;

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_URI,
  cache: new InMemoryCache(),
  headers: { Authorization: token },
});
