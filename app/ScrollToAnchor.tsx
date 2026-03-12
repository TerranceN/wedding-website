"use client";

import { useEffect } from "react";

const ScrollToAnchor = () => {
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const element = document.getElementById(hash);
      element?.scrollIntoView();
    }
  }, []);

  return null;
};

export default ScrollToAnchor;
