import React, { PropTypes, Component } from 'react'

export default class Kavitachia extends Component {

  render() {
    return (
      <div className="texts row align-items-center">

        <div className="flex-1">
          <img src="images/services/mio.jpg" />
        </div>

        <div className="flex-1">

          <h2>
            Миостимуляция
          </h2>

          <div>
            Благодаря воздействию электрических импульсов на мышцы и ткани тела мышцы активно сокращаются, что вызывает приток кислорода и питательных веществ в ткани. Происходит наращивание мышечной массы, формируется мышечный корсет, как следствие, улучшается осанка, нормализуется работа внутренних органов. Активизируется кровоток и лимфоток.
          </div>
        </div>

      </div>
    )
  }
}
