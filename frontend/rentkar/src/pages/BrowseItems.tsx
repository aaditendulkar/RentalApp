
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

const BrowseItems = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <h1 className="text-4xl font-bold text-[#8B4513]">Browse Items</h1>
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input className="pl-10" placeholder="Search items..." />
            </div>
            <Button variant="outline" className="border-[#8B4513] text-[#8B4513]">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder items */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className="overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-video bg-beige-200"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#403E43] mb-2">Sample Item {item}</h3>
                <p className="text-[#666] text-sm mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#8B4513] font-semibold">₹100/day</span>
                  <Button size="sm" className="bg-[#8B4513] hover:bg-[#A0522D]">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseItems;
