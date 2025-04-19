
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Search, Calendar, Star, MessageSquare } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e2d1c3] to-[#fdfcfb]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-[#403E43] mb-6">
            Share & Borrow in Your Community
          </h1>
          <p className="text-lg md:text-xl text-[#666] mb-8">
            A sustainable platform for lending and borrowing everyday items, building trust within your local community.
          </p>
          <Button className="bg-[#8B4513] hover:bg-[#A0522D] text-white px-8 py-6 text-lg rounded-full">
            Start Sharing
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-white/50 backdrop-blur-sm rounded-3xl my-8">
        <h2 className="text-3xl font-bold text-center text-[#403E43] mb-12">
          Why Choose Our Platform
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Shield className="w-8 h-8 text-[#8B4513]" />}
            title="Trust-Centered"
            description="Verified profiles and reputation system for safe transactions"
          />
          <FeatureCard
            icon={<Search className="w-8 h-8 text-[#8B4513]" />}
            title="Smart Discovery"
            description="Advanced search and filtering to find what you need"
          />
          <FeatureCard
            icon={<Calendar className="w-8 h-8 text-[#8B4513]" />}
            title="Easy Booking"
            description="Streamlined rental process with integrated scheduling"
          />
          <FeatureCard
            icon={<MessageSquare className="w-8 h-8 text-[#8B4513]" />}
            title="Direct Communication"
            description="In-app messaging for seamless coordination"
          />
          <FeatureCard
            icon={<Star className="w-8 h-8 text-[#8B4513]" />}
            title="Review System"
            description="Build trust through community feedback"
          />
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <Card className="p-6 backdrop-blur-sm bg-white/70 border-none shadow-lg hover:shadow-xl transition-all">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-[#403E43] mb-2">{title}</h3>
        <p className="text-[#666]">{description}</p>
      </div>
    </Card>
  );
};

export default Index;
