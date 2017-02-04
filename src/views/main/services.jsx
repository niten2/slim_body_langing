import React, { PropTypes, Component } from 'react'
import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import ImageGallery from 'react-image-gallery'

export default class Contacts extends Component {

  render() {
    return (
      <Col xs={12} className="services">
        <h1> Услуги </h1>
        <BlockComponent />
      </Col>
    )
  }

}

class BlockComponent extends Component {
  state = {
    objects: [
      {
        image: "images/services/massaj.jpg",
        // title: "Массаж",
        body: "Массaж - антицеллюлитный, медовый, баночный, помогает вывести из вашего организма лишний жир, воду, шлаки и токсины, помогает в при целлюлите, после него кожа становится упругой, очищаются поры, улучшается обмен веществ",
      },
      {
        image: "images/services/kavitaciya.jpg",
        // title: "Кавитация",
        body: "Кавитация - помогает расщепить жировые ткани,посредством низкочастотных ультразвуковых волн. Эффект от процедуры кавитации заметен сразу же после первого сеанса и усиливается в последующие несколько дней. За один сеанс может быть выведено из организма до 15 см3 жира. Это соответствует потере объема в талии от 3 до 5 см после одного сеанса кавитации.",
      },
      {
        image: "images/services/mio.jpg",
        // title: "Миостимуляция",
        body: "Миостимуляция - это воздействие электрических импульсов на мышцы и ткани тела. Под действием электрических импульсов мышцы активно сокращаются, что вызывает приток кислорода и питательных веществ в ткани. Происходит наращивание мышечной массы, формируется мышечный корсет, как следствие, улучшается осанка, нормализуется работа внутренних органов. Активизируется кровоток и лимфоток.",
      },
      {
        image: "images/services/press.jpg",
        // title: "Прессотерапия",
        body: "Обертывание и Прессотерапия - помогает выводить из организма избыточную жидкость, шлаки, продукты распада и обмена из межклеточного пространства, лифматических узлов и кровеносных сосудов, восстанавливая общий водный баланс, уменьшая проявления целлюлита, избавляя от сосудистых сеточек. Так же прессотерапия помогает при варикозе.",
      },
      {
        image: "images/services/rf-lifting.jpg",
        // title: "RF-лифтинг",
        body: "RF-лифтинг - электромагнитные импульсы высокой частоты благотворно влияют на процессы, происходящие в коже, и составляют основу радиоволнового (радиочастотного) лифтинга. Высокоэффективная и совершенно безопасная процедура RF-лифтинга получила одобрение косметологов и большую популярность у представительниц прекрасного пола, которым уже посчастливилось испытать на себе чудесное воздействие радиочастотных излучений. ",

      },
    ]
  }

  render() {
    let { objects } = this.state

    return (
      <div>
        { objects.map((object, index) =>
          <RenderBlock
            object={object}
            key={index}
          />
        )}
      </div>
    )
  }

}

class RenderBlock extends Component {
  render() {
    const { object } = this.props
    return (
      <Grid className="block">

        <Col xs={12} md={6} className="">
          <img src={object.image} />
        </Col>

        <Col xs={12} md={6} className="parent">
          <div className="child">
            { object.body }
          </div>
          <div className="helper" />
        </Col>

      </Grid>
    )
  }
}

const PlusComponent = () => (
  <Col>
    <Grid>

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

    </Grid>

  </Col>
)

