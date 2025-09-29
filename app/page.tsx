'use client'

import React, { useState } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo and Brand */}
      <div className="flex items-center">
        <div className="flex-shrink-0 flex items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">SI</span>
          </div>
          <span className="ml-3 text-xl font-bold text-gray-900">Strategic Insights Consulting</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-8">
          <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
            Home
          </a>
          <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
            Services
          </a>
          <a href="#insights" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
            Market Insights
          </a>
          <a href="#case-studies" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
            Case Studies
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
            About
          </a>
          <a href="#contact" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
            Get Started
          </a>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Navigation Menu */}
  <div className="md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
      <a href="#home" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
        Home
      </a>
      <a href="#services" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
        Services
      </a>
      <a href="#insights" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
        Market Insights
      </a>
      <a href="#case-studies" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
        Case Studies
      </a>
      <a href="#about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
        About
      </a>
      <a href="#contact" className="bg-blue-600 text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium mx-3 mt-4">
        Get Started
      </a>
    </div>
  </div>
</nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
  {/* Animated Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-32 right-16 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full"></div>
  </div>

  {/* Grid Pattern Overlay */}
  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

  <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
    <div className="max-w-6xl mx-auto">
      {/* Main Content */}
      <div className="text-center mb-16">
        {/* Company Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-2 mb-8">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-cyan-300 text-sm font-medium tracking-wide">STRATEGIC INSIGHTS CONSULTING</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Transform Market
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Intelligence
          </span>
          Into Revenue Growth
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          We decode complex market dynamics and consumer behavior to deliver 
          <span className="text-cyan-300 font-semibold"> data-driven strategies</span> that 
          accelerate growth for Fortune 500 companies and emerging market leaders.
        </p>

        {/* Key Value Props */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 text-slate-300">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
            <span className="text-sm font-medium">Market Research & Analysis</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
            <span className="text-sm font-medium">Consumer Behavior Insights</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
            <span className="text-sm font-medium">Competitive Intelligence</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105">
            <span className="relative z-10">Schedule Strategic Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="group border-2 border-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-lg">
            <span className="flex items-center gap-2">
              Download Market Insights Report
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-slate-700 pt-12">
          <p className="text-slate-400 text-sm mb-6">Trusted by industry leaders across 40+ countries</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-slate-400 font-semibold text-lg">Fortune 500</div>
            <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
            <div className="text-slate-400 font-semibold text-lg">Global Enterprises</div>
            <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
            <div className="text-slate-400 font-semibold text-lg">Emerging Leaders</div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-slate-700/50">
          <div className="text-3xl font-bold text-cyan-400 mb-2">250+</div>
          <div className="text-slate-300 text-sm">Strategic Projects Delivered</div>
        </div>
        <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-slate-700/50">
          <div className="text-3xl font-bold text-cyan-400 mb-2">$2.8B</div>
          <div className="text-slate-300 text-sm">Revenue Growth Generated</div>
        </div>
        <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-slate-700/50">
          <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
          <div className="text-slate-300 text-sm">Client Retention Rate</div>
        </div>
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
    <div className="flex flex-col items-center gap-2 text-slate-400">
      <span className="text-xs font-medium">Discover Our Approach</span>
      <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
      </div>
    </div>
  </div>
</section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Strategic Insights Consulting Services
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Empowering Fortune 500 companies with data-driven marketing strategies and measurable ROI through decades of industry expertise
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Market Research & Analytics */}
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Research & Analytics</h3>
        <p className="text-gray-600 mb-4">
          Strategic Insights Consulting delivers comprehensive market analysis and consumer behavior insights across multiple verticals, enabling data-driven decision making.
        </p>
        <ul className="text-sm text-gray-500 space-y-1">
          <li>• Consumer sentiment analysis</li>
          <li>• Competitive intelligence</li>
          <li>• Market sizing & forecasting</li>
        </ul>
      </div>

      {/* Brand Strategy & Positioning */}
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Brand Strategy & Positioning</h3>
        <p className="text-gray-600 mb-4">
          Our senior-level consultants at Strategic Insights Consulting craft compelling brand narratives that resonate with target audiences and drive market differentiation.
        </p>
        <ul className="text-sm text-gray-500 space-y-1">
          <li>• Brand architecture development</li>
          <li>• Messaging framework creation</li>
          <li>• Brand equity measurement</li>
        </ul>
      </div>

      {/* Digital Marketing Optimization */}
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Marketing Optimization</h3>
        <p className="text-gray-600 mb-4">
          Strategic Insights Consulting maximizes digital channel performance with proven methodologies that deliver measurable ROI for Fortune 500 clients.
        </p>
        <ul className="text-sm text-gray-500 space-y-1">
          <li>• Multi-channel attribution modeling</li>
          <li>• Conversion rate optimization</li>
          <li>• Marketing automation strategy</li>
        </ul>
      </div>

      {/* Customer Journey Mapping */}
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
          <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Journey Mapping</h3>
        <p className="text-gray-600 mb-4">
          Strategic Insights Consulting maps complex customer touchpoints across industry verticals, optimizing engagement strategies with decades of proven experience.
        </p>
        <ul className="text-sm text-gray-500 space-y-1">
          <li>• Omnichannel experience design</li>
          <li>• Touchpoint optimization</li>
          <li>• Customer lifecycle analysis</li>
        </ul>
      </div>
    </div>

    <div className="text-center mt-12">
      <div className="bg-blue-50 rounded-lg p-6 max-w-4xl mx-auto">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Why Choose Strategic Insights Consulting?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
            Fortune 500 proven track record
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
            Multi-vertical industry expertise
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
            Data-driven measurable ROI
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
            Senior consultants with decades of experience
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        What Our Clients Say
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Trusted by marketing leaders across industries
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="Sarah Chen"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-900">Sarah Chen</h4>
            <p className="text-sm text-gray-600">VP Marketing, TechFlow Solutions</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 italic">
          "Strategic Insights Consulting transformed our digital marketing approach. Their data-driven strategies increased our lead generation by 340% in just six months. The team's expertise in marketing automation and customer segmentation is unmatched."
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Marcus Rodriguez"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-900">Marcus Rodriguez</h4>
            <p className="text-sm text-gray-600">CMO, GreenLeaf Retail</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 italic">
          "Working with Strategic Insights Consulting was a game-changer for our omnichannel strategy. They helped us achieve a 250% ROI on our marketing spend and significantly improved our customer lifetime value. Their strategic thinking is exceptional."
        </p>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
            alt="Jennifer Walsh"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-900">Jennifer Walsh</h4>
            <p className="text-sm text-gray-600">Director of Growth, Innovate Labs</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 italic">
          "Strategic Insights Consulting delivered beyond our expectations. Their comprehensive market analysis and competitive intelligence helped us launch our product 3 months ahead of schedule. The team's attention to detail and strategic insights are remarkable."
        </p>
      </div>
    </div>
  </div>
</section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Company Info */}
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-2xl font-bold mb-4">Strategic Insights Consulting</h3>
        <p className="text-gray-300 mb-4 max-w-md">
          Empowering businesses with data-driven marketing strategies and actionable insights to drive growth and competitive advantage.
        </p>
        <div className="space-y-2">
          <p className="text-gray-300">
            <span className="font-semibold">Email:</span> info@strategicinsights.com
          </p>
          <p className="text-gray-300">
            <span className="font-semibold">Phone:</span> (555) 123-4567
          </p>
          <p className="text-gray-300">
            <span className="font-semibold">Address:</span> 123 Business Ave, Suite 500, New York, NY 10001
          </p>
        </div>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Services</h4>
        <ul className="space-y-2 text-gray-300">
          <li><a href="#" className="hover:text-white transition-colors">Market Research</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Digital Strategy</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Brand Analytics</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Consumer Insights</a></li>
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-gray-300">
          <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
    </div>

    {/* Social Media & Copyright */}
    <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
      <div className="flex space-x-6 mb-4 md:mb-0">
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12.013C24.007 5.367 18.641.001 12.017.001z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
      </div>
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Strategic Insights Consulting. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </main>
  )
}