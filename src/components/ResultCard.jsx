import React, { useState } from 'react';
import { FiCopy, FiCheck, FiExternalLink, FiCalendar, FiClock } from 'react-icons/fi';
import { formatDistanceToNow } from 'date-fns';

const ResultCard = ({ summary, onSave }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(summary.summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    if (onSave) {
      onSave(summary);
    }
  };

  const wordCount = summary.summary.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 mb-8 animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              AI Summary
            </h2>
            <span className="px-3 py-1 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-semibold rounded-full">
              Generated
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <FiCalendar className="text-violet-500" />
              <span>{new Date(summary.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiClock className="text-violet-500" />
              <span>{readingTime} min read</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>{wordCount} words</span>
            </div>
          </div>
        </div>

        <div className="flex space-x-3 mt-4 md:mt-0">
          <button
            onClick={handleCopy}
            className="flex items-center space-x-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 
                     hover:bg-white/80 dark:hover:bg-gray-700/80 rounded-lg 
                     border border-violet-200 dark:border-violet-800 
                     transition-all duration-200"
          >
            {copied ? (
              <FiCheck className="text-green-500" />
            ) : (
              <FiCopy className="text-violet-600 dark:text-violet-400" />
            )}
            <span className="text-sm font-medium">
              {copied ? 'Copied!' : 'Copy'}
            </span>
          </button>

          <a
            href={summary.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-500 
                     text-white hover:from-violet-600 hover:to-purple-600 rounded-lg 
                     transition-all duration-200"
          >
            <FiExternalLink />
            <span className="text-sm font-medium">Original</span>
          </a>
        </div>
      </div>

      {/* Original URL */}
      <div className="mb-6 p-4 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Original Article</p>
        <a
          href={summary.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-600 dark:text-violet-400 hover:underline font-medium truncate block"
        >
          {summary.url}
        </a>
      </div>

      {/* Summary Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="bg-gradient-to-br from-white to-violet-50 dark:from-gray-800 dark:to-violet-900/20 
                      p-6 rounded-xl border border-violet-100 dark:border-violet-800">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            📝 Key Summary
          </h3>
          <div className="space-y-4">
            {summary.summary.split('\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 pt-8 border-t border-violet-100 dark:border-violet-900">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Summary generated {formatDistanceToNow(new Date(summary.date), { addSuffix: true })}
          </div>
          <div className="flex space-x-3">
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 
                       text-white font-semibold rounded-xl hover:from-violet-700 hover:to-purple-700 
                       transition-all duration-200 shadow-lg hover:shadow-violet-500/30"
            >
              Save to History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;