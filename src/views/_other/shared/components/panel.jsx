import React, { Component, PropTypes } from 'react'
import { Col } from 'react-bootstrap'

export default class Panel extends Component {

  static propTypes = {
    header: PropTypes.string,
    xs: PropTypes.number,
  }

  render() {
    const { xs, header, children } = this.props
    return (
      <Col xs={xs || 12}>
        <div className="row">

          <div className="container-fluid rubix-grid">
            <div className="row">
              <div className="col-sm-12">
                <div className="rubix-panel-container-with-controls">
                  <div className="rubix-panel-container">
                    <div className="rubix-panel">

                        <div className="rubix-panel-header">
                          <div className="container-fluid rubix-grid">
                            <div className="row">
                              <div className="text-center col-xs-12">
                                <h3><strong> { header } </strong></h3>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="rubix-panel-body">
                          <div className="container-fluid rubix-grid">
                            <div className="row">
                              <div className="col-xs-12">
                                {this.props.children}
                              </div>
                            </div>
                          </div>
                        </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>
      </Col>
    )
  }

}

