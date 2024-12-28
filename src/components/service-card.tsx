import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react"; // Icon for button
import {Link} from "@inertiajs/react";

interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, icon }) => {
  return (
    <Card className="w-full shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader className="flex items-center space-x-4">
        <div className="text-3xl text-indigo-600">
            <img src={icon} height={50} width={50} />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
        <Link href={`/service/${id}`}>
          <Button variant="link" className="mt-4 flex items-center text-indigo-600">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
