import { Link, MetaFunction } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => {
  return [
    { title: "About chYOUz - Personalized Songs for Your Moments" },
    { name: "description", content: "Learn about chYOUz and how we create personalized songs for your moments and memories." }
  ];
};

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-blue sm:flex sm:items-center sm:justify-center">
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
            <div className="lg:pb-18 relative px-12 pt-12 pb-8 sm:px-12 sm:pt-24 sm:pb-14 lg:px-16 lg:pt-32">
              <h1 className="text-center text-6xl font-extrabold sm:text-8xl lg:text-9xl font-montserrat tracking-normal sm:tracking-tighter">
                <span className="text-orange-500 drop-shadow-md">
                  &nbsp;&nbsp;&nbsp; About<span className="text-7xl sm:text-9xl lg:text-10xl"></span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </h1>
              <p>&nbsp;</p>
              <p className="mx-auto -mt-4 max-w-lg text-left text-xl text-black sm:max-w-3xl font-montserrat">
                Welcome to <b>chYOUze</b>, where we turn your cherished moments into unforgettable memories through the power of <b>PERSONALIZED</b> songs. Our mission is to create custom digital slideshows that blend your photos with songs <b>UNIQUELY</b> tailored to your story.
              </p>
              <h2 className="text-center text-4xl text-black mt-8 font-montserrat">Our Vision</h2>
              <p className="mx-auto mt-4 max-w-lg text-left text-xl text-black sm:max-w-3xl font-montserrat">
                At <b>chYOUz</b>, we believe that every moment, big or small, deserves to be celebrated in a special way. Our vision is to transform your memories into lasting, PERSONALIZED musical keepsakes that you can share with your loved ones.
              </p>
              <h2 className="text-center text-4xl text-black mt-8 font-montserrat">What We Do</h2>
              <p className="mx-auto mt-4 max-w-lg text-left text-xl text-black sm:max-w-3xl font-montserrat">
                We specialize in crafting <b>PERSONALIZED</b> songs that capture the essence of your experiences. Whether it is a wedding, birthday, anniversary, memorial, favorite pet, child milestone, or just letting someone know you are thinking about them, chYOUz will create a unique and PERSONALIZED soundtrack that reflects your emotions and memories.
              </p>
              <h2 className="text-center text-4xl text-black mt-8 font-montserrat">How It Works</h2>
              <p className="mx-auto mt-4 max-w-lg text-left text-xl text-black sm:max-w-3xl font-montserrat">
                We have a very simple process using the online order link.
              </p>
              <ul className="list-disc list-inside mx-auto mt-4 max-w-lg text-left text-xl text-black sm:max-w-3xl font-montserrat">
                <li><b>chYOUz</b> Your Story: Tell us about the moments you want to commemorate by sharing key words and phrases.</li>
                <li><b>chYOUz</b> Your Style of Music: Select the genre and voice preference (male or female) for your song.</li>
                <li><b>chYOUz</b> Your Photos: Upload and send us your favorite photos to include in the slideshow.</li>
                <li><b>chYOUz</b> will send you a beautifully crafted digital slideshow with your PERSONALIZED song. Download the digital slideshow to keep forever and share with family and friends.</li>
              </ul>
              <h2 className="text-center text-4xl text-black mt-8 font-montserrat">Why Choose Us?</h2>
              <p className="mx-auto mt-4 max-w-lg text-left text-xl text-black sm:max-w-3xl font-montserrat">
                Just as our name implies…you have choice. At <b>chYOUz</b>, we tailor to YOU!
              </p>
              <p className="mx-auto mt-4 max-w-lg text-left text-xl text-black sm:max-w-3xl font-montserrat">
                <b>PERSONALIZED:</b> Every song is custom-made to fit your story and preferences.
              </p>
              <p className="mx-auto mt-4 max-w-lg text-left text-xl text-black sm:max-w-3xl font-montserrat">
                <b>PROFESSIONAL QUALITY:</b> chYOUz will design your song to share your story and ensure top-notch quality.
              </p>
              <p className="mx-auto mt-4 max-w-lg text-left text-xl text-black sm:max-w-3xl font-montserrat">
                <b>EASY AND CONVENTIENT:</b> Our simple process makes it easy for you to create a memorable gift.
              </p>
              <p className="mx-auto mt-4 max-w-lg text-left text-xl text-black sm:max-w-3xl font-montserrat">
                <b>Get Started</b>
              </p>
              <p className="mx-auto mt-4 max-w-lg text-left text-xl text-black sm:max-w-3xl font-montserrat">
                Ready to turn your moments into music? Visit our order link to start creating your personalized slideshow today.
              </p>
              <p className="mx-auto mt-4 max-w-lg text-left text-xl text-black sm:max-w-3xl font-montserrat">
                <b>Celebrate your memories with chYOUz and make them last forever!</b>
              </p>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center sm:space-x-4">
                {user ? (
                  <Link
                    to="/notes"
                    className="flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-600 sm:px-8 font-montserrat"
                  >
                    View Notes for {user.email}
                  </Link>
                ) : (
                  <div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-5 sm:gap-5">
                    <Link
                      to="/slideshow-order"
                      className="flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-600 sm:px-8 font-montserrat"
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
                  </div>
                )}
              </div>
              {/* Removed Logo */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

