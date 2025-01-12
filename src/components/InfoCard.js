import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const InfoCard = ({ imgSrc, imgAlt, text, linkTo }) => {
  return (
    <div className="relative bg-white rounded-full overflow-hidden flex items-center justify-center group">
      <img
        src={imgSrc}
        className="w-64 h-64 object-cover rounded-full"
        alt={imgAlt}
      />
      {linkTo ? (
        <Link
          to={linkTo}
          className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center transition-all duration-300 rounded-full"
        >
          <p className="p-4 text-white text-lg text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Conheça as melhores rações
          </p>
        </Link>
      ) : (
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center transition-all duration-300 rounded-full">
          <p className="p-4 text-white text-lg text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {text}
          </p>
        </div>
      )}
    </div>
  );
};

InfoCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
};

export default InfoCard;
