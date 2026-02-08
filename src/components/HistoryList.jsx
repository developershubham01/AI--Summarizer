// src/components/HistoryList.jsx
import React, { useState } from 'react';
import { FiTrash2, FiEye, FiX, FiClock } from 'react-icons/fi';
import { formatDistanceToNow } from 'date-fns';

const HistoryList = ({ history, onSelect, onDelete, onClear }) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (item) => {
    setSelectedId(item.id);
    if (onSelect) {
      onSelect(item);
    }
  };

  const handleDelete = (id, e) => {
    e.stopPropagation();
    if (onDelete) {
      onDelete(id);
    }
  };

  const displayedHistory = expanded ? history : history.slice(0, 5);

  if (history.length === 0) {
    return (
      <div className="glass-card rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4 text-violet-300 dark:text-violet-700">
          <FiClock />
        </div>
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          No History Yet
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Your summarized articles will appear here
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg">
            <FiClock className="text-xl text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Summary History
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {history.length} saved summaries
            </p>
          </div>
        </div>

        {history.length > 0 && (
          <button
            onClick={onClear}
            className="flex items-center space-x-2 px-4 py-2 text-red-500 
                     hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg 
                     transition-all duration-200"
          >
            <FiTrash2 />
            <span className="text-sm font-medium">Clear All</span>
          </button>
        )}
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
        {displayedHistory.map((item) => (
          <div
            key={item.id}
            onClick={() => handleSelect(item)}
            className={`p-4 rounded-xl cursor-pointer transition-all duration-200 
                      ${selectedId === item.id 
                        ? 'bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20' 
                        : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-700/80'}`}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-800 dark:text-gray-100 truncate mb-1">
                  {item.title || 'Untitled Article'}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 truncate mb-2">
                  {item.url}
                </p>
                <div className="flex items-center space-x-4 text-xs">
                  <span className="text-violet-600 dark:text-violet-400">
                    {formatDistanceToNow(new Date(item.date), { addSuffix: true })}
                  </span>
                  <span className="text-gray-500">
                    {item.summary?.split(/\s+/).length || 0} words
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 ml-4">
                <button
                  onClick={(e) => handleDelete(item.id, e)}
                  className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 
                           dark:hover:bg-red-900/20 rounded-lg transition-colors"
                >
                  <FiTrash2 />
                </button>
                <button className="p-2 text-gray-400 hover:text-violet-600 
                         hover:bg-violet-50 dark:hover:bg-violet-900/20 rounded-lg">
                  <FiEye />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {history.length > 5 && (
        <div className="mt-6 pt-6 border-t border-violet-100 dark:border-violet-900 text-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center justify-center space-x-2 mx-auto px-6 py-3 
                     bg-violet-100 dark:bg-violet-900/50 hover:bg-violet-200 dark:hover:bg-violet-800/50 
                     text-violet-700 dark:text-violet-300 font-medium rounded-xl 
                     transition-all duration-200"
          >
            {expanded ? (
              <>
                <FiX />
                <span>Show Less</span>
              </>
            ) : (
              <>
                <span>Show All ({history.length})</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default HistoryList;