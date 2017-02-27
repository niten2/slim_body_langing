import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'

import { isObject, isInteger, find } from "lodash"

import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
// import { NavLink } from 'nav_link'
import FormOffer from './form_offer'

@observer
export default class Offer extends Component {

  render() {
    let { subscription } = UIStore

    return  (
      <div>
        <div className="offer">

          Спасибо за ваши ответы
          <br />
          Мы скоро с вами свяжемся и предложим вам персональный комплекс процедур
          с скидкой { 444 }

          <Col xsOffset={3} xs={6}>
            <FormOffer />
          </Col>

        </div>

      </div>
    )
  }

}

// @observer
// class Procedures extends Component {

//   render() {
//     let { subscription } = this.props

//     return (
//       <div>
//         { subscription.procedures.map((procedure, index) => (
//               <div key={index}> { procedure } </div>
//             )
//         )}
//       </div>
//     )
//   }
// }

