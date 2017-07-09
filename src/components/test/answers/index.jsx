import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import styled from "styled-components"
import Answer from './answer'

const UlActions = styled.ul`
  float: left;
  clear: both;
  list-style: none;

  @media (min-width: 575px) {
    padding-left: 40%;
  }

  @media only screen and (max-device-width : 1024px) and (orientation : landscape) {
    padding-left: 40%;
  }

  @media (max-width: 576px) {
    padding-left: 20%;
  }
`

const Clear = styled.div`
  clear: both;
}`

export default observer(class Answers extends Component {

  render() {
    let { question } = UIStore

    return  (
      <div>
        <div>
          <UlActions>
            <li>
              { question.answers.map((answer, index) =>
                  <Answer
                    key={index}
                    answerId={answer.id}
                    questionId={question.id}
                  />
                )
              }
            </li>
          </UlActions>
        </div>

        <Clear />

        <ul className="special major actions">
          <li>
            <a
              className="button special icon scrolly"
              onClick={ UIStore.nextQuestion }
            >Ответить</a>
          </li>
        </ul>

      </div>
    )
  }

})
