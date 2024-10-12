// Import necessary modules from Remix framework
import { Link, MetaFunction } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

// Set metadata for the page
export const meta: MetaFunction = () => {
  return [
    { title: "chYOUz Examples - Personalized Songs for Your Slideshows" },
    { name: "description", content: "Explore examples of personalized songs created by chYOUz for custom slideshows and special occasions." }
  ];
};

// Define the main component for the page
export default function Index() {
  // Get user information (if available) using custom hook
  const user = useOptionalUser();

  return (
    <main className="relative min-h-screen bg-green sm:flex sm:items-center sm:justify-center">
      {/* Main container for the content */}
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            {/* Background image for visual appeal */}
            <div className="absolute inset-0 flex justify-center">
              <img
                className="h-full w-full object-cover"
                src="https://github.com/rogersaz/chYOUz-2/blob/main/public/chYOUz-Background-Pages.jpg?raw=true"
                alt="chYOUz custom music for your custom slideshows"
              />
              <div className="absolute inset-0 bg-[color:rgba(139,92,246,0.5)] mix-blend-multiply" />
            </div>

            {/* Main content section */}
            <div className="lg:pb-18 relative px-12 pt-12 pb-8 sm:px-12 sm:pt-24 sm:pb-14 lg:px-16 lg:pt-32">
              {/* Page title */}
              <h1 className="text-center text-6xl font-extrabold sm:text-8xl lg:text-9xl font-montserrat tracking-normal sm:tracking-tighter">
                <span className="text-orange-500 drop-shadow-md">
                  Examples
                </span>
              </h1>

              {/* Section for embedding YouTube video examples */}
              <div className="mt-10 flex flex-col items-center">
                {/* List of YouTube videos rendered as cards */}
                {[ 
                  "https://www.youtube.com/embed/2gSFSt6VmLI", // New example video link
                  "https://www.youtube.com/embed/ebPtIGbGpB4", // New example video link
                  "https://www.youtube.com/embed/078Q4ew5_y0", // New example video link
                  "https://www.youtube.com/embed/FSnLtNS7rhQ", // New example video link
                  "https://www.youtube.com/embed/An_CFJ7x-JE", // New example video link
                  "https://www.youtube.com/embed/J3X3gSRlpbY", // New example video link
                  "https://www.youtube.com/embed/QygJ3s4YDr0", // New example video link
                ].map((link, index) => (
                  <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg mb-8">
                    {/* Container for YouTube video iframe */}
                    <div className="relative w-full aspect-video">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={link}
                        title={`YouTube video player ${index + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>

                    {/* Video details section */}
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">Example Video {index + 1}</div>
                      <p className="text-gray-700 text-base">
                        Personalized song created by chYOUz for custom slideshows.
                      </p>
                    </div>

                    {/* Tags for each video */}
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#customsong</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#slideshow</span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#chYOUz</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Section for buttons to navigate between pages */}
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center sm:space-x-4">
                {user ? (
                  // Display "View Notes" button if user is logged in
                  <Link
                    to="/notes"
                    className="flex items-center justify-center rounded-md border border-transparent bg-green-500 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-green-600 sm:px-8 font-montserrat"
                  >
                    View Notes for {user.email}
                  </Link>
                ) : (
                  // Display buttons for general navigation if user is not logged in
                  <div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-5 sm:gap-5">
                    <Link
                      to="/slideshow-order"
                      className="flex items-center justify-center rounded-md border border-transparent bg-green-500 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-green-600 sm:px-8 font-montserrat"
                    >
                      Order
                    </Link>
                    <Link
                      to="/about"
                      className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-3 font-medium text-white hover:bg-blue-600 font-montserrat"
                    >
                      ABOUT
                    </Link>
                    <Link
                      to="/#"
                      className="flex items-center justify-center rounded-md bg-green-500 px-4 py-3 font-medium text-white hover:bg-green-600 font-montserrat"
                    >
                      EXAMPLES
                    </Link>
                    <Link
                      to="/pricing"
                      className="flex items-center justify-center rounded-md bg-red-500 px-4 py-3 font-medium text-white hover:bg-red-600 font-montserrat"
                    >
                      PRICING
                    </Link>
                    <Link
                      to="/contact"
                      className="flex items-center justify-center rounded-md bg-orange-500 px-4 py-3 font-medium text-white hover:bg-orange-600 font-montserrat"
                    >
                      Contact
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
