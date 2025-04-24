// components/CalendlyWidget.tsx
"use client";
import { useEffect } from "react";

export const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/ludentdentalclinic/30min?hide_gdpr_banner=1&primary_color=009a90"
      style={{ minWidth: "320px", height: "700px" }}
    ></div>
  );
};
