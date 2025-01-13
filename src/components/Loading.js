import PropTypes from "prop-types";

const Loading = (props) => (
  <div className="flex items-center justify-center">
    <div
      className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-green-700"
      role="status"
    ></div>
    {props.text && <span className="ml-4 text-gray-600">{props.text}</span>}
  </div>
);

Loading.propTypes = {
  text: PropTypes.string,
};

export default Loading;
