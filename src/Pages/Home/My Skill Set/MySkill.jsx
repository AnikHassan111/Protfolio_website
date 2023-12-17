import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const MySkill = () => {
  return (
    <div className="mx-60 ">
      <SectionTitle title={"My Skill"}></SectionTitle>
      <div className="grid grid-cols-4 gap-6 mt-10 justify-center">
        <div className=" bg-gray-500 text-white rounded-md text-center w-32 py-3 ">
          <img
            className="w-14 mx-auto"
            src="/public/Icon/icons8-html-100.png"
            alt=""
          />
          <p>Html</p>
        </div>
        <div className=" bg-gray-500 text-white rounded-md text-center w-32 py-3 ">
          <img
            className="w-14 mx-auto"
            src="/public/Icon/icons8-css3-100.png"
            alt=""
          />
          <p>Css</p>
        </div>
        <div className=" bg-gray-500 text-white rounded-md text-center w-32 py-3 ">
          <img
            className="w-14 mx-auto"
            src="/public/Icon/icons8-js-240.png"
            alt=""
          />
          <p>Js</p>
        </div>
        <div className=" bg-gray-500 text-white rounded-md text-center w-32 py-3 ">
          <img
            className="w-14 mx-auto"
            src="/public/Icon/icons8-tailwind-css-100.png"
            alt=""
          />
          <p>Tailwind</p>
        </div>
        <div className=" bg-gray-500 text-white rounded-md text-center w-32 py-3 ">
          <img
            className="w-14 mx-auto"
            src="/public/Icon/icons8-react-100.png"
            alt=""
          />
          <p>React</p>
        </div>
        <div className=" bg-gray-500 text-white rounded-md text-center w-32 py-3 ">
          <img
            className="w-14 mx-auto"
            src="/public/Icon/icons8-nodejs-240.png"
            alt=""
          />
          <p>Node JS</p>
        </div>
        <div className=" bg-gray-500 text-white rounded-md text-center w-32 py-3 ">
          <img
            className="w-14 mx-auto"
            src="/public/Icon/icons8-express-js-250.png"
            alt=""
          />
          <p>Express JS</p>
        </div>

        <div className=" bg-gray-500 text-white rounded-md text-center w-32 py-3 ">
          <img
            className="w-14 mx-auto"
            src="/public/Icon/icons8-mongodb-240.png"
            alt=""
          />
          <p>MongoDB</p>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default MySkill;
