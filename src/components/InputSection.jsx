import React, { useState } from 'react';
import { FiLink, FiSend, FiAlertCircle } from 'react-icons/fi';

const InputSection = ({ onSummarize, isLoading }) => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const validateUrl = (inputUrl) => {
    try {
      new URL(inputUrl);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!url.trim()) {
      setError('Please enter a URL');
      return;
    }

    if (!validateUrl(url)) {
      setError('Please enter a valid URL (include http:// or https://)');
      return;
    }

    await onSummarize(url);
  };

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 mb-8 gradient-border bg-white/70 dark:bg-[#0f1222]">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="p-3 bg-gradient-to-br from-fuchsia-500 to-indigo-600 rounded-xl mr-4">
            <FiLink className="text-2xl text-white" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Paste Article URL
            </h2>
            <p className="text-black dark:text-white">
              Enter any article link below and get an AI-powered summary
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Input */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-500">
              <FiLink />
            </div>

            <input
              type="url"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setError('');
              }}
              placeholder="https://example.com/article"
              className="
              w-full pl-12 pr-4 py-4 rounded-xl
              bg-gray-50 dark:bg-[#16192e]
              border-2 border-indigo-200 dark:border-indigo-800
              focus:border-indigo-500 dark:focus:border-fuchsia-500
              focus:ring-2 focus:ring-indigo-500/20
              outline-none transition-all
              text-gray-900 dark:text-white
              placeholder:text-gray-400 dark:placeholder:text-gray-500"
              disabled={isLoading}
            />
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-center space-x-2 text-red-500 bg-red-100/60 dark:bg-red-900/30 p-3 rounded-lg">
              <FiAlertCircle />
              <span className="text-sm">{error}</span>
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            <button
              type="submit"
              disabled={isLoading || !url.trim()}
              className="
              flex-1 flex items-center justify-center space-x-3 py-4 text-lg rounded-xl
              bg-gradient-to-r from-indigo-500 to-fuchsia-600
              hover:from-indigo-600 hover:to-fuchsia-700
              text-white shadow-lg transition"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <FiSend className="transform -rotate-45" />
                  <span>Generate Summary</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setUrl('')}
              disabled={isLoading}
              className="
              py-4 px-8 rounded-xl
              bg-gray-200 dark:bg-[#1e223f]
              text-gray-800 dark:text-gray-300
              hover:bg-gray-300 dark:hover:bg-[#292e52]
              transition"
            >
              Clear
            </button>

          </div>

          <div className="text-center">
            <p className="text-sm text-black dark:text-white">
              Try pasting links from: Medium, Wikipedia, news sites, blogs, etc.
            </p>
          </div>
        </form>

        {/* Tips */}
        <div className="mt-8 pt-8 border-t border-indigo-100 dark:border-indigo-900">
          <h3 className="font-semibold text-gray-800 dark:text-gray-300 mb-3">
            💡 Pro Tips
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-indigo-50 dark:bg-[#181c35] p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>For best results:</strong> Use direct article links
              </p>
            </div>

            <div className="bg-indigo-50 dark:bg-[#181c35] p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Supported:</strong> News, blogs, research papers
              </p>
            </div>

            <div className="bg-indigo-50 dark:bg-[#181c35] p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Processing:</strong> Usually 3–10 seconds
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default InputSection;
