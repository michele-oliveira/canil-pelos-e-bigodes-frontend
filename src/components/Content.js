import PropTypes from "prop-types";

const Content = ({ children, className }) => (
  <div className={"flex-grow " + className}>{children}</div>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Content;
