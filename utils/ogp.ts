import type { OgpData } from "~/composables/useOgp";

export const fetchTimelineOgpData = async (timeline: Array<{ urls?: string[] }>): Promise<Map<string, OgpData>> => {
  const { fetchOgp } = useOgp();
  const ogpDataMap = new Map<string, OgpData>();

  // URLがあるタイムラインエントリのOGPデータを取得
  const timelineWithUrls = timeline.filter(event => event.urls && event.urls.length > 0);
  
  for (const event of timelineWithUrls) {
    if (event.urls) {
      for (const url of event.urls) {
        try {
          const ogpData = await fetchOgp(url);
          if (ogpData) {
            ogpDataMap.set(url, ogpData);
          }
        } catch (error) {
          console.error(`Failed to fetch OGP for ${url}:`, error);
        }
      }
    }
  }

  return ogpDataMap;
};