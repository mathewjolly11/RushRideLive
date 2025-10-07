import { 
  MapPin, 
  CreditCard, 
  Clock, 
  Star, 
  Shield,
  Car,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';

export const mockData = {
  video: {
    embedUrl: "https://drive.google.com/file/d/1Du8G4DPeFneCXY9jMW7UY7_ICd12HSb2/preview", // Replace with actual Google Drive video ID
    thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=450&fit=crop&crop=center"
  },
  
  features: [
    {
      icon: <MapPin className="w-6 h-6 text-yellow-500" />,
      title: "Real-Time Tracking",
      description: "Track your ride in real-time with GPS precision. Know exactly where your driver is and get accurate arrival times."
    },
    {
      icon: <Car className="w-6 h-6 text-blue-600" />,
      title: "Multiple Vehicle Types",
      description: "Choose from economy, premium, SUV, or luxury vehicles based on your needs and budget preferences."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-yellow-500" />,
      title: "Cashless Payments",
      description: "Seamless payment integration with credit cards, digital wallets, and crypto for hassle-free transactions."
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "24/7 Availability",
      description: "Round-the-clock service with drivers available anytime, anywhere in your city. Never wait for a ride."
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: "Driver Ratings",
      description: "Comprehensive rating system ensuring quality service. Rate drivers and read reviews from other passengers."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Premium Safety",
      description: "Advanced safety features including driver verification, trip sharing, and 24/7 emergency support."
    }
  ],
  
  social: [
    {
      name: "Facebook",
      url: "#",
      icon: <Facebook className="w-5 h-5" />
    },
    {
      name: "Twitter",
      url: "#",
      icon: <Twitter className="w-5 h-5" />
    },
    {
      name: "Instagram",
      url: "#",
      icon: <Instagram className="w-5 h-5" />
    },
    {
      name: "YouTube",
      url: "#",
      icon: <Youtube className="w-5 h-5" />
    }
  ],
  
  footer: {
    quickLinks: [
      { name: "About Us", url: "#" },
      { name: "How It Works", url: "#" },
      { name: "Pricing", url: "#" },
      { name: "Support", url: "#" },
      { name: "Privacy Policy", url: "#" },
      { name: "Terms of Service", url: "#" }
    ]
  },
  
  demoRequests: [] // This will store form submissions locally for now
};