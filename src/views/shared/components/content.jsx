import React, { Component, PropTypes } from 'react'

export default class Content extends Component {

  static propTypes = {
    header: PropTypes.string,
  }

  render() {
    const { children, header } = this.props
    return (
      <div className="container-fluid rubix-grid">
        <div className="row">
          <div className="col-sm-12">
            <div className="rubix-panel-container-with-controls">
              <div className="rubix-panel-container">
                <div className="rubix-panel">

                    <div className="rubix-panel-header bg-green fg-white">
                      <div className="container-fluid rubix-grid">
                        <div className="row">
                          <div className="col-xs-12">
                            <h3> { header } </h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rubix-panel-body">
                      <div className="container-fluid rubix-grid">
                        <div className="row">
                          <div className="col-xs-12">
                            { children }
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
    )
  }

}

