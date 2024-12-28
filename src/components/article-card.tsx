import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { format } from "date-fns"; // Optional for date formatting
import {Link} from "@inertiajs/react";

interface ArticleCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  createdAt: string; // Pass as ISO string
}

const ArticleCard: React.FC<ArticleCardProps> = ({ id, title, description, image, author, createdAt }) => {
  return (
    <Card className="w-full max-w-md shadow-lg hover:shadow-xl transition-shadow">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-md"
      />
      {/* Content */}
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-500">
          By {author} • {format(new Date(createdAt), "MMM dd, yyyy")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link href={`/article/${id}`}>
          <Button variant="link" className="text-indigo-600">
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
