import { allLocales } from '../../locale/ui/all-locales';

export type LanguageTag = string;

function assertLanguageTag(value: string): asserts value is LanguageTag {
  const hasValidFormat = languageTagPattern.test(value);

  if (!hasValidFormat) {
    throw new Error(`Invalid language tag "${value}"`);
  }

  const isAvailable = allLocales.includes(value);

  if (!isAvailable) {
    throw new Error(`Locale not available "${value}"`);
  }
}

export function createLanguageTag(value: string): LanguageTag {
  assertLanguageTag(value);

  return value;
}

/**
 * @see {@link https://www.ietf.org/rfc/bcp/bcp47.txt|Tags for Identifying Languages (BCP47)}.
 */
export const languageTagPattern = /^[a-z]{2,3}(-[A-Z]{1}[a-z]{3})?(-[A-Z]{2}|\d{3})?$/;
