// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { FiInfo, FiAlertTriangle } from 'react-icons/fi';
import { FiGithub, FiLinkedin, FiArrowUp ,FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import Header from './components/Header';
import Hero from './components/Hero';
import InputSection from './components/InputSection';
import ResultCard from './components/ResultCard';
import HistoryList from './components/HistoryList';
import LoadingSpinner from './components/LoadingSpinner';
import { articleAPI } from './services/api';
import { storage } from './utils/storage';
import BlogPage from './components/BlogPage'; // New
import ContactPage from './components/ContactPage'; // New
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";



function App() {
  const [appLoading, setAppLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Load history from localStorage on initial render
    const savedHistory = storage.getHistory();
    setHistory(savedHistory);
  }, []);
useEffect(() => {
  const timer = setTimeout(() => {
    setAppLoading(false);
  }, 2500); // 2.5 seconds loading

  return () => clearTimeout(timer);
}, []);
if (appLoading) {
  return <LoadingScreen />;
}

  const handleSummarize = async (url) => {
    setIsLoading(true);
    setError('');
    setSummary(null);

    try {
      const result = await articleAPI.summarizeArticle(url);
      
      if (result.success) {
        setSummary(result);
        toast.success('Article summarized successfully!');
      } else {
        setError(result.error);
        toast.error(result.error);
      }
    } catch (error) {
      const errorMessage = error.message || 'Failed to summarize article. Please try again.';
      setError(errorMessage);
      toast.error(errorMessage);
      console.error('Summarization error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveSummary = (summaryToSave) => {
    const saved = storage.saveSummary(summaryToSave);
    if (saved) {
      setHistory(storage.getHistory());
      toast.success('Summary saved to history!');
    }
  };

  const handleSelectHistory = (historyItem) => {
    setSummary(historyItem);
    window.scrollTo({ top: 600, behavior: 'smooth' });
  };

  const handleDeleteHistory = (id) => {
    storage.deleteSummary(id);
    setHistory(storage.getHistory());
    toast.success('Summary removed from history');
  };

  const handleClearHistory = () => {
    if (window.confirm('Are you sure you want to clear all history?')) {
      storage.clearHistory();
      setHistory([]);
      toast.success('All history cleared');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white dark:from-gray-900 dark:to-violet-950">
      <Toaster
        position="top-right"
        toastOptions={{
          className: 'glass-card',
          style: {
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(139, 92, 246, 0.2)',
          },
          success: {
            iconTheme: {
              primary: '#8b5cf6',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      
      <Header />
      <ScrollToTop />
      <main className="container mx-auto px-4 py-8">

<Routes>
<Route
  path="/"
  element={
    <>


        <Hero />
        
        <section className="max-w-6xl mx-auto">
          <InputSection onSummarize={handleSummarize} isLoading={isLoading} />
          
          {/* API Status */}
          {!import.meta.env.VITE_RAPIDAPI_KEY && (
            <div className="mb-8 p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 
                          border border-yellow-500/30 rounded-xl">
              <div className="flex items-center space-x-3">
                <FiAlertTriangle className="text-yellow-600 dark:text-yellow-400 text-xl" />
                <div>
                  <p className="font-semibold text-yellow-700 dark:text-yellow-300">
                    API Key Required
                  </p>
                  <p className="text-sm text-yellow-600 dark:text-yellow-400">
                    Please add your RapidAPI key to .env file to enable summarization.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Error Display */}
          {error && (
            <div className="mb-8 p-6 bg-gradient-to-r from-red-500/10 to-pink-500/10 
                          border border-red-500/20 rounded-2xl">
              <div className="flex items-start space-x-3">
                <FiInfo className="text-red-500 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">
                    Error Processing Article
                  </h3>
                  <p className="text-red-500 dark:text-red-300">{error}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Try a different URL or check if the article is publicly accessible.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="glass-card rounded-2xl p-12 text-center mb-8">
              <LoadingSpinner size="lg" text="AI is analyzing the article..." />
              <div className="mt-8 max-w-md mx-auto space-y-3">
                <p className="text-gray-600 dark:text-gray-400">
                  ✨ Extracting key points...
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  📊 Analyzing content structure...
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  🎯 Generating concise summary...
                </p>
              </div>
            </div>
          )}

          {/* Results Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {summary && (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                      Summary Result
                    </h2>
                    <button
                      onClick={() => setSummary(null)}
                      className="text-sm text-gray-500 hover:text-gray-700 
                               dark:hover:text-gray-300 transition-colors"
                    >
                      Clear Result
                    </button>
                  </div>
                  <ResultCard summary={summary} onSave={handleSaveSummary} />
                </>
              )}
            </div>

            <div className="lg:col-span-1">
              <HistoryList
                history={history}
                onSelect={handleSelectHistory}
                onDelete={handleDeleteHistory}
                onClear={handleClearHistory}
              />
            </div>
          </div>
        </section>
  </>
  }
/>

<Route path="/Blogpage" element={<BlogPage />} />

<Route path="/Contactpage" element={<ContactPage />} />

</Routes>
      <footer className="mt-16 pt-8 border-t border-violet-200 dark:border-violet-900">
  <div className="text-center text-gray-600 dark:text-gray-400">
{/* Brand / Copyright */}
    <p className="mb-2 font-medium">
      © {new Date().getFullYear()} <span className="text-violet-600 dark:text-violet-400">AI Article Summarizer</span>
    </p>
    <p className="mb-2">
      Built with ❤️ using React, Vite & Tailwind CSS
    </p>

   <div className="flex justify-center space-x-6 mt-4">

  {/* GitHub */}
  <a
    href="https://github.com/developershubham01"
    target="_blank"
    rel="noopener noreferrer"
    className="text-violet-600 dark:text-violet-400 hover:scale-110 transition"
  >
    <FiGithub size={22} />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/shubham-sharma395/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-violet-600 dark:text-violet-400 hover:scale-110 transition"
  >
    <FiLinkedin size={22} />
  </a>

  {/* X (Twitter) */}
  <a
    href="https://x.com/SharmaShub17390"
    target="_blank"
    rel="noopener noreferrer"
    className="text-violet-600 dark:text-violet-400 hover:scale-110 transition"
  >
    <FaXTwitter size={20} />
  </a>

  {/* Email */}
  <a
    href="mailto:developershubham2005@gmail.com"
    className="text-violet-600 dark:text-violet-400 hover:scale-110 transition"
  >
    <FiMail size={22} />
  </a>

</div>


    {/* Footer Links */}
    <div className="flex justify-center space-x-4 mt-4">
      <a href="#" className="text-violet-600 dark:text-violet-400 hover:underline text-sm">
        Privacy Policy
      </a>
      <a href="#" className="text-violet-600 dark:text-violet-400 hover:underline text-sm">
        Terms of Service
      </a>
      <a href="/Contactpage" className="text-violet-600 dark:text-violet-400 hover:underline text-sm">
        Contact
      </a>
    </div>

    {/* Back To Top */}
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="mx-auto mt-6 flex items-center space-x-2 px-4 py-2 
                 bg-gradient-to-r from-violet-600 to-purple-600 text-white 
                 rounded-xl shadow hover:scale-105 transition"
    >
      <FiArrowUp />
      <span className="text-sm">Back to Top</span>
    </button>

  </div>
</footer>

      </main>
    </div>
  );
}

export default App;