import { Link } from "react-router-dom";

const MyProjectCard = ({ img }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl text-[#3636FF]">Top Product</h2>
        <p className="font-medium text-xl">website functionality</p>
        <p>1. Change User Role </p>
        <p>2. Product Search function </p>
        <p>3. All Data Featch Form Data Base </p>

        <p className="font-medium text-xl">Technology</p>
        <p>Html,css,js,tailwind,react,nodejs,expressjs,mongodb</p>
        <div className="flex gap-3">
          <Link
            to={
              "https://github.com/AnikHassan111/Top_Product_Website_client_sid"
            }
            className="text-[#3636FF]"
            target="_blank"
          >
            Client Side code{" "}
          </Link>
          <Link
            to={"https://github.com/AnikHassan111/Luxury_Hotel_Back_end_side"}
            className="text-[#3636FF]"
            target="_blank"
          >
            Back End code{" "}
          </Link>
        </div>

        <div className="card-actions justify-end">
          <Link
            to={"https://assigment12topproduct.web.app/"}
            className="btn btn-primary text-white "
            target="_blank"
          >
            Visit Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProjectCard;
