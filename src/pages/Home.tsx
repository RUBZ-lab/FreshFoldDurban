/**
 * Home page component for FreshFold Durban website
 * Features hero section, services, pricing, testimonials, and contact information
 */

import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Phone, 
  MessageSquare, 
  Sparkles, 
  Shirt, 
  Home as HomeIcon, 
  Truck, 
  Star,
  MapPin,
  Clock,
  Check
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-green-500 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Welcome to <br />
                <span className="text-yellow-300">Fresh</span>
                <span className="text-green-300">Fold</span> <br />
                Durban
              </h1>
              <p className="text-xl lg:text-2xl mb-4 text-blue-100 font-medium">
                Your trusted home-based laundry pickup & delivery service.
              </p>
              <p className="text-lg mb-8 text-blue-100">
                We pick up, wash with care, fold neatly, and deliver fresh — ready to wear.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 transition-colors">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Book via WhatsApp
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 transition-colors">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative">
                <img 
                  src="https://pub-cdn.sider.ai/u/U005HE8YVZR/web-coder/686863280dd11641ee216002/resource/8ad1517e-c0ec-4ed9-a574-00541564a152.jpg" 
                  alt="Fresh folded towels"
                  className="rounded-2xl shadow-2xl object-cover h-96 w-full"
                />
                <Badge className="absolute top-4 right-4 bg-yellow-400 text-black font-semibold">
                  <Sparkles className="mr-1 h-4 w-4" />
                  Fresh & Clean
                </Badge>
                <Badge className="absolute bottom-4 left-4 bg-blue-600 text-white">
                  <Clock className="mr-1 h-4 w-4" />
                  24-48 Hours
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional laundry services with transparent pricing and quality guarantee
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Wash & Fold</CardTitle>
                <CardDescription className="text-2xl font-bold text-green-600">R30/kg</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Complete wash, dry, and fold service</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shirt className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Ironing</CardTitle>
                <CardDescription className="text-2xl font-bold text-green-600">R15/item</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Professional pressing and ironing</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <HomeIcon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Bedding & Curtains</CardTitle>
                <CardDescription className="text-2xl font-bold text-green-600">From R100</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Specialized care for large items</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Pickup & Delivery</CardTitle>
                <CardDescription className="text-2xl font-bold text-green-600">Free over R200</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Convenient door-to-door service</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It <span className="text-blue-600">Works</span>
            </h2>
            <p className="text-xl text-gray-600">
              Simple 4-step process to get your laundry done professionally
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Book via WhatsApp",
                description: "Send us a message to schedule your pickup",
                icon: MessageSquare,
                color: "from-green-500 to-teal-500"
              },
              {
                step: 2,
                title: "We collect from your door",
                description: "Our team picks up your laundry at your convenience",
                icon: Truck,
                color: "from-blue-500 to-purple-500"
              },
              {
                step: 3,
                title: "We wash, dry & fold with love",
                description: "Professional cleaning with care and attention",
                icon: Sparkles,
                color: "from-purple-500 to-pink-500"
              },
              {
                step: 4,
                title: "We deliver fresh in 24-48 hours",
                description: "Your clean laundry returned fresh and ready",
                icon: HomeIcon,
                color: "from-orange-500 to-red-500"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg`}>
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <Badge className="absolute -top-2 -right-2 bg-yellow-400 text-black font-bold text-lg w-8 h-8 rounded-full flex items-center justify-center">
                    {item.step}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Plans Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Monthly <span className="text-blue-600">Plans</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Save time and money with our monthly laundry packages. Great for busy professionals, students, or families.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Student Plan */}
            <Card className="relative hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Student Plan</CardTitle>
                <div className="text-4xl font-bold text-blue-600 mt-2">
                  R399<span className="text-lg text-gray-500 font-normal">/month</span>
                </div>
                <p className="text-gray-600 mt-2">Perfect for students and single professionals</p>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Up to 10kg per month",
                  "Free pickup & delivery",
                  "24-48 hour turnaround",
                  "WhatsApp booking"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>

            {/* Family Plan */}
            <Card className="relative hover:shadow-xl transition-all duration-300 ring-2 ring-blue-500 scale-105">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black font-semibold">
                Most Popular
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Family Plan</CardTitle>
                <div className="text-4xl font-bold text-blue-600 mt-2">
                  R699<span className="text-lg text-gray-500 font-normal">/month</span>
                </div>
                <p className="text-gray-600 mt-2">Ideal for families and busy households</p>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Up to 20kg per month",
                  "Free pickup & delivery",
                  "Priority processing",
                  "Monthly ironing included",
                  "WhatsApp booking"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="relative hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Premium Plan</CardTitle>
                <div className="text-4xl font-bold text-blue-600 mt-2">
                  R999<span className="text-lg text-gray-500 font-normal">/month</span>
                </div>
                <p className="text-gray-600 mt-2">For large families and premium service</p>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Up to 35kg per month",
                  "Free pickup & delivery",
                  "Same-day service available",
                  "Monthly ironing included",
                  "Special care items",
                  "WhatsApp booking"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                <Button className="w-full mt-6 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Areas We Serve Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Areas We <span className="text-yellow-300">Serve</span>
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                We proudly serve the greater Durban area with reliable pickup and delivery service
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Durban Central",
                  "Glenwood",
                  "Morningside",
                  "Overport",
                  "Berea",
                  "Umbilo",
                  "Bluff",
                  "& Surrounds"
                ].map((area, index) => (
                  <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <MapPin className="h-5 w-5 text-yellow-300 mr-3" />
                    <span className="font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://pub-cdn.sider.ai/u/U005HE8YVZR/web-coder/686863280dd11641ee216002/resource/b86ce5c4-f06e-4880-bd78-11c5abe296c6.jpg" 
                alt="Durban cityscape"
                className="rounded-2xl shadow-2xl object-cover h-96 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-blue-600">Customers</span> Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Working Professional",
                content: "FreshFold has been a lifesaver! As a busy working mom, I don't have time for laundry. Their service is reliable, professional, and my clothes always come back perfectly clean and folded.",
                avatar: "https://pub-cdn.sider.ai/u/U005HE8YVZR/web-coder/686863280dd11641ee216002/resource/8d34b692-7684-45a4-af6d-33c85f16deb6.jpg"
              },
              {
                name: "David Chen",
                role: "University Student",
                content: "The student plan is perfect for my budget. WhatsApp booking makes it super easy, and the 24-48 hour turnaround is exactly what I need. Highly recommend!",
                avatar: "https://pub-cdn.sider.ai/u/U005HE8YVZR/web-coder/686863280dd11641ee216002/resource/4b96da97-49fa-4bfc-89e7-3a05e27a7035.jpg"
              },
              {
                name: "Lisa Patel",
                role: "Family of 4",
                content: "We've been using FreshFold for 6 months now. The family plan saves us so much time and money. The quality is outstanding and the service is always punctual.",
                avatar: "https://pub-cdn.sider.ai/u/U005HE8YVZR/web-coder/686863280dd11641ee216002/resource/119dca1e-06f9-42b6-a3ec-e8515fc15f7a.jpg"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-green-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience <span className="text-yellow-300">Fresh & Clean</span>?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of satisfied customers who trust FreshFold Durban for their laundry needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 text-lg">
              <MessageSquare className="mr-2 h-6 w-6" />
              Book Now via WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              <Phone className="mr-2 h-6 w-6" />
              Call Us: 031 123 4567
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-blue-400">Fresh</span>
                <span className="text-green-400">Fold</span> Durban
              </h3>
              <p className="text-gray-400 mb-4">
                Your trusted laundry partner in Durban. Professional service, affordable prices.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  <MessageSquare className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-600">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Wash & Fold</li>
                <li>Ironing Service</li>
                <li>Bedding & Curtains</li>
                <li>Pickup & Delivery</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Areas</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Durban Central</li>
                <li>Glenwood</li>
                <li>Morningside</li>
                <li>Berea & Surrounds</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>WhatsApp: 073 123 4567</li>
                <li>Phone: 031 123 4567</li>
                <li>hello@freshfolddurban.co.za</li>
                <li>Mon-Sat: 8AM-6PM</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FreshFold Durban. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}