// import imageUrl from "lib/image_url"
// <img src={imageUrl('logo.png')} />
// return `${ASSETS_HOST}/static/images/${imageName}`

export default function imageUrl(imageName) {
  if (DEV) {
    return `/static/images/${imageName}`
  } else {
    return `/images/${imageName}`
  }
}

