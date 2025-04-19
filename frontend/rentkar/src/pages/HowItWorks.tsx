
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, UserCheck, MessageSquare } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#8B4513] mb-12">How RentKaro Works</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all">
          <div className="flex flex-col items-center text-center gap-4">
            <UserCheck className="w-12 h-12 text-[#8B4513]" />
            <h3 className="text-xl font-semibold text-[#403E43]">Create Account</h3>
            <p className="text-[#666]">Sign up and verify your profile to start lending or borrowing items</p>
          </div>
        </Card>

        <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all">
          <div className="flex flex-col items-center text-center gap-4">
            <Clock className="w-12 h-12 text-[#8B4513]" />
            <h3 className="text-xl font-semibold text-[#403E43]">Browse & Book</h3>
            <p className="text-[#666]">Find items you need and book them for your desired duration</p>
          </div>
        </Card>

        <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all">
          <div className="flex flex-col items-center text-center gap-4">
            <MessageSquare className="w-12 h-12 text-[#8B4513]" />
            <h3 className="text-xl font-semibold text-[#403E43]">Connect</h3>
            <p className="text-[#666]">Chat with the owner and arrange pickup/delivery details</p>
          </div>
        </Card>

        <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all">
          <div className="flex flex-col items-center text-center gap-4">
            <CheckCircle2 className="w-12 h-12 text-[#8B4513]" />
            <h3 className="text-xl font-semibold text-[#403E43]">Return & Review</h3>
            <p className="text-[#666]">Return the item and share your experience with the community</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HowItWorks;
