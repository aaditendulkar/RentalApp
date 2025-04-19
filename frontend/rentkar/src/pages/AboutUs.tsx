
import { Card } from "@/components/ui/card";
import { Heart, Users, Shield } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#8B4513] mb-8">About RentKaro</h1>
        <p className="text-lg text-center text-[#666] mb-12">
          We're building a community of sharers and borrowers, making everyday items more accessible while promoting sustainability.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 bg-white/80 backdrop-blur-sm text-center">
            <Users className="w-12 h-12 text-[#8B4513] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#403E43] mb-2">Community First</h3>
            <p className="text-[#666]">Building trust and connections in your neighborhood</p>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm text-center">
            <Shield className="w-12 h-12 text-[#8B4513] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#403E43] mb-2">Secure & Safe</h3>
            <p className="text-[#666]">Verified profiles and secure transactions</p>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur-sm text-center">
            <Heart className="w-12 h-12 text-[#8B4513] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#403E43] mb-2">Eco-Friendly</h3>
            <p className="text-[#666]">Reducing waste through sharing economy</p>
          </Card>
        </div>

        <div className="bg-beige-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-[#403E43] mb-4">Our Mission</h2>
          <p className="text-[#666] mb-4">
            RentKaro aims to revolutionize how we think about ownership by creating a platform where sharing becomes the new norm. 
            We believe in making everyday items accessible while reducing environmental impact and building stronger communities.
          </p>
          <p className="text-[#666]">
            Join us in creating a more sustainable and connected future, one rental at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
