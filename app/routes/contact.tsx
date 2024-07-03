import { Link, MetaFunction, Form, useActionData } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import { json } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: "chYOUz Home Page - Personalized Songs for Your Slideshows" },
    { name: "description", content: "Personalized songs created by chYOUz for custom slideshows and special occasions." }
  ];
};

// The action function logs the form data and returns a success response
export const action = async ({ request }) => {
  let formData = await request.formData();
  let name = formData.get("name");
  let email = formData.get("email");
  let message = formData.get("comments");

  // Handle form data (e.g., send email, save to database, etc.)
  console.log({ name, email, message });

  return json({ success: true });
};

export default function Index() {
  const user = useOptionalUser();
  const actionData = useActionData();

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // Process formData here
    console.log({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('comments')
    });

    // You can add any additional actions here, such as updating state or redirecting
    form.submit(); // Continue with the default form submission
  };

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
              <div className="mt-10 flex justify-center">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                  <form
                    name="contact"
                    method="post"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden">
                      <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                    </p>
                    <div>
                      <label>
                        Name 
                        <input id="name" type="text" name="name" required className="w-full p-2 border border-gray-300 rounded" />
                      </label>
                    </div>
                    <div className="mt-4">
                      <label htmlFor="email">
                        Email
                        <input id="email" type="email" name="email" required className="w-full p-2 border border-gray-300 rounded" />
                      </label>
                    </div>
                    <div className="mt-4">
                      <label>
                        Message?
                        <textarea name="comments" className="w-full p-2 border border-gray-300 rounded"></textarea>
                      </label>
                    </div>
                    <div className="mt-4">
                      <button type="submit" className="w-full bg-violet-700 text-white p-2 rounded">
                        Submit message
                      </button>
                    </div>
                  </form>
                  {actionData?.success && (
                    <p className="mt-4 text-green-500">Message submitted successfully!</p>
                  )}
                </div>
              </div>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center sm:space-x-4">
                {user ? (
                  <Link
                    to="/#"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-violet-700 shadow-sm hover:bg-violet-50 sm:px-8 font-montserrat"
                  >
                    View Notes for {user.email}
                  </Link>
                ) : (
                  <div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-5 sm:gap-5">
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
