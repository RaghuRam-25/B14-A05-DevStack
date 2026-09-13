import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TechGrid from './components/TechGrid';
import StackSidebar from './components/StackSidebar';
import Footer from './components/Footer';

type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading json data:', err);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`, { position: 'bottom-right' });
      return;
    }

    setSelectedStack((prev) => [...prev, tech]);
    toast.success(`Added ${tech.name} to your stack!`, { position: 'bottom-right' });
  };

  const handleRemoveFromStack = (id: string) => {
    const itemToRemove = selectedStack.find((item) => item.id === id);
    setSelectedStack((prev) => prev.filter((item) => item.id !== id));
    toast.info(`Removed ${itemToRemove?.name || 'item'} from stack`, { position: 'bottom-right' });
  };

  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.error('Cleared all items from stack!', { position: 'bottom-right' });
  };

  return (
    <div className="min-h-screen bg-[white] text-slate-100 flex flex-col font-sans">
      <Navbar />
      <Banner />

      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-6 items-start">
          <div>
            {loading ? (
              <div className="flex justify-center items-center py-20 text-slate-200">
                <span className="loading loading-spinner loading-lg text-primary"></span>
                <p className="ml-3 font-semibold">Loading Technologies...</p>
              </div>
            ) : (
              <TechGrid technologies={technologies} onAddToStack={handleAddToStack} selectedStack={selectedStack} />
            )}
          </div>

          <div>
            <StackSidebar selectedStack={selectedStack} onRemove={handleRemoveFromStack} onRemoveAll={handleRemoveAll} />
          </div>
        </div>
      </main>

      <Footer />
      <ToastContainer aria-label="Notifications" autoClose={2500} />
    </div>
  );
}

export default App;