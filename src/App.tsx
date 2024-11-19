import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import Navbar from './components/Navigation/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Hero />
        <Skills />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
        <Toaster position="top-right" />
      </div>
    </QueryClientProvider>
  );
}

export default App;