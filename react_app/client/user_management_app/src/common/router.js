import { useLocation, useNavigate, useParams } from "react-router-dom";

export const Router = (Component) => {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigation = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigation, params }} />;
  }

  return ComponentWithRouterProp;
};
