import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useForm } from "react-hook-form";
import { Link } from "@remix-run/react";
import 'tailwindcss/tailwind.css';

const supabaseUrl = 'https://xzlaojqvnvuvywshviso.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6bGFvanF2bnZ1dnl3c2h2aXNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5MjI1MzAsImV4cCI6MjAzNDQ5ODUzMH0.qsk6kRv8uKts0K6-3da02Kpmsee50KAhlHiWAGsms5U';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function SlideshowOrder() {
  const { register, handleSubmit, reset } = useForm();
  const [photos, setPhotos] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const onSubmit = async (data) => {
    console.log('Submitting data:', data);
    setIsUploading(true);
    try {
      const photoUrls = [];
      for (let i = 0; i < photos.length; i++) {
        const photo = photos[i];
        const { data: uploadData, error: uploadError } = await supabase
          .storage
          .from('photos')
          .upload(`public/${photo.name}`, photo);

        if (uploadError) {
          console.error('Upload error:', uploadError);
          throw uploadError;
        }

        const url = `${supabaseUrl}/storage/v1/object/public/photos/public/${photo.name}`;
        photoUrls.push(url);

        // Update progress
        setUploadProgress(((i + 1) / photos.length) * 100);
      }

      const { data: supabaseData, error } = await supabase
        .from('orders')
        .insert([{ 
          name: data.name, 
          email: data.email, 
          keywords: data.keywords, 
          genre: data.genre.join(','), // Convert array to comma-separated string
          voice: data.voice,
          photos: photoUrls
        }]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Supabase response:', supabaseData);
      alert('High five! Your order just moonwalked into our system. We will take it from here!');
      reset(); // Reset the form fields
      setPhotos([]); // Clear the photos
    } catch (error) {
      console.error('Error: "Oops! It looks like your file has stage fright. Check its extension and give it another shot!', error);
      alert(`Error submitting order: ${error.message}`);
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const handlePhotoUpload = (event) => {
    const files = Array.from(event.target.files);
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image.heic'];
    
    const validFiles = files.filter(file => allowedTypes.includes(file.type));
    const invalidFiles = files.filter(file => !allowedTypes.includes(file.type));
    
    if (invalidFiles.length > 0) {
      alert('Only .jpg, .png, .webp, and .heic files are allowed.');
    }
    
    setPhotos(prevPhotos => [...prevPhotos, ...validFiles]);
  };

  const handlePhotoDelete = (index) => {
    const newPhotos = photos.filter((_, i) => i !== index);
    setPhotos(newPhotos);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
        <div className="flex flex-col items-center mb-4">
          <img 
            src="https://github.com/rogersaz/chYOUz/blob/main/public/chYOUz-LOGO-COMPANY.png?raw=true" 
            alt="chYOUz logo" 
            className="w-48 h-28 mb-4"
          />
          <h2 className="text-2xl font-semibold text-center">
            Order Your Slideshow.<br />Personalized songs for your moments & memories.
          </h2>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2 md:col-span-1">
            <label className="block mb-2">Name</label>
            <input 
              type="text" 
              {...register("name", { required: true })} 
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your name" 
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="block mb-2">Email</label>
            <input 
              type="email" 
              {...register("email", { required: true })} 
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your email" 
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block mb-2">Enter up to 10 keywords or phrases separated by a comma.</label>
          
          <label className="block mb-2 text-500">
          Let the lyrical magic begin!
          </label>

          <input 
            type="text" 
            {...register("keywords", { required: true })} 
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter keywords" 
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2">Song Genre - Create a musical mashup masterpiece! Select as many as you like</label>
          <select 
            multiple 
            {...register("genre", { required: true })} 
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="Bluegrass">Bluegrass</option>
            <option value="Country">Country</option>
            <option value="Folk">Folk</option>
            <option value="Popular Pop">Popular Pop</option>
            <option value="Dance Pop">Dance Pop</option>
            <option value="Pop Rock">Pop Rock</option>
            <option value="RnB">RnB</option>
            <option value="Rock">Rock</option>
            <option value="Classic Rock">Classic Rock</option>
            <option value="Blues Rock">Blues Rock</option>
            <option value="Glam Rock">Glam Rock</option>
            <option value="Hardcore Punk">Hardcore Punk</option>
            <option value="Indie">Indie</option>
            <option value="Industrial Rock">Industrial Rock</option>
            <option value="Punk Rock">Punk Rock</option>
            <option value="Skate Rock">Skate Rock</option>
            <option value="Skatecore">Skatecore</option>
          </select>
        </div>


        <div className="mt-4">
          <label className="block mb-2">Singer's Voice</label>
          <select 
            {...register("voice", { required: true, validate: value => value !== "select" })} 
            className="w-full px-3 py-2 border rounded-md"
            defaultValue="select"
          >
            <option value="select" disabled>Select Voice Type</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>


        <div className="mt-4">
          <label className="block mb-2 text-red-500">
            Upload Multiple Photos - MAX 45MB
          </label>
          <label className="block mb-2 text-red-500">
          Sorry, only JPG, PNG, WEBP, and HEIC images can join the party!
          </label>
          <input 
            type="file" 
            onChange={handlePhotoUpload} 
            className="w-full px-3 py-2 border rounded-md"
            accept=".jpg, .jpeg, .png, .webp, .heic"
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2">Selected Photos:</label>
          <ul>
            {photos.map((photo, index) => (
              <li key={index} className="flex justify-between items-center">
                {photo.name}
                <button 
                  type="button" 
                  onClick={() => handlePhotoDelete(index)} 
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

        {isUploading && (
          <div className="mt-4">
            <label className="block mb-2">Uploading photos - Please don't hit the dance floor just yet, stay on this page until the magic happens!</label>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-center">
          <button 
            type="submit" 
            className="bg-green-500 text-white px-4 py-3 rounded-md hover:bg-green-600 transition-colors duration-300 font-montserrat"
            disabled={isUploading}
          >
            Submit Order
          </button>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a 
            href="https://buy.stripe.com/cN24k1aD61VF3dK288"
            className="flex items-center justify-center rounded-md bg-yellow-500 px-4 py-3 font-medium text-white hover:bg-yellow-600 transition-colors duration-300 font-montserrat"
          >
            BUY NOW
          </a>
          <a 
            href="https://chyouz.com"
            className="flex items-center justify-center rounded-md bg-gray-500 px-4 py-3 font-medium text-white hover:bg-gray-600 transition-colors duration-300 font-montserrat"
          >
            HOME
          </a>
          <Link
            to="/examples"
            className="flex items-center justify-center rounded-md bg-green-500 px-4 py-3 font-medium text-white hover:bg-green-600 transition-colors duration-300 font-montserrat"
          >
            EXAMPLES
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            to="/about"
            className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-3 font-medium text-white hover:bg-blue-600 transition-colors duration-300 font-montserrat"
          >
            ABOUT
          </Link>
          <Link
            to="/pricing"
            className="flex items-center justify-center rounded-md bg-purple-500 px-4 py-3 font-medium text-white hover:bg-purple-600 transition-colors duration-300 font-montserrat"
          >
            PRICING
          </Link>
          <Link
            to="/contact"
            className="flex items-center justify-center rounded-md bg-orange-500 px-4 py-3 font-medium text-white hover:bg-orange-600 transition-colors duration-300 font-montserrat"
          >
            CONTACT
          </Link>
        </div>
      </form>
    </div>
  );
}





