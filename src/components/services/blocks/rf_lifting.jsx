import React, { Component } from 'react'
import imageUrl from "lib/image_url"

export default class Kavitachia extends Component {

  render() {
    return (
      <div className="texts">

        <div className="image">
          <img alt="" src={ imageUrl('services/rf-lifting.jpg') } />
        </div>

        <div className="offer">
          <h2>
            RF-лифтинг
          </h2>

          <div>
            Электромагнитные импульсы высокой частоты благотворно влияют на процессы, происходящие в коже, и составляют основу радиоволнового (радиочастотного) лифтинга. Высокоэффективная и совершенно безопасная процедура RF-лифтинга получила одобрение косметологов и большую популярность у представительниц прекрасного пола, которым уже посчастливилось испытать на себе воздействие радиочастотных излучений.
          </div>
        </div>

      </div>
    )
  }
}

