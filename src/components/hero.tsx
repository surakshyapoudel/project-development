import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-12 py-16 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            Empowering Your Business with{" "}
            <span className="text-indigo-600">AI Solutions</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Harness the power of artificial intelligence to streamline operations,
            improve decision-making, and drive growth.
          </p>
          <div className="mt-8 flex gap-4">
            <Button variant="default" size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Right Content */}
        <div className="w-full lg:w-1/2">
          <img
            src="/aihero.svg" 
            alt="AI Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 via-transparent to-transparent dark:from-indigo-900"></div>
    </section>
  );
}
