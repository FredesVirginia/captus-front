import { BrowserRouter } from 'react-router-dom'
import '../src/styles/App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from 'react-hot-toast';
import Router from './routes/route';
function App() {
  const queryClient = new QueryClient();

  return (
   <BrowserRouter>
      <QueryClientProvider client={queryClient}>
       
          <Toaster />
          <Router />
      
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
