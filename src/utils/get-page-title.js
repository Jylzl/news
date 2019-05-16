import defaultSettings from '@/settings'

const title = defaultSettings.title || '孝感要闻'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  } else {
    return `${title}`
  }
}