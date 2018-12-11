import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { stringify, parse } from 'qs';
import { withRouter } from 'react-router';
import { Tabs, Tab } from 'react-md';

import './navbar.scss';

class Navbar extends PureComponent {
    static propTypes = {
      visible: PropTypes.bool,
      location: PropTypes.object.isRequired,
      match: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired,
    };

    handleTabChange = (activeTabIndex) => {
      const {
        history, location: {
          pathname
        }
      } = this.props;
      let search;
      if (activeTabIndex > 0) {
        search = stringify({
          tab: activeTabIndex
        });
      }

      history.replace({
        pathname,
        search
      });
    };

    static getTab(search) {
      let tab = null;
      if (search) {
        tab = parseInt(parse(search.replace('?', '')).tab, 10);
      }

      if (tab < 1 || tab > 2 || Number.isNaN(tab)) {
        tab = null;
      }

      return tab;
    }

    render() {
      const {
        location: {
          pathname, search
        }, visible
      } = this.props;
      // if (!visible) {
      //   return null;
      // }

      const activeTabIndex = Navbar.getTab(search) || 0;
      const customization = pathname.indexOf('customization') !== -1;
      const firstTabLabel = customization && pathname.indexOf('grid') === -1
        ? 'Info' : 'Examples';
      console.log('blahh');
      return (
        <Tabs
          mobile={false}
          tabId="documentation"
          className="documentation-tabs"
          activeTabIndex={activeTabIndex}
          onTabChange={this.handleTabChange}
        >
          <Tab label={firstTabLabel} id={`documentation-${firstTabLabel.toLowerCase()}`} key="first-tab" />
        </Tabs>
      );
    }
}
export default withRouter(Navbar);
