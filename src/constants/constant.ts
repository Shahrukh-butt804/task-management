"use client";

let URL = "http://localhost:5000"; // Default to local dev

if (typeof window !== "undefined") {
  const { hostname } = window.location;

  if (hostname.includes("domain.com")) {
    URL = "http://live.com";
  } else if (hostname.includes("customDev")) {
    URL = "https://your-custom-dev-url.com";
  }
};

export const BASE_URL = `${URL}/api/v1`;
// export const IMAGE_URL = `${URL}/uploads/`;
export const IMAGE_URL = `${URL}`;
