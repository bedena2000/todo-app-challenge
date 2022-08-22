import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="text-[14px] font-medium text-center text-[#A9A9A9] mt-[30px] mb-[5px]">
        created by{' '}
        <a
          className="font-bold underline"
          alt="author github link"
          href="https://github.com/bedena2000"
          target="_blank"
          rel="noreferrer">
          bedena2000
        </a>{' '}
        - devChallenges.io
      </footer>
    );
  }
}
