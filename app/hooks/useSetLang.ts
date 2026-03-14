import { useCallback } from "react";

const useSetLang = () => {
  return useCallback((lang: string) => {
    window.localStorage.setItem("next-export-i18n-lang", lang)
    const event = new Event("localStorageLangChange");
    document.dispatchEvent(event);
  }, []);
}

export default useSetLang;
