import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DestinationCard from "../components/DestinationCard";
import PromptBox from "../components/PromptBox";

export default function Response() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      <Navbar />

      <main className="flex-1 px-6 md:px-16 py-20">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 
                          text-orange-400 px-4 py-2 rounded-full text-sm mb-6">
            ✈ Explore Destinations
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Choose Your Journey
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Handpicked travel packages with curated itineraries,
            world-class facilities, and unforgettable experiences.
          </p>
        </div>

        <PromptBox />

        {/* 3 COLUMN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <DestinationCard
            id="old-town-heritage"
            image="https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
            title="Old Town Heritage"
            location="Prague, Czech Republic"
            price="$899"
            duration="3 Days / 2 Nights"
            rating="4.8"
            tags={["Cultural", "Historic"]}
          />

          <DestinationCard
            id="mountain-adventure"
            image="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            title="Mountain Adventure"
            location="Swiss Alps, Switzerland"
            price="$1499"
            duration="5 Days / 4 Nights"
            rating="4.9"
            tags={["Adventure", "Nature"]}
          />

          <DestinationCard
            id="beach-escape-maldives"
            image="https://images.unsplash.com/photo-1493558103817-58b2924bce98"
            title="Beach Escape"
            location="Maldives"
            price="$1299"
            duration="4 Days / 3 Nights"
            rating="4.7"
            tags={["Beach", "Relaxation"]}
          />

        </div>

      </main>

      <Footer />
    </div>
  );
}