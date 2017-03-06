// import imageUrl from "image_url"
// <img src={imageUrl('logo.png')} />

export default function imageUrl(imageName) {
  if (__DEV__) {
    return `/static/images/${imageName}`
  } else {
    return `/images/${imageName}`
  }
  // return `${ASSETS_HOST}/static/images/${imageName}`
}

