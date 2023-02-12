import Loader from '../Loader';

const withLoading =
  (Component) =>
  ({ ...props }) => {
    if (props.loading) {
      return <Loader />;
    }

    return <Component {...props} />;
  };

export default withLoading;
