/**
 * URLからホスト名を安全に取得する
 * @param url - 対象URL
 * @returns ホスト名、取得に失敗した場合は元のURLを返す
 */
export const getHostname = (url: string): string => {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
};

/**
 * URLが有効かどうかを判定する
 * @param url - 検証するURL
 * @returns 有効なURLの場合true
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * 複数のURLから有効なもののみをフィルタリングする
 * @param urls - URL配列
 * @returns 有効なURL配列
 */
export const filterValidUrls = (urls: string[]): string[] => {
  return urls.filter(isValidUrl);
};