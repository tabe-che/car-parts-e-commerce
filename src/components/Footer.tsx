import { Link } from 'react-router-dom';
import { Wrench, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Wrench className="h-6 w-6" />
              <span className="text-xl font-bold">AutoParts</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted source for quality car parts and automotive accessories.
            </p>
            <div className="flex space-x-2">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                (555) 123-4567
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/products?category=engine" className="text-gray-300 hover:text-white transition-colors">Engine Parts</Link></li>
              <li><Link to="/products?category=brakes" className="text-gray-300 hover:text-white transition-colors">Brake System</Link></li>
              <li><Link to="/products?category=suspension" className="text-gray-300 hover:text-white transition-colors">Suspension</Link></li>
              <li><Link to="/products?category=filters" className="text-gray-300 hover:text-white transition-colors">Filters & Fluids</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">123 Auto Street, Car City, CC 12345</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-gray-300 text-sm">info@autoparts.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-gray-300 text-sm">(555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 AutoParts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}