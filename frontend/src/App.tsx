import './App.css';
import { Button, ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <h3 className='text-sm'>hello word</h3>
      <Button>supsup</Button>
    </ChakraProvider>
  );
}

export default App;
