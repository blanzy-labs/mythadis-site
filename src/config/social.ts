// Founder-approved studio/channel URLs only. Empty entries are intentionally hidden.
export const socialUrls = {
  youtube: "", rumble: "", x: "", threads: "", linkedin: "",
};
const platforms = [
  { key: "youtube", label: "YouTube", icon: "▶" },
  { key: "rumble", label: "Rumble", icon: "R" },
  { key: "x", label: "X", icon: "𝕏" },
  { key: "threads", label: "Threads", icon: "◉" },
  { key: "linkedin", label: "LinkedIn", icon: "in" },
] as const;
export function getSocialLinks(urls: Partial<Record<keyof typeof socialUrls, string>> = socialUrls) {
  return platforms.flatMap(platform => {
    const href = urls[platform.key]?.trim();
    if (!href) return [];
    try {
      const url = new URL(href);
      if (url.protocol !== "https:" || url.username || url.password) return [];
    } catch { return []; }
    return [{ ...platform, href }];
  });
}
