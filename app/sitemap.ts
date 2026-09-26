import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nain-collection.vercel.app";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/Deals`, lastModified: new Date() },
    { url: `${baseUrl}/Jhumka`, lastModified: new Date() },
    { url: `${baseUrl}/combos`, lastModified: new Date() },
    { url: `${baseUrl}/custom-deals`, lastModified: new Date() },
    { url: `${baseUrl}/track-order`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ];
}
