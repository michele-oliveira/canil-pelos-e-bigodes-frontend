import reactStackedToast from "react-stacked-toast";
import PropTypes from "prop-types";

/**
 * @typedef {Object} ToastArg
 * @property {string} [title] - The title of the toast.
 * @property {string} [description] - A description for the toast.
 * @property {"default" | "error" | "loading" | "success" | "warning"} [type] - The type of the toast.
 * @property {number} [duration] - Duration of the toast in milliseconds.
 */

/**
 * Show a toast notification with predefined styles and options.
 * @param {ToastArg} opts - The options for the toast.
 * @returns {void}
 */

const toast = (opts) =>
  reactStackedToast({
    style: {
      backgroundColor: "rgb(51, 61, 75)",
      color: "white",
    },
    ...opts,
  });

toast.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.oneOf(["default", "error", "loading", "success", "warning"]),
  duration: PropTypes.number,
};

export default toast;
