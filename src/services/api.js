const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const RAPIDAPI_HOST = 'article-extractor-and-summarizer.p.rapidapi.com';
const BASE_URL = 'https://article-extractor-and-summarizer.p.rapidapi.com';

export class ArticleSummarizerAPI {
  constructor() {
    this.headers = {
      'X-RapidAPI-Key': RAPIDAPI_KEY,
      'X-RapidAPI-Host': RAPIDAPI_HOST,
      'Content-Type': 'application/json',
    };
  }

  async summarizeArticle(url) {
    try {
      console.log('Fetching summary for URL:', url);
      
      const response = await fetch(`${BASE_URL}/summarize?url=${encodeURIComponent(url)}&lang=en&length=3`, {
        method: 'GET',
        headers: this.headers,
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`API Error: ${response.status} - ${errorData}`);
      }

      const data = await response.json();
      
      if (!data.summary) {
        throw new Error('No summary found in response');
      }

      return {
        success: true,
        summary: data.summary,
        title: data.title || 'Untitled Article',
        url: url,
        date: new Date().toISOString(),
      };
    } catch (error) {
      console.error('Summarization Error:', error);
      return {
        success: false,
        error: error.message || 'Failed to summarize article',
      };
    }
  }

  async extractArticle(url) {
    try {
      const response = await fetch(`${BASE_URL}/extract?url=${encodeURIComponent(url)}`, {
        method: 'GET',
        headers: this.headers,
      });

      if (!response.ok) {
        throw new Error(`Extraction failed: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Extraction Error:', error);
      throw error;
    }
  }
}

// Singleton instance
export const articleAPI = new ArticleSummarizerAPI();