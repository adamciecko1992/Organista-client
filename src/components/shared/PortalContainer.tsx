import ReactDOM from "react-dom";
import { PORTAL_ROOT_ID } from "./constants";

type PortalContainerProps = {
  children: React.ReactNode;
};

export const PortalContainer = ({ children }: PortalContainerProps) => {
  const portalRoot = document.getElementById(PORTAL_ROOT_ID)!;
  return ReactDOM.createPortal(children, portalRoot);
};
