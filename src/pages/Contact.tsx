import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-100">
            Get in touch with our automotive experts. We're here to help you find the right parts.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Smith" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                    </div>
                    
                    <div>
                      <Label htmlFor="vehicle">Vehicle Information (Optional)</Label>
                      <Input id="vehicle" placeholder="2020 Toyota Camry" />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Part inquiry" />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        rows={5}
                        placeholder="Tell us how we can help you..."
                      />
                    </div>
                    
                    <Button className="w-full btn-primary" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Have a question about a specific part or need help finding what you're looking for? 
                  Our team of automotive experts is here to help. Reach out to us through any of the 
                  methods below.
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600 mb-2">(555) 123-4567</p>
                        <p className="text-sm text-gray-500">Monday - Friday: 8am - 6pm</p>
                        <p className="text-sm text-gray-500">Saturday: 9am - 4pm</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600 mb-2">info@autoparts.com</p>
                        <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                        <p className="text-gray-600 mb-2">123 Auto Street</p>
                        <p className="text-gray-600 mb-2">Car City, CC 12345</p>
                        <p className="text-sm text-gray-500">Visit our showroom and warehouse</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                        <div className="space-y-1 text-gray-600">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Do you offer installation services?</h3>
              <p className="text-gray-600 mb-6">
                We focus on providing quality parts, but we can recommend trusted local mechanics 
                and service centers in your area.
              </p>
              
              <h3 className="font-semibold text-gray-900 mb-3">What if I order the wrong part?</h3>
              <p className="text-gray-600">
                We offer a 30-day return policy on most parts. Contact us and we'll help you 
                exchange it for the correct part.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Do you price match?</h3>
              <p className="text-gray-600 mb-6">
                Yes! We'll match any competitor's price on identical parts. Just provide us with 
                the competitor's quote.
              </p>
              
              <h3 className="font-semibold text-gray-900 mb-3">How can I find the right part for my car?</h3>
              <p className="text-gray-600">
                Use our part finder tool on the website, or call our experts. We'll help you 
                identify the exact part you need.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}