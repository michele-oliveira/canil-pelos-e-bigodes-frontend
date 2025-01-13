import PropTypes from "prop-types";

const List = ({
  data,
  component: Component,
  emptyComponent: EmptyComponent,
}) => {
  if (data.length) {
    return <Component />;
  } else {
    return <EmptyComponent />;
  }
};

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  component: PropTypes.elementType.isRequired,
  emptyComponent: PropTypes.elementType.isRequired,
};

export default List;
