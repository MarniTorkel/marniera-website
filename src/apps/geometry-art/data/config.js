export const artConfig = { etsyShopUrl: null }
export function validArtUrl(value, service) {
  if (!value) return null
  try {
    const url = new URL(value)
    const host = url.hostname.toLowerCase()
    const allowed = service === 'etsy' ? host === 'etsy.com' || host.endsWith('.etsy.com')
      : service === 'youtube' ? host === 'youtu.be' || host === 'youtube.com' || host.endsWith('.youtube.com') : true
    return url.protocol === 'https:' && !url.username && !url.password && allowed ? url.href : null
  } catch { return null }
}
