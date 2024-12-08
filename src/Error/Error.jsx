
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

const Error = () => {
  return (
    <div className="flex justify-center items-center bg-gray-900 h-screen text-white">
      <div className="text-center">
        <h1 className="mb-4 font-bold text-9xl">404</h1>
        <h2 className="mb-4 text-4xl">Uh-oh! Page Not Found</h2>
        <p className="mb-8 text-lg">It seems you're lost in space. Let's get you back home!</p>
        <a href="/" className="btn btn-primary btn-wide">Go Home</a>
        <div className="mt-8">
          <img 
            src="https://media.giphy.com/media/26uf9QPzzlKPvQG5u/giphy.gif" 
            alt="Funny astronaut" 
            className="border-4 border-gray-800 mx-auto rounded-full w-48"
          />
        </div>
      </div>
    </div>
  );
};

export default Error;
