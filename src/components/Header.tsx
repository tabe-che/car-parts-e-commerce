import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, Menu, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Badge } from '@/components/ui/badge';

export default function Header() {
  const location = useLocation();
  const cartItemCount = 3; // Mock cart count

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <span>Free shipping on orders over $100</span>
          <span>Call us: (555) 123-4567</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Wrench className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">AutoParts</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search for car parts..."
                className="pl-10 pr-4 w-full"
              />
            </div>
          </div>

          {/* Cart and Menu */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-4 w-4" />
                {cartItemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-accent text-white text-xs min-w-[1.25rem] h-5 flex items-center justify-center rounded-full">
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
            </Link>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4 hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link 
                  to="/" 
                  className={`px-4 py-2 rounded-md transition-colors ${
                    isActive('/') ? 'bg-primary text-white' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-primary">
                  Categories
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="grid grid-cols-2 gap-4">
                      <Link to="/products?category=engine" className="hover:text-primary">
                        Engine Parts
                      </Link>
                      <Link to="/products?category=brakes" className="hover:text-primary">
                        Brake System
                      </Link>
                      <Link to="/products?category=suspension" className="hover:text-primary">
                        Suspension
                      </Link>
                      <Link to="/products?category=electrical" className="hover:text-primary">
                        Electrical
                      </Link>
                      <Link to="/products?category=filters" className="hover:text-primary">
                        Filters & Fluids
                      </Link>
                      <Link to="/products?category=accessories" className="hover:text-primary">
                        Accessories
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link 
                  to="/products" 
                  className={`px-4 py-2 rounded-md transition-colors ${
                    isActive('/products') ? 'bg-primary text-white' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  All Products
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link 
                  to="/about" 
                  className={`px-4 py-2 rounded-md transition-colors ${
                    isActive('/about') ? 'bg-primary text-white' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  About
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link 
                  to="/contact" 
                  className={`px-4 py-2 rounded-md transition-colors ${
                    isActive('/contact') ? 'bg-primary text-white' : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
    </header>
  );
}