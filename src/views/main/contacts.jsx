import React, { PropTypes, Component } from 'react'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'

export default class Contacts extends Component {

  // componentDidMount() {
  //   const script = document.createElement("script")
  //   script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=wG6Fe7o8YH3RQ8vsuFDXimjPPmOgYFYZ&amp;width=100%&amp;height=400&amp;lang=ru_RU&amp;sourceType=constructor&amp;scroll=true"
  //   script.async = true
  //   this.refs.script.appendChild(script)
  // }

  render() {
    return (
      <div className="contacts">
        <Grid>
          <h1> Контакты </h1>
          <p>
            Тел. 8-913-830-2357
            <br />
            г. Красноярск ул Краснодарская, 35
            <br />
            Часы работы: с ПН по СБ с 10.00 до 21.00
          </p>
        </Grid>

        <div ref="script"/>

      </div>
    )

  }

}

