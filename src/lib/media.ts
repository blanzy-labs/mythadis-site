// The case schema remains the content contract; components also validate their inputs.
export function getCaseMedia(youtubeId?: string, rumbleUrl?: string) {
  const id = youtubeId && /^[A-Za-z0-9_-]{11}$/.test(youtubeId) ? youtubeId : undefined;
  let mirror: string | undefined;
  if (rumbleUrl) {
    try {
      if (new URL(rumbleUrl).protocol === "https:") mirror = rumbleUrl;
    } catch { /* Invalid component inputs never become platform controls. */ }
  }
  return {
    youtubeId: id,
    youtubeUrl: id ? `https://www.youtube.com/watch?v=${id}` : undefined,
    rumbleUrl: mirror,
  };
}
