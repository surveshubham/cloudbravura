import { useEffect } from "react";
import { useRouter } from "next/router";

const ScrollToTop = ({ children }: any) => {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

export default ScrollToTop;