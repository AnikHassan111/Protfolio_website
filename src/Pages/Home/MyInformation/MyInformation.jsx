const MyInformation = () => {
  return (
    <div className="flex items-center my-20">
      <div className=" text-center space-y-3 w-1/2 ">
        <div className="w-24 mx-auto  rounded-full bg-black  overflow-hidden h-24 bg-right">
          <img src="/public/Crop Pic 5.jpg" className="w-full " alt="" />
        </div>
        <div>
          <h1 className="font-bold text-4xl">Anik Hassan</h1>
          <p className="text-xl text-gray-500">Web Developer</p>
        </div>
      </div>
      <div className="w-1/2 ">
        <p className="text-5xl font-semibold  mb-2">
          Hi! I’m a{" "}
          <span className="text-[#3636FF] text-6xl">web developer</span>
        </p>
        <p>
          I love all things tech. I’m always looking for new challenges and
          opportunities, and I’m excited to see what the future holds for me
        </p>
      </div>
    </div>
  );
};

export default MyInformation;
