export const getAssetsUrl = (url) => {
  return new URL(`../assets/img/tabbar/${url}`, import.meta.url).href
}