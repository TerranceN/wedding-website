"use client";

import { PropsWithChildren, useEffect, useLayoutEffect } from "react";

const ScrollToAnchor = ({ children }: PropsWithChildren<{}>) => {
  useLayoutEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const id = hash.slice(1);
      let element = document.getElementById(id);
      console.log("force scroll1", id, element);
      element?.scrollIntoView();
    }
  }, []);

  return children;
};

export default ScrollToAnchor;
