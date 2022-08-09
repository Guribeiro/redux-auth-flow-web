import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default history;

export interface BrowserRouterProps {
  basename?: string;
  children?: React.ReactNode;
  window?: Window;
}

export const rootNavigate = (to: string) => {
	history.push(to);
};