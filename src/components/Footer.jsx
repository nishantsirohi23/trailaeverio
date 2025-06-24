import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-2 bg-gray-900 p-2 rounded-lg w-full">
            <Mail className="text-gray-400 w-5 h-5" />
            <Input
              placeholder="Enter Your Email"
              className="bg-transparent border-0 text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button size="icon" variant="ghost">
              <Send className="text-white w-5 h-5" />
            </Button>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Destinations</li>
            <li>Travel Guides</li>
            <li>Tour Packages</li>
            <li>Customer Stories</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>About Us</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Travel Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Flight Booking</li>
            <li>Hotel Reservations</li>
            <li>Visa Assistance</li>
            <li>Travel Insurance</li>
            <li>Transportation</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Help Center</li>
            <li>Booking Policy</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Cancellation Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Contact Form</li>
            <li>Our Offices</li>
            <li>+91 9837501414</li>
            <li>support@aeroviaholidays.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
