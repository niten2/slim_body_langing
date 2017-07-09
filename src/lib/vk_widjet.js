import scriptjs from "scriptjs"
import setting from "lib/setting"

export function initWidjet(id) {
  if (!setting.dev) {
    scriptjs('//vk.com/js/api/openapi.js?142', () => {
      window.VK.Widgets.Group(id, { mode: 1, no_cover: 1 }, 89297583)
    })
  }
}
