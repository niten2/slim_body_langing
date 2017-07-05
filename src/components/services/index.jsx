import React, { Component } from 'react'

import kavitaciyaImg from "assets/images/services/kavitaciya.jpg"
import massajImg from "assets/images/services/massaj.jpg"
import mioImg from "assets/images/services/mio.jpg"
import pressImg from "assets/images/services/press.jpg"
import rfLiftingImg from "assets/images/services/rf-lifting.jpg"

const Kavitaciya = () => (
  <section className="spotlight">
    <div className="image">
      <img src={ kavitaciyaImg } alt="" />
    </div>

    <div className="content">
      <h3>Кавитация</h3>
      <p>
        Помогает расщепить жировые ткани, посредством низкочастотных ультразвуковых волн. Эффект от процедуры кавитации заметен сразу же после первого сеанса и усиливается в последующие несколько дней. За один сеанс может быть выведено из организма до 15 см3 жира. Это соответствует потере объема в талии от 3 до 5 см после одного сеанса кавитации.
      </p>
    </div>
  </section>
)

const Massaj = () => (
  <section className="spotlight">
    <div className="image">
      <img src={ massajImg } alt="" />
    </div>

    <div className="content">
      <h3>Массаж</h3>
      <p>
        - Баночный
        <br />
        - Медовый
        <br />
        - Антицеллюлитный
        <br />
        - Бразильская попка
        <br />
        - Массаж спины
        <br />
        - Массаж шейно-воротниковой зоны
        <br />
        - Массаж всего тела
      </p>
    </div>
  </section>
)

const Mio = () => (
  <section className="spotlight">
    <div className="image">
      <img src={ mioImg } alt="" />
    </div>

    <div className="content">
      <h3>Миостимуляция</h3>
      <p>
        Благодаря воздействию электрических импульсов на мышцы и ткани тела мышцы активно сокращаются, что вызывает приток кислорода и питательных веществ в ткани. Происходит наращивание мышечной массы, формируется мышечный корсет, как следствие, улучшается осанка, нормализуется работа внутренних органов. Активизируется кровоток и лимфоток.
      </p>
    </div>
  </section>
)

const Press = () => (
  <section className="spotlight">
    <div className="image">
      <img src={ pressImg } alt="" />
    </div>

    <div className="content">
      <h3>Обертывание и Прессотерапия</h3>
      <p>
        Помогает выводить из организма избыточную жидкость, шлаки, продукты распада и обмена из межклеточного пространства, лифматических узлов и кровеносных сосудов, восстанавливая общий водный баланс, уменьшая проявления целлюлита, избавляя от сосудистых сеточек. Так же прессотерапия помогает при варикозе.
      </p>
    </div>
  </section>
)

const Lifting = () => (
  <section className="spotlight">
    <div className="image">
      <img src={ rfLiftingImg } alt="" />
    </div>

    <div className="content">
      <h3>RF-лифтинг</h3>
      <p>
        Электромагнитные импульсы высокой частоты благотворно влияют на процессы, происходящие в коже, и составляют основу радиоволнового (радиочастотного) лифтинга. Высокоэффективная и совершенно безопасная процедура RF-лифтинга получила одобрение косметологов и большую популярность у представительниц прекрасного пола, которым уже посчастливилось испытать на себе воздействие радиочастотных излучений.
      </p>
    </div>
  </section>
)

export default class Contacts extends Component {

  render() {
    return (
			<section id="two" className="wrapper">
				<div className="inner alt">
          <Kavitaciya />
          <Massaj />
          <Mio />
          <Press />
          <Lifting />
				</div>
			</section>
    )
  }

}
