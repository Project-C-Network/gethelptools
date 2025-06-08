import { useNavigate } from "react-router-dom";

function useHistoryPush() {
  const navigate = useNavigate();

  const push = (path: string, options?: { replace?: boolean; state?: any }) => {
    navigate(path, { replace: options?.replace ?? false, state: options?.state });
  };

  return push;
}

export default useHistoryPush;
