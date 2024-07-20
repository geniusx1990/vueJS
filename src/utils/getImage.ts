export function getImgUrl(icon: string | null) {
  return new URL(`/src/assets/${icon}`, import.meta.url).href
}
