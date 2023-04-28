import { useEffect } from "react";

function RedirectToExternalUrl() {
  useEffect(() => {
    window.location.replace("https://standardresume.co/r/aj-villalobos");
  }, []);

  return null;
}

export default RedirectToExternalUrl;
