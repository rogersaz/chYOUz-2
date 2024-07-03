import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-red sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0 flex justify-center">
              <img
                className="h-full w-full object-cover"
                src="https://github.com/rogersaz/chYOUz-2/blob/main/public/chYOUz-Background-Pages.jpg?raw=true"
                alt="chYOUz custom music for your custom slideshows"
              />
              <div className="absolute inset-0 bg-[color:rgba(139,92,246,0.5)] mix-blend-multiply" />
            </div>
            <div className="lg:pb-18 relative px-12 pt-16 pb-8 sm:px-12 sm:pt-24 sm:pb-14 lg:px-16 lg:pt-32">
              <h1 className="text-center text-6xl font-extrabold sm:text-8xl lg:text-9xl font-montserrat tracking-normal sm:tracking-tighter">
                <span className="text-orange-500 drop-shadow-md">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pricing <span className="text-7xl sm:text-9xl lg:text-10xl"></span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </h1>
              <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
                <h2 className="text-2xl font-bold mb-4">chYOUz</h2>
                <p className="text-xl mb-4">PERSONALIZED song/slideshow: up to 24 photos - 1 Personalized song</p>
                <p className="text-3xl font-bold mb-6">$49.00</p>
                <p className="mb-4">
                  chYOUz will send you a beautifully crafted digital slideshow with your PERSONALIZED song. Download the digital slideshow to keep forever and share with family and friends.
                </p>
                <p className="mb-4">
                  We have a very simple process using the <a href="https://chyouz.com/slideshow-order" className="inline-block bg-white border border-black text-black px-3 py-1 rounded-md hover:bg-gray-200">order link</a>.
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li><strong>chYOUz Your Story:</strong> Tell us about the moments you want to commemorate by sharing key words and phrases.</li>
                  <li><strong>chYOUz Your Style of Music:</strong> Select the genre and voice preference (male or female) for your song.</li>
                  <li><strong>chYOUz Your Photos:</strong> Upload and send us your favorite photos to include in the slideshow.</li>
                </ul>
                <p className="mb-4">
                  Ready to turn your moments into music? Visit our <a href="https://chyouz.com/slideshow-order" className="inline-block bg-white border border-black text-black px-3 py-1 rounded-md hover:bg-gray-200">order link</a> to start creating your personalized slideshow today.
                </p>
                <p className="mb-4">
                  Celebrate your memories with chYOUz and make them last forever!
                </p>
              </div>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center sm:space-x-4">
                {user ? (
                  <Link
                    to="/notes"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-violet-700 shadow-sm hover:bg-violet-50 sm:px-8 font-montserrat"
                  >
                    View Notes for {user.email}
                  </Link>
                ) : (
                  <div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-6 sm:gap-5">
                    <Link
                      to="/slideshow-order"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-violet-700 shadow-sm hover:bg-violet-50 sm:px-8 font-montserrat"
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
                      to="/examples"
                      className="flex items-center justify-center rounded-md bg-green-500 px-4 py-3 font-medium text-white hover:bg-green-600 font-montserrat"
                    >
                      EXAMPLES
                    </Link>
                    <Link
                      to="/#"
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
                    <a
                      href="https://buy.stripe.com/cN24k1aD61VF3dK288"
                      className="flex items-center justify-center rounded-md bg-red-500 px-4 py-3 font-medium text-white hover:bg-red-600 font-montserrat"
                    >
                      BUY NOW
                    </a>
                  </div>
                )}
              </div>
              {/* Removed logo */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

