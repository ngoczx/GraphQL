import Container from 'react-bootstrap/Container';
import MovieList from './components/Movie';
import FormComponent from './components/Form';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Container className='py-3 mt-3'>
        <h1 className='text-center text-info mb-5'>First GraphQL Project</h1>
        <FormComponent />
        <MovieList />
      </Container>
    </ApolloProvider>
  );
}

export default App;
