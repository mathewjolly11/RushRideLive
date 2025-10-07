import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import {
  Car,
  MapPin,
  CreditCard,
  Clock,
  Star,
  Shield,
  Play,
  ArrowUp,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { mockData } from "../utils/mock";

const RushRideLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowSuccess(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      if (res.ok) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", company: "", message: "" });
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        alert("Error sending message.");
      }
    } catch {
      alert("Error sending message.");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://customer-assets.emergentagent.com/job_sleek-rushride/artifacts/0f9t1sp5_rushridelogo.png"
                alt="RushRide Logo"
                className="h-16 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-12">
              <button
                onClick={() => scrollToSection("features")}
                className="text-xl font-semibold text-gray-700 hover:text-blue-600 transition-all duration-200 hover:scale-105 py-3 px-6 rounded-xl hover:bg-blue-50 hover:shadow-sm"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("demo")}
                className="text-xl font-semibold text-gray-700 hover:text-blue-600 transition-all duration-200 hover:scale-105 py-3 px-6 rounded-xl hover:bg-blue-50 hover:shadow-sm"
              >
                Demo
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-xl font-semibold text-gray-700 hover:text-blue-600 transition-all duration-200 hover:scale-105 py-3 px-6 rounded-xl hover:bg-blue-50 hover:shadow-sm"
              >
                Contact
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col space-y-1.5 p-3"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div
                className={`w-8 h-1 bg-gray-700 transition-all duration-200 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></div>
              <div
                className={`w-8 h-1 bg-gray-700 transition-all duration-200 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-8 h-1 bg-gray-700 transition-all duration-200 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              mobileMenuOpen ? "max-h-60 opacity-100 mt-6" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="flex flex-col space-y-3 pb-6 border-t border-gray-200 pt-6">
              <button
                onClick={() => {
                  scrollToSection("features");
                  setMobileMenuOpen(false);
                }}
                className="text-xl font-semibold text-gray-700 hover:text-blue-600 transition-all duration-200 py-4 px-6 text-left rounded-xl hover:bg-blue-50"
              >
                Features
              </button>
              <button
                onClick={() => {
                  scrollToSection("demo");
                  setMobileMenuOpen(false);
                }}
                className="text-xl font-semibold text-gray-700 hover:text-blue-600 transition-all duration-200 py-4 px-6 text-left rounded-xl hover:bg-blue-50"
              >
                Demo
              </button>
              <button
                onClick={() => {
                  scrollToSection("contact");
                  setMobileMenuOpen(false);
                }}
                className="text-xl font-semibold text-gray-700 hover:text-blue-600 transition-all duration-200 py-4 px-6 text-left rounded-xl hover:bg-blue-50"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-yellow-50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-yellow-50/30"></div>
        <div className="container mx-auto relative z-10">
          <div
            className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
              The Future of
              <span className="text-yellow-500 block">Ride Sharing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Experience seamless transportation with AI-powered matching,
              real-time tracking, and premium safety features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-200 hover:transform hover:scale-105 hover:shadow-lg shadow-yellow-500/25">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl bg-white border-gray-200">
                  <div className="aspect-video">
                    <iframe
                      src={mockData.video.embedUrl}
                      className="w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-200 hover:transform hover:scale-105"
              >
                Request Live Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Floating shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Choose RushRide?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technology meets exceptional service to deliver the
              perfect ride experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-md border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 group relative overflow-hidden rounded-2xl"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-yellow-200 transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* WhatsApp Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gray-50 flex items-center justify-center"
      >
        <div className="w-full max-w-md mx-auto flex flex-col items-center">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Contact Us on WhatsApp
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Click the button below to chat with us directly on WhatsApp for
              any queries or demo requests.
            </p>
          </div>
          <a
            href="https://wa.me/919633264055?text=Hello%20I%20am%20interested%20in%20the%20RushRide%20Web%20App.%20Please%20share%20a%20live%20demo%20link."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-lg transition-all duration-200 flex items-center gap-3 w-full justify-center"
            style={{ maxWidth: 320 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16 3C9.37258 3 4 8.37258 4 15C4 17.3866 4.84285 19.6374 6.34315 21.4853L3 29L10.5147 25.6569C12.3626 27.1571 14.6134 28 17 28C23.6274 28 29 22.6274 29 16C29 9.37258 23.6274 3 16 3Z"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.5 13.5C12.5 16.5 15.5 19.5 18.5 20.5"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>
      {/* Video Demo Section */}
      <section id="demo" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              See RushRide in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how our platform transforms the ride-sharing experience
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-yellow-100 to-blue-100 p-1">
              <div className="bg-white rounded-3xl overflow-hidden">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative aspect-video cursor-pointer group">
                      <img
                        src={mockData.video.thumbnail}
                        alt="Video Thumbnail"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                        <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl bg-white border-gray-200">
                    <div className="aspect-video">
                      <iframe
                        src={mockData.video.embedUrl}
                        className="w-full h-full rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 py-10 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <img
              src="https://customer-assets.emergentagent.com/job_sleek-rushride/artifacts/0f9t1sp5_rushridelogo.png"
              alt="RushRide Logo"
              className="h-10 mb-3"
            />
            <span className="text-gray-500 text-sm">
              © {new Date().getFullYear()} RushRide Taxi Pooling
            </span>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <span className="font-semibold mb-2 text-gray-700">Contact Us</span>
            <a
              href="https://wa.me/919633264055?text=Hello%20I%20am%20interested%20in%20the%20RushRide%20Web%20App.%20Please%20share%20a%20live%20demo%20link."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-xl text-base shadow-lg transition-all duration-200 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M16 3C9.37258 3 4 8.37258 4 15C4 17.3866 4.84285 19.6374 6.34315 21.4853L3 29L10.5147 25.6569C12.3626 27.1571 14.6134 28 17 28C23.6274 28 29 22.6274 29 16C29 9.37258 23.6274 3 16 3Z"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.5 13.5C12.5 16.5 15.5 19.5 18.5 20.5"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center hover:bg-yellow-600 transition-all duration-200 hover:transform hover:scale-110 z-50 shadow-lg"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Demo Button */}
      <div className="fixed bottom-8 left-8 z-50">
        <Button
          onClick={() => scrollToSection("contact")}
          className="bg-blue-600/90 backdrop-blur-md text-white hover:bg-blue-600 px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:transform hover:scale-105 shadow-lg"
        >
          Request Demo
        </Button>
      </div>
    </div>
  );
};

export default RushRideLanding;
