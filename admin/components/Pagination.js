import React, { Component } from 'react';
import { Grid, Form, Pagination, Segment } from 'semantic-ui-react';
import axios from 'axios';
import ShopList from '../pages/shop-list';
export default class PaginationExampleCustomization extends Component {
  constructor(props) {
    super(props);
    let { dataCount } = props;
    this.state = {
      activePage: 1,
      boundaryRange: 1,
      siblingRange: 1,
      showEllipsis: true,
      showFirstAndLastNav: false,
      showPreviousAndNextNav: false,
      totalPages: dataCount
    };
  }

  handleCheckboxChange = (e, { checked, name }) => {
    this.setState({ [name]: checked });
  };

  handleInputChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handlePaginationChange = (e, { activePage }) => {
    this.setState({ activePage });
    this.props.onCreate(activePage);
    setTimeout(this.props.handle, 0);
  };
  render() {
    const {
      activePage,
      boundaryRange,
      siblingRange,
      showEllipsis,
      showFirstAndLastNav,
      showPreviousAndNextNav,
      totalPages
    } = this.state;
    if (totalPages !== this.props.dataCount) {
      this.setState({ totalPages: this.props.dataCount });
    }

    return (
      <Pagination
        activePage={activePage}
        boundaryRange={boundaryRange}
        onPageChange={this.handlePaginationChange}
        size="mini"
        siblingRange={siblingRange}
        totalPages={totalPages}
        // Heads up! All items are powered by shorthands, if you want to hide one of them, just pass `null` as value
        ellipsisItem={showEllipsis ? undefined : null}
        firstItem={showFirstAndLastNav ? undefined : null}
        lastItem={showFirstAndLastNav ? undefined : null}
        prevItem={showPreviousAndNextNav ? undefined : null}
        nextItem={showPreviousAndNextNav ? undefined : null}
      />
    );
  }
}
