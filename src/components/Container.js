import PropTypes from "prop-types";

const Container = ({ children, className }) => (
  <div className={"min-h-[100vh] " + className}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
