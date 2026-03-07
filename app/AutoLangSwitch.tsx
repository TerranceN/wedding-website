"use client";

import { useRouter, useSearchParams } from "next/navigation";

const AutoLangSwitch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const lang = searchParams.get("lang");
  if (lang) {
    if (["en", "pl"].includes(lang)) {
      window.localStorage.setItem("next-export-i18n-lang", lang);
      const event = new Event("localStorageLangChange");
      document.dispatchEvent(event);
    }
    router.push(window.location.origin + window.location.pathname);
  }

  return null;
};

export default AutoLangSwitch;
