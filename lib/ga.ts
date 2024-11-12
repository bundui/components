"use client";

import ReactGA from "react-ga4";

import { useEffect } from "react";

export default function GoogleAnalyticsInit() {
  useEffect(() => {
    ReactGA.initialize("G-N1RVH2SB3L");
    ReactGA.send("pageview");
  });

  return null;
}
