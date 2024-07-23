import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Erlang Showcase</h1>
      <p className="text-xl mb-8">Explore the power and elegance of Erlang programming.</p>
      <Button asChild>
        <Link to="/soul-of-erlang">Discover The Soul of Erlang</Link>
      </Button>
    </div>
  );
};

export default Index;