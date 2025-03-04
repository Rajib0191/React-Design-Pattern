export const logUser = (Component) => {
  return (props) => {
    // console.log("Rendering User Component with props:", props);
    return <Component {...props} />;
  };
};
