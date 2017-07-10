import React, { Component } from 'react'
import setting from "lib/setting"

export default class Contacts extends Component {

  componentDidMount() {
    if (setting.prod) {
      const script = document.createElement("script")
      script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=wG6Fe7o8YH3RQ8vsuFDXimjPPmOgYFYZ&amp;width=100%&amp;height=400&amp;lang=ru_RU&amp;sourceType=constructor&amp;scroll=false"
      script.async = true
      this.refs.script.appendChild(script)
    }
  }

  render() {
    return (
			<section id="three" className="wrapper style2 special">
				<header className="major">
					<h2>Контакты</h2>
          <p>
            Тел. <strong>8-913-830-2357</strong>
            <br />
            г. Красноярск <strong>ул. Краснодарская, 35</strong>
            <br />
            Часы работы: с ПН по СБ
            <br />
            <strong>с 10.00 до 21.00</strong>
          </p>
				</header>
        <div ref="script"/>
			</section>
    )
  }
}
