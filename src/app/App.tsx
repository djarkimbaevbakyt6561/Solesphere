import { Providers } from './providers/Providers';
import { AppRouter } from './routes/appRouter';

function App() {
   return (
      <Providers>
         <AppRouter />
      </Providers>
   );
}

export default App;
