// import imageUrl from "lib/image_url"
// <img src={imageUrl('logo.png')} />
// return `${ASSETS_HOST}/static/images/${imageName}`
import setting from "lib/setting"

export default function imageUrl(imageName) {
  if (setting.dev) {
    return `../public/assets/images/${imageName}`
  } else {
    return `/images/${imageName}`
  }
}

