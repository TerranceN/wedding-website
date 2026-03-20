"use client";

import { PropsWithChildren, useEffect, useLayoutEffect } from "react";

const ScrollToAnchor = ({ children }: PropsWithChildren<{}>) => {
  useLayoutEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const id = hash.slice(1);
      let element = document.getElementById(id);
      setTimeout(() => {
        element?.scrollIntoView();
      }, 0);
    }
  }, []);

  return children;
};

export default ScrollToAnchor;
