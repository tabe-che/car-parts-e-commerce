import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Grid, List, Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

export default function Products() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const products = [
    {
      id: 1,
      name: 'Premium Brake Pads Set',
      price: '$89.99',
      originalPrice: '$109.99',
      image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 124,
      category: 'Brakes',
      inStock: true,
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'High Performance Air Filter',
      price: '$34.99',
      originalPrice: '$44.99',
      image: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 89,
      category: 'Filters',
      inStock: true,
      badge: 'New'
    },
    {
      id: 3,
      name: 'Engine Oil Filter Kit',
      price: '$24.99',
      originalPrice: '$29.99',
      image: 'https://images.pexels.com/photos/3807372/pexels-photo-3807372.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      reviews: 67,
      category: 'Engine',
      inStock: true,
      badge: 'Sale'
    },
    {
      id: 4,
      name: 'Suspension Struts Pair',
      price: '$199.99',
      originalPrice: '$249.99',
      image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      reviews: 45,
      category: 'Suspension',
      inStock: false,
      badge: 'Out of Stock'
    }
  ];

  const categories = ['Engine', 'Brakes', 'Suspension', 'Electrical', 'Filters', 'Accessories'];

  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Products</h1>
          <p className="text-xl text-gray-600">Find the perfect parts for your vehicle</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Categories */}
                <div>
                  <h3 className="font-semibold mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={category} />
                        <label htmlFor={category} className="text-sm cursor-pointer">{category}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold mb-3">Price Range</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="under-25" />
                      <label htmlFor="under-25" className="text-sm cursor-pointer">Under $25</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="25-50" />
                      <label htmlFor="25-50" className="text-sm cursor-pointer">$25 - $50</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="50-100" />
                      <label htmlFor="50-100" className="text-sm cursor-pointer">$50 - $100</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="over-100" />
                      <label htmlFor="over-100" className="text-sm cursor-pointer">Over $100</label>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <h3 className="font-semibold mb-3">Availability</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="in-stock" />
                      <label htmlFor="in-stock" className="text-sm cursor-pointer">In Stock</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="on-sale" />
                      <label htmlFor="on-sale" className="text-sm cursor-pointer">On Sale</label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{products.length} products found</p>
              <div className="flex items-center gap-4">
                <Select defaultValue="featured">
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}>
              {products.map((product) => (
                <Card key={product.id} className={`overflow-hidden hover:shadow-lg transition-shadow duration-300 ${viewMode === 'list' ? 'flex' : ''}`}>
                  <div className={viewMode === 'list' ? 'w-48 flex-shrink-0' : 'relative'}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`object-cover ${viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'}`}
                    />
                    {product.badge && (
                      <Badge className={`absolute top-3 left-3 ${
                        product.badge === 'Out of Stock' ? 'bg-gray-500' : 'bg-accent'
                      }`}>
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  
                  <div className={viewMode === 'list' ? 'flex-1' : ''}>
                    <CardHeader className={viewMode === 'list' ? 'pb-2' : ''}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                          <span className="text-sm text-gray-400 ml-1">({product.reviews})</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">{product.category}</Badge>
                      </div>
                      <CardTitle className={viewMode === 'list' ? 'text-base' : 'text-lg'}>
                        <Link to={`/products/${product.id}`} className="hover:text-primary">
                          {product.name}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className={`flex items-center ${viewMode === 'list' ? 'justify-between' : 'justify-between mb-4'}`}>
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-primary">{product.price}</span>
                          <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                        </div>
                        {viewMode === 'list' && (
                          <Button 
                            className="btn-primary" 
                            disabled={!product.inStock}
                          >
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Add to Cart
                          </Button>
                        )}
                      </div>
                      
                      {viewMode === 'grid' && (
                        <Button 
                          className="w-full btn-primary" 
                          disabled={!product.inStock}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </Button>
                      )}
                      
                      {!product.inStock && (
                        <p className="text-sm text-red-600 mt-2">Currently unavailable</p>
                      )}
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}