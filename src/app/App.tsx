import { Providers } from './providers/Providers';
import { AppRouter } from './routes';

function App() {
   return (
      <Providers>
         <AppRouter />
      </Providers>
   );
}

export default App;
