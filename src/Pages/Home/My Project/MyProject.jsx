import { Link } from "react-router-dom";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MyProjectCard from "./MyProjectCard";

const MyProject = () => {
  return (
    <div id="myproject" className="my-16">
      <SectionTitle title={"Project"}></SectionTitle>
      <div className="my-10 grid grid-cols-3">
        <MyProjectCard
          img={"/public/Project Img/TopProductProject.PNG"}
        ></MyProjectCard>
        {/* Project 2 */}
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={"/public/Project Img/HotelWebsite.PNG"} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl text-[#3636FF]">Luxury Hotel</h2>
            <p className="font-medium text-xl">website functionality</p>
            <p>1. Hotel Booking </p>
            <p>2. Dynamic Data Load Form Backend </p>
            <p>3. Login System </p>

            <p className="font-medium text-xl">Technology</p>
            <p>Html,css,js,tailwind,react,nodejs,expressjs,mongodb</p>
            <div className="flex gap-3">
              <Link
                to={"https://github.com/AnikHassan111/Luxury_Hotel_Client_side"}
                className="text-[#3636FF]"
                target="_blank"
              >
                Client Side code{" "}
              </Link>
              <Link
                to={
                  "https://github.com/AnikHassan111/Luxury_Hotel_Back_end_side"
                }
                className="text-[#3636FF]"
                target="_blank"
              >
                Back End code{" "}
              </Link>
            </div>

            <div className="card-actions justify-end">
              <Link
                to={"https://assigment-11-hotelroom-project.web.app"}
                className="btn btn-primary text-white "
                target="_blank"
              >
                Visit Now
              </Link>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={"/public/Project Img/Technologyandelectronics.PNG"}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl text-[#3636FF]">
              Technology And Electronics
            </h2>
            <p className="font-medium text-xl">website functionality</p>
            <p>1. Cart Functionality </p>
            <p>2. Add Product </p>
            <p>3. Backend CRUD operation </p>

            <p className="font-medium text-xl">Technology</p>
            <p>Html,css,js,tailwind,react,nodejs,expressjs,mongodb</p>
            <div className="flex gap-3">
              <Link
                to={
                  "https://github.com/AnikHassan111/technology_electronicFontEnd"
                }
                className="text-[#3636FF]"
                target="_blank"
              >
                Client Side code{" "}
              </Link>
              <Link
                to={
                  "https://github.com/AnikHassan111/technology_electronicBackEnd"
                }
                className="text-[#3636FF]"
                target="_blank"
              >
                Back End code{" "}
              </Link>
            </div>

            <div className="card-actions justify-end">
              <Link
                to={"https://assigement-10.web.app"}
                className="btn btn-primary text-white "
                target="_blank"
              >
                Visit Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
