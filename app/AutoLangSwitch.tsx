"use client";

import { useRouter, useSearchParams } from "next/navigation";
import useSetLang from "./hooks/useSetLang";

const AutoLangSwitch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setLang = useSetLang();

  const lang = searchParams.get("lang");
  if (lang) {
    if (["en", "pl"].includes(lang)) {
      setLang(lang);
    }
    router.push(window.location.origin + window.location.pathname);
  }

  return null;
};

export default AutoLangSwitch;
