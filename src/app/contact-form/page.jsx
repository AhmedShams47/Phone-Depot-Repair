"use client";

import Image from "next/image";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export default function ContactFormPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    device: '',
    issue: '',
    message: '',
    contactMethod: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // PASTE YOUR NEW DEPLOYMENT URL HERE (from Step 4)
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx7tyz4D643S_KwvnRpyoB72LWwNwjYGmjbaswSO_kR2ts968xLvDhkSDpZna48C4Bvqw/exec';
      
      console.log('Submitting form data:', formData);
      
      // Convert form data to URL parameters
      const params = new URLSearchParams(formData).toString();
      const urlWithParams = `${SCRIPT_URL}?${params}`;
      
      console.log('Request URL:', urlWithParams);
      
      // Use GET request with parameters (works better with Google Apps Script)
      await fetch(urlWithParams, {
        method: 'GET',
        mode: 'no-cors',
      });

      console.log('Form submission sent successfully');
      
      // Show success message
      setSubmitStatus('success');
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        device: '',
        issue: '',
        message: '',
        contactMethod: 'email'
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SmoothScrollProvider>
      <div 
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/background-2.png)" }}
      >
        <Header />
        
        {/* Main Content */}
        <div className="min-h-screen">
          {/* Logo and Tagline Section */}
          <div className="text-center pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8">
            
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif text-gray-900 mb-8 sm:mb-12 px-4">
              Get In Touch With Us
            </h1>
          </div>
          
          {/* Contact Form Section */}
          <div className="py-8 sm:py-12 lg:py-16">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6 sm:mb-8">
                  Contact Us
                </h2>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    ✗ Oops! Something went wrong. Please try again or contact us directly.
                  </div>
                )}
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Device Type */}
                  <div>
                    <label htmlFor="device" className="block text-sm font-medium text-gray-700 mb-2">
                      Device Type
                    </label>
                    <select
                      id="device"
                      name="device"
                      value={formData.device}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select your device type</option>
                      <option value="iphone">iPhone</option>
                      <option value="samsung">Samsung Galaxy</option>
                      <option value="other-android">Other Android</option>
                      <option value="ipad">iPad</option>
                      <option value="tablet">Other Tablet</option>
                      <option value="watch">Smart Watch</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Issue Type */}
                  <div>
                    <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-2">
                      Type of Service Needed
                    </label>
                    <select
                      id="issue"
                      name="issue"
                      value={formData.issue}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select service type</option>
                      <option value="screen-repair">Screen Repair</option>
                      <option value="battery-replacement">Battery Replacement</option>
                      <option value="charging-port">Charging Port Repair</option>
                      <option value="water-damage">Water Damage Repair</option>
                      <option value="software-issue">Software Issue</option>
                      <option value="general-repair">General Repair</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                      placeholder="Please describe your issue or question in detail..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-b from-blue-600 to-blue-800 text-white py-3 sm:py-4 px-6 rounded-xl text-base sm:text-lg font-medium hover:from-blue-700 hover:to-blue-900 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>

                {/* Contact Information */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                    Or Contact Us Directly
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Phone</p>
                      <p className="text-sm text-gray-600">+1 (347) 553-077</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email</p>
                      <p className="text-sm text-gray-600">samiulkarim07@gmail.com</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Address</p>
                      <p className="text-sm text-gray-600">3205 SW 29th St<br />Oklahoma City, OK 73119</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
