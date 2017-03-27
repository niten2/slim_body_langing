export function initWidjet(id) {
  if (!DEV) {
    window.VK.Widgets.Group(id, {mode: 1, no_cover: 1}, 89297583);
  }
}
