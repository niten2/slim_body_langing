import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'

import { Pagination, Row, Col} from 'react-bootstrap'

@observer
export default class PaginationStore extends Component {

  static propTypes = {
    xs: PropTypes.number,
  }

  handlePageChange = (value) => {
    UIStore.search.setPage(value)
  }

  renderPlagination() {
    let { xs } = this.props
    let totalPages = parseInt(UIStore.search.totalPages)
    let activePage = parseInt(UIStore.search.page)

    return (
      <Col className="text-right" xs={xs || 12}>
        <Row>
          <Pagination
            className="pagination-sm"
            disabled
            prev={<i className="pagination-left text-blue" aria-hidden="true"></i>}
            next={<i className="pagination-right text-blue" aria-hidden="true"></i>}
            ellipsis
            boundaryLinks
            maxButtons={5}
            items={ totalPages }
            activePage={ activePage }
            onSelect={ this.handlePageChange }
          />
        </Row>
      </Col>
    )
  }

  render() {
    let searchResults = UIStore.search.getSearchResults()
    if (searchResults) { return this.renderPlagination() } else { return null }
  }

}
