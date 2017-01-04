import React, { PropTypes, Component } from 'react'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import ImageGallery from 'react-image-gallery'

export default class Contacts extends Component {

  render() {
    return renderView()
  }

}

const renderView = () => (
  <Col xs={12} className="center">

    <Col xs={12} className="background-green custom-plus">

      <Col xs={3}>
        <Col xs={6}>
          <img src="images/spa-main-img-4.png" />
        </Col>
        <Col xs={6}>
          <p>
            Вы похудеете
            на 10 и более
            килограмм
          </p>
        </Col>
      </Col>

      <Col xs={3}>
        <Col xs={6}>
          <img src="images/spa-main-img-3.png" />
        </Col>
        <Col xs={6}>
          <p>
          Сможете носить
          облегающую
          одежду
          </p>
        </Col>
      </Col>

      <Col xs={3}>
        <Col xs={6}>
          <img src="images/spa-main-img-2.png" />
        </Col>
        <Col xs={6}>
          <p>
          Избавитесь от
          комплексов,
          связанных с весом
          </p>
        </Col>
      </Col>

      <Col xs={3}>
        <Col xs={6}>
          <img src="images/spa-main-img-1.png" />
        </Col>
        <Col xs={6}>
          <p>
          Будете получать
          заслуженные
          комплименты!
          </p>
        </Col>
      </Col>

    </Col>

    <Col xs={12} className="services text-center">
      <h1 className="text-center"> Услуги </h1>

      <BlockComponent />
    </Col>

  </Col>
)


class BlockComponent extends Component {

  render() {
    let objects = [
      {
        image: "images/services/massaj.jpg",
        title: "массаж (антицеллюлитный, медовый, баночный)",
        body: "Масса́ж (от фр. masser — растирать) — совокупность приёмов механического и рефлекторного воздействия на ткани и органы в виде растирания, давления, вибрации, проводимых непосредственно на поверхности тела человека как руками, так и специальными аппаратами через воздушную, водную или иную среду с целью достижения лечебного или иного эффекта",
      },
      {
        image: "images/services/massaj.jpg",
        title: "Кавитация",
        body: "Кавитация - помогает расщепить жировые ткани,посредством низкочастотных ультразвуковых волн. Эффект от процедуры кавитации заметен сразу же после первого сеанса и усиливается в последующие несколько дней. За один сеанс может быть выведено из организма до 15 см3 жира. Это соответствует потере объема в талии от 3 до 5 см после одного сеанса кавитации.",
      },
      {
        image: "images/services/massaj.jpg",
        title: "Миостимуляция",
        body: "Миостимуляция - это воздействие электрических импульсов на мышцы и ткани тела. Под действием электрических импульсов мышцы активно сокращаются, что вызывает приток кислорода и питательных веществ в ткани. Происходит наращивание мышечной массы, формируется мышечный корсет, как следствие, улучшается осанка, нормализуется работа внутренних органов. Активизируется кровоток и лимфоток.",
      },
      {
        image: "images/services/massaj.jpg",
        title: "Прессотерапия",
        body: "Обертывание и Прессотерапия помогает выводить из организма избыточную жидкость, шлаки, продукты распада и обмена из межклеточного пространства, лифматических узлов и кровеносных сосудов, восстанавливая общий водный баланс, уменьшая проявления целлюлита, избавляя от сосудистых сеточек. Так же прессотерапия помогает при варикозе.",
      },
      {
        image: "images/services/massaj.jpg",
        title: "RF-лифтинг",
        body: "Обертывание и Прессотерапия помогает выводить из организма избыточную жидкость, шлаки, продукты распада и обмена из межклеточного пространства, лифматических узлов и кровеносных сосудов, восстанавливая общий водный баланс, уменьшая проявления целлюлита, избавляя от сосудистых сеточек. Так же прессотерапия помогает при варикозе.",
      },
    ]

    return (
      <div>
        {
          objects.map((object, index) =>
            <RenderBlock object={object} key={index} />
          )
        }
      </div>
    )
  }

}

class RenderBlock extends Component {
  render() {
    const { object } = this.props
    return (
      <Col xs={12} className="services-block">
        <Col xs={6}>
          <img src={object.image} />
        </Col>

        <Col xs={6}>
          <h3>
            { object.title }
          </h3>
          <p>
            { object.body }
          </p>
        </Col>
      </Col>
    )
  }
}

