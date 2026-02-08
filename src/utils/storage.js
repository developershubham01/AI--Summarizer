const STORAGE_KEY = 'ai_summarizer_history';

export const storage = {
  // Save summary to localStorage
  saveSummary(summary) {
    try {
      const history = this.getHistory();
      const newEntry = {
        id: Date.now(),
        ...summary,
        date: new Date().toISOString(),
      };
      
      // Add to beginning of array (newest first)
      history.unshift(newEntry);
      
      // Keep only last 50 summaries
      const trimmedHistory = history.slice(0, 50);
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmedHistory));
      return newEntry;
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      return null;
    }
  },

  // Get all summaries from localStorage
  getHistory() {
    try {
      const history = localStorage.getItem(STORAGE_KEY);
      return history ? JSON.parse(history) : [];
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return [];
    }
  },

  // Clear all history
  clearHistory() {
    try {
      localStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (error) {
      console.error('Error clearing localStorage:', error);
      return false;
    }
  },

  // Delete a specific summary
  deleteSummary(id) {
    try {
      const history = this.getHistory();
      const filteredHistory = history.filter(item => item.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredHistory));
      return true;
    } catch (error) {
      console.error('Error deleting summary:', error);
      return false;
    }
  },

  // Get summary by ID
  getSummary(id) {
    try {
      const history = this.getHistory();
      return history.find(item => item.id === id) || null;
    } catch (error) {
      console.error('Error getting summary:', error);
      return null;
    }
  },
};