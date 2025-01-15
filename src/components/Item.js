import PropTypes from "prop-types";

const Item = ({ data, component, emptyComponent: EmptyComponent }) => {
  if (data && Object.keys(data).length) {
    return component(data);
  } else {
    return <EmptyComponent />;
  }
};

Item.propTypes = {
  data: PropTypes.object,
  component: PropTypes.elementType.isRequired,
  emptyComponent: PropTypes.elementType.isRequired,
};

export default Item;
