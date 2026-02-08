import React, { useState } from 'react';
import { 
  FiCalendar, 
  FiUser, 
  FiClock, 
  FiTag, 
  FiSearch, 
  FiArrowRight,
  FiBookOpen,
  FiTrendingUp,
  FiShare2,
  FiBookmark
} from 'react-icons/fi';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', count: 12 },
    { id: 'ai', name: 'AI & ML', count: 4 },
    { id: 'webdev', name: 'Web Development', count: 3 },
    { id: 'productivity', name: 'Productivity', count: 3 },
    { id: 'tutorials', name: 'Tutorials', count: 2 },
  ];

  const blogPosts = [
  {
    id: 1,
    title: 'How AI Summarizers Are Changing the Way We Read in 2026',
    excerpt: 'AI summarization tools are redefining how students, professionals, and researchers consume long-form content faster than ever.',
    author: 'Editorial Team',
    date: '2026-01-28',
    readTime: '6 min',
    category: 'ai',
    tags: ['AI', 'Summarization', 'NLP'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800',
    featured: true,
    url: '/blog/ai-summarizers-changing-reading'
  },
  {
    id: 2,
    title: 'Best Free AI Tools for Students and Developers in 2026',
    excerpt: 'A curated list of powerful and free AI tools that help students and developers save time, improve learning, and boost productivity.',
    author: 'Shubham Sharma',
    date: '2026-01-22',
    readTime: '7 min',
    category: 'productivity',
    tags: ['AI Tools', 'Productivity', 'Students'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
    featured: true,
    url: '/blog/best-free-ai-tools-2026'
  },
  {
    id: 3,
    title: 'Building Modern React Applications with Best Practices',
    excerpt: 'Learn how to structure scalable React applications using modern patterns, hooks, and performance optimizations.',
    author: 'Alex Rivera',
    date: '2026-01-18',
    readTime: '8 min',
    category: 'webdev',
    tags: ['React', 'Frontend', 'Best Practices'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800',
    url: '/blog/react-best-practices'
  },
  {
    id: 4,
    title: 'Natural Language Processing: Trends to Watch in 2026',
    excerpt: 'From smarter chatbots to better summarization models, explore the most important NLP trends shaping the future of AI.',
    author: 'Dr. Emily Zhang',
    date: '2026-01-14',
    readTime: '6 min',
    category: 'ai',
    tags: ['NLP', 'AI Trends', 'Machine Learning'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800',
    url: '/blog/nlp-trends-2026'
  },
  {
    id: 5,
    title: 'How to Integrate a Text Summarization API in Your App',
    excerpt: 'Step-by-step tutorial to integrate AI-based text summarization APIs into web or mobile applications.',
    author: 'David Park',
    date: '2026-01-10',
    readTime: '5 min',
    category: 'tutorials',
    tags: ['API', 'Tutorial', 'AI Integration'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800',
    url: '/blog/text-summarization-api-integration'
  },
  {
    id: 6,
    title: 'Website Performance Optimization Techniques That Still Work',
    excerpt: 'Learn proven performance optimization techniques that improve Core Web Vitals and user experience in 2026.',
    author: 'Lisa Wang',
    date: '2026-01-05',
    readTime: '9 min',
    category: 'webdev',
    tags: ['Performance', 'Web Vitals', 'Optimization'],
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800',
    url: '/blog/website-performance-optimization'
  }
];

const featuredPosts = blogPosts.filter(post =>
  post.featured &&
  (
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  )
);


const filteredPosts = blogPosts.filter(post => {
  const matchesCategory =
    selectedCategory === "all" || post.category === selectedCategory;

  const matchesSearch =
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

  return matchesCategory && matchesSearch;
});

const handleSearch = (e) => {
  e.preventDefault();
};


  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white dark:from-gray-900 dark:to-violet-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <FiBookOpen className="text-white mr-2" />
              <span className="text-white font-semibold text-sm">
                AI Article Summarizer Blog
  
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Summarizer Blog – Learn How to Summarize Articles Faster

            </h1>
            
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Discover tips, guides, and tutorials on using AI Summarizer to instantly convert long articles, documents, and research papers into clear summaries. Built for students, developers, and professionals.

            </p>

          
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Search Between Featured & Categories */}
<form onSubmit={handleSearch} className="max-w-xl mx-auto mb-10">
  <div className="relative">
    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search articles..."
      className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 rounded-xl
               border border-violet-200 dark:border-violet-800
               focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20
               outline-none shadow-sm"
    />
  </div>
</form>
        {/* Featured Posts */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                <span className="flex items-center">
                  <FiTrendingUp className="mr-3 text-violet-600" />
                  Featured Articles
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Handpicked articles for you to explore
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <div key={post.id} className="group">
                <div className="glass-card rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <div 
                      className="w-full h-full bg-gradient-to-br from-violet-500 to-purple-600"
                      style={{
                        backgroundImage: `url(${post.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-violet-600 text-white text-xs font-semibold rounded-full">
                          {post.category.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span className="flex items-center">
                        <FiUser className="mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <FiCalendar className="mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <FiClock className="mr-1" />
                        {post.readTime} read
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-violet-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs rounded-full"
                          >
                            <FiTag className="inline mr-1" size={12} />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <button className="p-2 text-gray-400 hover:text-violet-600 hover:bg-violet-50 dark:hover:bg-violet-900/20 rounded-lg">
                          <FiBookmark />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-violet-600 hover:bg-violet-50 dark:hover:bg-violet-900/20 rounded-lg">
                          <FiShare2 />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Categories Filter */}
        <div className="mb-12">
          
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700'
                }`}
              >
                {cat.name}
                <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                  selectedCategory === cat.id
                    ? 'bg-white/20'
                    : 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* All Blog Posts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
            Latest Articles
          </h2>
{filteredPosts.length === 0 && (
  <div className="text-center py-16">
    <p className="text-xl font-semibold text-gray-600 dark:text-gray-400">
      No results found
    </p>
    <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
      Try searching with different keywords or select another category.
    </p>
  </div>
)}

        {filteredPosts.length > 0 && (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {filteredPosts.map((post) => (

              <div key={post.id} className="group">
                <div className="glass-card rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="w-full h-full bg-gradient-to-br from-violet-400 to-purple-500"
                      style={{
                        backgroundImage: `url(${post.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-semibold rounded-full">
                        {post.category.toUpperCase()}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <FiClock className="mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-violet-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold mr-3">
                          {post.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {post.author}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {post.date}
                          </p>
                        </div>
                      </div>
                      
                      <button className="p-2 text-gray-400 hover:text-violet-600 hover:bg-violet-50 dark:hover:bg-violet-900/20 rounded-lg transition-all duration-200 group-hover:bg-violet-50 dark:group-hover:bg-violet-900/20">
                        <FiArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
           )}
 {/* SEO Content Cards Section */}
<div className="mt-20 max-w-6xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* Card 1 */}
    <div className="glass-card rounded-2xl p-6 border border-violet-200 dark:border-violet-800">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        What is an AI Article Summarizer?
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        An AI article summarizer is a smart tool that converts long articles,
        research papers, blogs, and documents into short, meaningful summaries
        using artificial intelligence and natural language processing (NLP).
      </p>
    </div>

    {/* Card 2 */}
    <div className="glass-card rounded-2xl p-6 border border-violet-200 dark:border-violet-800">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Why Use an AI Summarizer?
      </h3>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
        <li>Summarize long articles in seconds</li>
        <li>Save time for students and professionals</li>
        <li>Understand research papers faster</li>
        <li>Boost productivity using AI tools</li>
        <li>Get accurate summaries with key points</li>
      </ul>
    </div>

    {/* Card 3 */}
    <div className="glass-card rounded-2xl p-6 border border-violet-200 dark:border-violet-800">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        How This Blog Helps You
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        This blog provides tutorials, guides, and tips on AI-based article
        summarization. It helps students, developers, researchers, and content
        creators learn smarter ways to consume information.
      </p>
    </div>

    {/* Card 4 */}
    <div className="glass-card rounded-2xl p-6 border border-violet-200 dark:border-violet-800">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Topics Covered in This Blog
      </h3>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
        <li>AI article summarization techniques</li>
        <li>Text summarization APIs and tools</li>
        <li>Productivity hacks using AI</li>
        <li>Web development with AI integration</li>
        <li>Latest AI and technology trends</li>
      </ul>
    </div>

  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default BlogPage;