import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  MessageSquare,
  Loader2,
} from 'lucide-react';
import { toast } from 'react-toastify';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us | WarmPaws';
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBookingSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(`Thanks ${formData.firstName}! We received your message.`, {
        style: {
          background: '#264653',
          color: '#F4A261',
          fontWeight: 'bold',
        },
        icon: '🐾',
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="bg-gray-50 max-w-11/12 mx-auto  min-h-screen font-sans text-gray-800">
      <div className="bg-[#264653] py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Have a question about a service or need help with a booking? We're
          here to help you and your furry friends!
        </p>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8">
              <h3 className="text-xl font-bold text-[#264653] mb-6 border-b border-gray-100 pb-2">
                Contact Information
              </h3>

              <div className="flex items-start gap-4">
                <div className="bg-teal-50 p-3 rounded-full text-[#264653]">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Our Location</h4>
                  <p className="text-gray-500 text-sm mt-1">
                    123 Paws Avenue, Suite 400
                    <br />
                    New York, NY 10012
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-50 p-3 rounded-full text-[#264653]">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Phone Support</h4>
                  <p className="text-gray-500 text-sm mt-1">
                    +1 (555) 123-4567
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Mon-Fri 9am - 6pm EST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-50 p-3 rounded-full text-[#264653]">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Us</h4>
                  <p className="text-gray-500 text-sm mt-1">
                    support@petcare.com
                  </p>
                  <p className="text-gray-500 text-sm">info@petcare.com</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-64 md:h-auto">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s123%20William%20St%2C%20New%20York%2C%20NY%2010038!5e0!3m2!1sen!2sus!4v1635181234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="text-[#F4A261] w-8 h-8" />
                <h2 className="text-2xl md:text-3xl font-bold text-[#264653]">
                  Send us a Message
                </h2>
              </div>

              <form className="space-y-6" onSubmit={handleBookingSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#F4A261] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Last Name
                    </label>
                    <input
                      required
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#F4A261] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#F4A261] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#F4A261] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white text-gray-600"
                    >
                      <option>General Inquiry</option>
                      <option>Booking Issue</option>
                      <option>Service Question</option>
                      <option>Feedback</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you today?"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#F4A261] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full md:w-auto px-8 py-4 bg-[#F4A261] hover:bg-[#e08c4b] text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
