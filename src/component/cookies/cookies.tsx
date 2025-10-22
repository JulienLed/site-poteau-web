"use client";

import { useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import GoogleAnalytics from "./googleAnalytics";

export default function Cookies() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookieConsent") === "true") {
      setConsent(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookieConsent", "true");
    setConsent(true);
  };

  return (
    <>
      {consent && <GoogleAnalytics />}
      <CookieConsent
        location="bottom"
        enableDeclineButton
        buttonText="J'accepte"
        declineButtonText="Je refuse"
        onAccept={accept}
        buttonStyle={{ background: "#264864", color: "#edf7f6ff" }}
        declineButtonStyle={{ background: "#264864", color: "#edf7f6ff" }}
      >
        Nous utilisons des cookies pour Google Analytics. <br />
        <span className="text-xs">(scroller ou cliquer pour accepter)</span>
      </CookieConsent>
    </>
  );
}
