import { Link, MetaFunction } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => {
  return [
    { title: "chYOUz Home Page - Personalized Songs for Your Slideshows" },
    { name: "description", content: "Personalized songs created by chYOUz for custom slideshows and special occasions." }
  ];
};

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-black sm:flex sm:items-center sm:justify-center">
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
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ch<span className="text-7xl sm:text-9xl lg:text-10xl">YOU</span>z &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </h1>
              <p className="mx-auto -mt-4 max-w-lg text-center text-xl text-white sm:max-w-3xl font-montserrat">
                Personalized songs for your moments and memories.
              </p>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center sm:space-x-4">
                {user ? (
                  <Link
                    to="/#"
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
                    <a
                      href="https://buy.stripe.com/cN24k1aD61VF3dK288"
                      className="flex items-center justify-center rounded-md bg-red-500 px-4 py-3 font-medium text-white hover:bg-red-600 font-montserrat"
                    >
                      BUY NOW
                    </a>
                  </div>
                )}
              </div>
              {/* Removed Remix logo */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
