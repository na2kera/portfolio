export interface OgpData {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  siteName?: string;
}

export const useOgp = () => {
  const cache = new Map<string, OgpData>();

  const fetchOgp = async (url: string): Promise<OgpData | null> => {
    if (cache.has(url)) {
      return cache.get(url) || null;
    }

    try {
      const response = await $fetch<string>(`/api/ogp?url=${encodeURIComponent(url)}`);
      const parser = new DOMParser();
      const doc = parser.parseFromString(response, 'text/html');
      
      const getMetaContent = (property: string): string | undefined => {
        const meta = doc.querySelector(`meta[property="${property}"]`) || 
                    doc.querySelector(`meta[name="${property}"]`);
        return meta?.getAttribute('content') || undefined;
      };

      const ogpData: OgpData = {
        title: getMetaContent('og:title') || doc.querySelector('title')?.textContent || undefined,
        description: getMetaContent('og:description') || getMetaContent('description') || undefined,
        image: getMetaContent('og:image') || undefined,
        url: getMetaContent('og:url') || url,
        siteName: getMetaContent('og:site_name') || undefined,
      };

      cache.set(url, ogpData);
      return ogpData;
    } catch (error) {
      console.error('Failed to fetch OGP data:', error);
      return null;
    }
  };

  return {
    fetchOgp,
  };
};