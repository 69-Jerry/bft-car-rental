

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#00235A]">
      <div className="text-center">
      <div className="animate-spin  rounded-full h-20 w-20  border-t-4 border-[#FF5E14] border-b-4 "></div>
        <p className="mt-4 text-white font-poppins">Loading</p>
        <p className="text-white">please wait...</p>
      </div>
    </div>
  );
};

export default Loader;

