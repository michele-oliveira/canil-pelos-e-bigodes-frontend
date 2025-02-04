import PropTypes from "prop-types";

const Container = ({ children, className }) => (
  <div className={"flex flex-col min-h-screen " + className}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
