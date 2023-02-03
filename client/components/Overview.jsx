import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AdCard from './AdCard';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedChars: false,
      ads: [],
      modalState: {
        open: false,
      },
    };
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    fetch('/api/')
      .then((res) => res.json())
      .then((ads) => {
        if (!Array.isArray(ads)) ads = [];
        return this.setState({
          ads,
          fetchedChars: true,
        });
      })
      .catch((err) =>
        console.log('Overview.componentDidMount: get ads: ERROR: ', err)
      );
  }
  refresh() {
    fetch('/api/')
      .then((res) => res.json())
      .then((ads) => {
        if (!Array.isArray(ads)) ads = [];
        return this.setState({
          ads,
          fetchedChars: true,
        });
      })
      .catch((err) =>
        console.log('Overview.componentDidMount: get ads: ERROR: ', err)
      );
  }

  render() {
    if (!this.state.fetchedChars)
      return (
        <div>
          <h1>Loading data, please wait...</h1>
        </div>
      );

    const { ads } = this.state;

    if (!ads) return null;

    if (!ads.length) return <div>Sorry, no characters found</div>;

    const adElems = ads.map((ad, i) => {
      return <AdCard key={i} info={ad} openModal={this.openModal} />;
    });

    return (
      <section className='mainSection'>
        <header className='pageHeader'>
          <h2>Saved ads</h2>
        </header>
        <div className='adContainer'>{adElems}</div>
      </section>
    );
  }
}
export default Overview;
