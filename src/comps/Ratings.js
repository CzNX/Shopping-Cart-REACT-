import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Ratings = ({ rating, r_handler }) => {
  // let rating = 3;

  return (
    <>
      {/* created 5 undefined array to make 5 star ratings */}
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          onClick={() => r_handler(i)}
          style={{ cursor: "pointer" }}
        >
          {rating > i ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      ))}
    </>
  );
};

export default Ratings;
