
import React from 'react';
import { FiZap, FiGlobe, FiBarChart2, FiClock } from 'react-icons/fi';

const Hero = () => {
  const features = [
    { icon: <FiZap />, text: 'Lightning Fast Processing' },
    { icon: <FiGlobe />, text: 'Supports Any URL' },
    { icon: <FiBarChart2 />, text: 'Accurate Summaries' },
    { icon: <FiClock />, text: 'Save Time Reading' },
  ];

  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-violet-300 dark:bg-violet-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 mb-6">
            <span className="w-2 h-2 bg-violet-500 rounded-full mr-2 animate-pulse-glow"></span>
            <span className="text-sm font-semibold text-violet-700 dark:text-violet-300">
              Powered by Advanced AI
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block">Transform Long Articles Into</span>
            <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Digestible Insights
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Paste any article URL and let our AI extract the key points, saving you hours of reading time.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-4 rounded-xl hover:transform hover:-translate-y-1 transition-all duration-200"
              >
                <div className="text-2xl text-violet-600 dark:text-violet-400 mb-2">
                  {feature.icon}
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">99%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">5s</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Process</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">10K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Articles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;