import React from 'react';
import { useHistory } from 'react-router-dom';

import './Checking.css';

const Checking = ({ handleClick, isVisible }) => {
  return (
    <div
      id="checking"
      className={isVisible ? 'svg-visible' : 'svg-not-visible'}
    >
      <button onClick={() => handleClick('dirtyRoadmap')}>Go back</button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 360 800"
        version="1.1"
        viewBox="0 0 360 800"
        xmlSpace="preserve"
      >
        <path
          d="M66.4 56.8c3-8.6 9.1-14.2 17.9-16.2 3.8-.8 8-1 12-1 6.7.2 13.6.8 20.3 1 8.6.3 17.3.6 25.9.6 2.6 0 5.1-.3 7.7-.6 6.2-.8 12.5-.3 18.7 0 3.5.2 7.2 0 10.7.2 7.8.3 15.8 1 23.7 1.3 2.1.2 4.2-.2 6.2-.3 12.8-1.1 25 9 26.2 21.6 1.3 13.9-8.3 25.9-21.6 27.4-6.7.8-13.3.3-19.8 0-9-.5-18.1-.2-27-1-8.8-.8-17.3 1-26.1.8-8.3-.2-16.8-.3-25.1-.6-6.9-.3-13.8-.6-20.6-1.1-1.4-.2-2.2.3-3 1.6-2.1 4-2.1 8.3-2.7 12.5-.5 4-.6 8.2-.8 12.2-.2 2.1.3 2.7 2.4 2.9 3.2 0 6.2-.2 9.4-.3.5 0 1.1-.8 1.4-1.3 3.2-5.1 8.2-7.8 13.4-6.4 4.3 1.3 8.5 3 9.6 8.3.2.5.8 1 1.3 1 5.1.3 10.1.5 15.2.6.5 0 1.3-.6 1.6-1.3 1.8-4 6.9-8.5 12.8-7.7 4.5.6 7 3.5 8.8 7.2.6 1.3 1.1 1.6 2.4 1.4 2.6-.2 5-.2 7.5-.2 1.3 0 1.9-.3 2.7-1.4 3-5.6 7.7-8.6 14.2-8.5 6.7.3 13 6.6 12.5 12.6-.3 3-4.6 9.6-7.7 10.7-2.9 1.1-5.9 1.9-8.8 2.1-5.6.2-9.8-3.7-11.2-9-.2-.5-.3-1.1-.5-1.8h-9.4c-.5 0-1.1.8-1.3 1.3-2.1 4.2-5 7.2-9.8 8.2-6.1 1.3-11-1.4-12.8-7.4-.2-.6-.5-1.3-.6-1.8-5.8-.3-11.5-.6-17.4-.8-3.4 6.4-8.5 9.6-15.8 8.3-5.3-1-7.2-5-8.3-9.4-2.7 0-5.4.2-8.2 0-6.1-.2-8.3-3-7.7-9 .6-6.2 1.1-12.6 1.8-18.9.2-1.8 1-3.5 1.4-5.4-1.1-.2-2.2-.3-3.4-.6-11.2-2.5-19-11.8-19.4-23.6"
          className="st0"
        ></path>
        <path
          d="M186 67.5c-1 1.1-1.6 2.1-2.4 2.9-.5.5-1.6 1.1-2.1.8-.6-.3-1.3-1.3-1.4-2.1-.2-1.1 0-2.4.2-3.7.6-5.4 2.7-7.2 8.2-6.9.5 0 1.1-.5 1.4-1 .2-.3-.3-1-.6-1.3-.3-.3-1-.3-1.4-.5-5.3-.8-9.1 3-9.9 8.5-.2 1.6-.3 3.4-.2 5 0 2.9 2.2 5 5.1 4.2 1.4-.3 2.7-1.6 4.2-2.4.2 1 .2 2.2.6 3.4.2.6 1 1.3 1.4 1.9.3-.6 1.1-1.4 1.1-2.1-.5-3.2-1.1-6.4-1.9-9.6-.8-2.7-2.7-3.5-5.3-2.4-.5.2-.8 1-1 1.4 0 .3.8 1 1.1 1 2.1-.3 2.7 1.2 2.9 2.9zM146.1 66.4c1.3 1.6 2.6 3.2 4 4.6.5.5 1.4.3 2.1.5 0-.6.2-1.4-.2-1.9-1-1.6-2.2-3-3.5-4.3-1-1.1-1.1-1.9-.3-3.2.3-.5 0-1.4 0-2.2-.6.3-1.6.5-1.9 1-1 1.3-1.8 2.7-2.7 4.3-.3-2.4-.6-4.5-1-6.6-.2-1-.3-2.1-1.6-1.8-.5.2-.8 1.4-.8 2.1-.2.8.2 1.4.3 2.2.5 4 1 8.2 1.6 12.2.2.6 1 1.6 1.6 1.6 1.3 0 1.1-1.1 1-2.1-.3-1.6-.3-3.2-.5-4.3.5-.8 1.1-1.4 1.9-2.1zM107.5 68.3v6.9c0 .5.8 1 1.1 1.4.5-.5 1.1-1 1.1-1.4-.2-5.4-.3-10.7-.6-16.2 0-.6-1-1.1-1.6-1.8-.3.6-1 1.3-.8 2.1 0 2.1.2 4.2.3 6.4-1.3.2-2.2.2-3.5.3 0-1.9.2-3.5 0-5.3 0-.5-.8-.8-1.1-1.3-.5.5-1.1.8-1.1 1.3 0 4 .2 8 .5 12 0 .5.8.8 1.3 1.3.3-.5 1-1.1 1.1-1.8.2-1.1 0-2.4-.2-3.7 1.3.2 2.1 0 3.5-.2zM163.9 65.5c1.6 2.1 2.9 3.8 4.2 5.6 1.4 1.9 2.9 1.8 3.5-.6 1-3.7 1.6-7.5 2.2-11.4.2-1 0-2.1-1.3-1.9-.5 0-1.1 1.1-1.1 1.8-.6 3.2-1.1 6.4-1.8 9.4h-.5c-1-1.3-1.8-2.6-2.7-3.8-.6-.8-1.4-1.6-2.2-1.9-1.8-1-2.9-.2-3 1.8-.2 2.2-.3 4.5-.5 6.7 0 1-.3 2.2 1.1 2.1.5 0 1.3-1.3 1.4-2.1.4-1.7.4-3.5.7-5.7zM115.7 65.3c-.5-4 .6-5.3 4.3-4.6.5 0 1 .3 1.3.3.8-.2 1.6-.5 2.2-.6-.5-.6-1-1.4-1.6-1.8-1-.5-2.1-.5-3.2-.6-3.4-.2-4.8.3-5.3 3.8-.6 3.5-.3 7-.3 10.6 0 .6.8 1.4 1.3 1.8 2.2 1 4.5 2.1 6.9 1.6.5-.2 1-.8 1.4-1.1-.5-.5-.8-1.1-1.4-1.3-1.4-.5-3.2-.6-4.6-1.1-.5-.2-1.3-1-1.3-1.4-.5-2.4-.3-2.6 2.2-3.2.5-.2 1-.8 1.3-1.3-.5-.3-1.1-1-1.6-1.1-.3-.2-1 0-1.6 0zM93.1 58.6c-1 .2-1.4 0-1.9.3-5.1 1.8-6.7 9-2.9 12.8 2.2 2.1 3.7 2.2 6.2.5 1.4-1 2.9-2.1 4-3.2.5-.5.5-1.3.6-2.1-.8 0-1.6-.2-2.2.2-1.4.8-2.6 2.1-4 2.9-.6.3-1.4.6-2.1.5-1.8-.6-2.9-3.4-2.4-5 1.1-3.2 3-4.5 5.6-3.8.5.2 1.4-.2 1.6-.5.2-.3 0-1.3-.5-1.6-.4-.5-1.3-.7-2-1zM127.2 67.4c.5 1.6.8 3.4 1.4 4.8.3.6 1.4 1.4 2.2 1.4 1.8.2 3.4-.2 5.1-.5 1-.2 2.1-.6 1.6-1.8-.2-.5-1.4-.8-2.1-.6-4.8.8-5.9.8-5.1-5 .2-1 .6-2.1 1.1-3 .6-1.3 1.3-1.8 2.6-.6.3.3 1.1 0 1.8-.2 0-.6 0-1.3-.2-1.8-1.4-2.1-4.2-1.9-5.6 0-1.7 2.3-2.5 4.7-2.8 7.3zM155.2 66.1v2.1c0 1 0 2.2 1.3 2.1.5 0 1.1-1.3 1.3-1.9.3-2.4.5-5 .5-7.5 0-.6-.6-1.3-1-1.9-.5.5-1.3 1-1.4 1.6-.3 2-.5 3.9-.7 5.5zM186.9 122.4c0-.6.2-1.4 0-2.1-.2-.5-.8-1-1.1-1.4-.5.5-1.1 1-1.3 1.4-.2 1.4-.2 2.9 0 4.2 0 .5.8 1 1.3 1.3.3-.5 1-1 1.1-1.4.2-.7 0-1.3 0-2zM194.6 122.7c.2.3.6.8 1.1 1.4.5-.5 1.1-1 1.4-1.6.3-.8.5-1.8.3-2.6 0-.6-.6-1.3-.8-1.8-.5.5-1.3 1-1.6 1.4-.2.8-.2 1.8-.4 3.2zM107.9 121.5c.2.3.6.8 1.1 1.3.5-.5 1.1-.8 1.4-1.4.3-.6.5-1.4.3-2.2-.2-.6-.6-1.1-1-1.8-.5.5-1.1.8-1.4 1.4-.3.6-.3 1.4-.4 2.7zM153.6 118.6c.3 1.3.5 2.4.8 3.4.2.3 1 .8 1.4.6.3 0 .8-.8.8-1.3 0-1-.2-1.9-.5-2.7-.2-.5-1-1.1-1.4-1.1-.4 0-.7.8-1.1 1.1zM113.9 120.8c0-.5.2-1 0-1.3-.3-.5-.8-1-1.3-1.4-.3.5-1 1-1.1 1.4-.2.8-.2 1.6 0 2.4.2.5.8 1 1.3 1.4.3-.5.8-1 1.1-1.4v-1.1zM116.7 119.9c.8 1 1.1 1.9 1.6 1.9 1.9 0 1.4-1.6 1.6-2.7 0-.6-.6-1.3-1.1-1.8-.7.8-1.3 1.6-2.1 2.6zM189.6 121c.3 1.6-.2 3.2 1.6 3 1.8-.2 1-1.6 1-2.6v-.2c-.5-.6-.8-1.3-1.3-1.8-.5.8-.9 1.3-1.3 1.6zM160.5 119.7c-.8-1-1.3-2.2-1.8-2.2-1.4-.2-1.3 1.3-1.3 2.2s-.3 2.4 1.3 2.2c.7-.1 1.2-1.2 1.8-2.2zM152.8 120.2c-1-.6-1.4-1.1-1.9-1.4-.5.8-1.1 1.4-1.3 2.2-.2.5.8 1 1.1 1.6.7-.7 1.3-1.3 2.1-2.4zM154.8 53c.8.6 1.3 1.3 1.8 1.1.5 0 .8-.6 1.3-1.1-.3-.5-.8-1.1-1.1-1.1-.8 0-1.2.6-2 1.1z"
          className="st0"
        ></path>
        <path
          d="M186 67.5c-.2-1.8-.6-3.2-3.2-2.6-.3 0-1.1-.6-1.1-1 0-.5.5-1.3 1-1.4 2.6-1.3 4.6-.5 5.3 2.4.8 3.2 1.4 6.4 1.9 9.6.2.6-.6 1.3-1.1 2.1-.5-.6-1.1-1.1-1.4-1.9-.3-1.1-.5-2.4-.6-3.4-1.4.8-2.7 2.1-4.2 2.4-2.9.8-5.1-1.3-5.1-4.2 0-1.6 0-3.4.2-5 .8-5.4 4.6-9.3 9.9-8.5.5 0 1.1.2 1.4.5.3.3.8 1.1.6 1.3-.2.5-1 1-1.4 1-5.4-.3-7.5 1.4-8.2 6.9-.2 1.3-.3 2.4-.2 3.7.2.8.8 1.8 1.4 2.1.5.2 1.6-.3 2.1-.8 1.1-1.1 1.7-2 2.7-3.2zM146.1 66.4c-.8.6-1.4 1.3-2.4 2.1.2 1.3.3 2.9.5 4.3.2 1 .3 2.1-1 2.1-.5 0-1.4-1-1.6-1.6-.6-4-1-8.2-1.6-12.2-.2-.8-.5-1.6-.3-2.2.2-.8.3-2.1.8-2.1 1.3-.3 1.4.8 1.6 1.8.3 2.1.6 4.2 1 6.6 1-1.6 1.8-3 2.7-4.3.5-.5 1.3-.6 1.9-1 0 .8.3 1.8 0 2.2-1 1.3-.6 2.1.3 3.2 1.3 1.4 2.4 2.9 3.5 4.3.3.5.2 1.3.2 1.9-.6-.2-1.6 0-2.1-.5-.9-1.4-2-3-3.5-4.6z"
          className="st1"
        ></path>
        <path
          d="M107.5 68.3c-1.4.2-2.4.3-3.5.5 0 1.3.3 2.4.2 3.7 0 .6-.6 1.1-1.1 1.8-.5-.5-1.3-.8-1.3-1.3-.2-4-.3-8-.5-12 0-.3.8-.8 1.1-1.3.3.5 1.1.8 1.1 1.3.2 1.6 0 3.4 0 5.3 1.3-.2 2.2-.2 3.5-.3-.2-2.2-.3-4.3-.3-6.4 0-.6.6-1.3.8-2.1.5.6 1.6 1.1 1.6 1.8.3 5.3.5 10.7.6 16.2 0 .5-.8 1-1.1 1.4-.5-.5-1.1-1-1.1-1.4v-7.2z"
          className="st2"
        ></path>
        <path
          d="M163.9 65.5c-.2 2.2-.2 4-.5 5.8-.2.8-1 1.9-1.4 2.1-1.3 0-1.1-1.1-1.1-2.1.2-2.2.3-4.5.5-6.7.2-1.9 1.3-2.7 3-1.8.8.5 1.6 1.3 2.2 1.9 1 1.3 1.8 2.6 2.7 3.8h.5c.5-3.2 1.1-6.4 1.8-9.4.2-.6.8-1.6 1.1-1.8 1.3-.2 1.4 1 1.3 1.9-.6 3.8-1.3 7.7-2.2 11.4-.6 2.4-1.9 2.4-3.5.6-1.7-1.9-3-3.5-4.4-5.7z"
          className="st1"
        ></path>
        <path
          d="M115.7 65.3c.6 0 1.3-.3 1.8-.2.6.2 1.1.6 1.6 1.1-.5.5-.8 1.1-1.3 1.3-2.6.6-2.7.8-2.2 3.2.2.6.8 1.3 1.3 1.4 1.4.5 3 .6 4.6 1.1.5.2 1 .8 1.4 1.3-.5.3-1 1.1-1.4 1.1-2.6.5-4.8-.6-6.9-1.6-.6-.3-1.3-1.1-1.3-1.8 0-3.5-.3-7.2.3-10.6.6-3.4 1.9-4 5.3-3.8 1.1 0 2.2.2 3.2.6.6.3 1.1 1.1 1.6 1.8-.8.3-1.4.5-2.2.6-.5 0-.8-.2-1.3-.3-3.7-.3-5 .8-4.5 4.8z"
          className="st2"
        ></path>
        <path
          d="M93.1 58.6c.6.2 1.6.5 2.2 1 .3.3.6 1.3.5 1.6-.2.3-1.1.6-1.6.5-2.6-.6-4.5.6-5.6 3.8-.5 1.6.8 4.3 2.4 5 .6.2 1.4-.2 2.1-.5 1.4-1 2.6-2.1 4-2.9.5-.3 1.4-.2 2.2-.2-.2.6-.2 1.6-.6 2.1-1.3 1.1-2.7 2.2-4 3.2-2.6 1.8-4 1.6-6.2-.5-3.8-3.8-2.2-10.9 2.9-12.8.3-.2.8-.2 1.7-.3zM127.2 67.4c.3-2.7 1.1-5 2.7-7 1.6-1.9 4.2-2.1 5.6 0 .3.5.2 1.1.2 1.8-.6 0-1.4.5-1.8.2-1.3-1.1-2.1-.6-2.6.6-.5 1-1 1.9-1.1 3-.6 5.8.3 5.8 5.1 5 .6-.2 1.9.2 2.1.6.5 1.3-.6 1.6-1.6 1.8-1.8.3-3.4.5-5.1.5-.8 0-1.9-.8-2.2-1.4-.5-1.8-.8-3.4-1.3-5.1z"
          className="st1"
        ></path>
        <path
          d="M155.2 66.1c.2-1.8.2-3.7.6-5.6.2-.6 1-1.1 1.4-1.6.3.6 1 1.3 1 1.9 0 2.6-.2 5-.5 7.5-.2.6-.8 1.9-1.3 1.9-1.3.2-1.3-1.1-1.3-2.1.3-.6.1-1 .1-2z"
          className="st3"
        ></path>
        <path
          d="M186.9 122.4c0 .6.2 1.3 0 1.9-.2.5-.8 1-1.1 1.4-.5-.5-1.1-.8-1.3-1.3-.2-1.4-.2-2.9 0-4.2 0-.5.8-1 1.3-1.4.3.5 1 1 1.1 1.4.2.8 0 1.4 0 2.2z"
          className="st2"
        ></path>
        <path
          d="M194.6 122.7c.2-1.4.2-2.4.5-3.2.3-.6 1-1 1.6-1.4.3.6.8 1.3.8 1.8 0 .8 0 1.8-.3 2.6-.3.6-1 1.1-1.4 1.6-.6-.6-1-1-1.2-1.4zM107.9 121.5c.2-1.3.2-2.1.5-2.7.3-.6 1-1 1.4-1.4.3.6.8 1.1 1 1.8.2.8 0 1.6-.3 2.2-.3.6-1 1-1.4 1.4-.6-.5-1.1-1-1.2-1.3zM153.6 118.6c.3-.3.8-1.1 1.1-1.1.5 0 1.3.6 1.4 1.1.3.8.5 1.9.5 2.7 0 .5-.5 1.3-.8 1.3-.5 0-1.3-.3-1.4-.6-.4-1-.4-2.1-.8-3.4z"
          className="st3"
        ></path>
        <path
          d="M113.9 120.8c0 .3.2.8 0 1.1-.3.5-.8 1-1.1 1.4-.5-.5-1.1-.8-1.3-1.4-.2-.8-.2-1.6 0-2.4.2-.5.8-1 1.1-1.4.5.5 1 .8 1.3 1.4.2.2 0 .8 0 1.3z"
          className="st2"
        ></path>
        <path
          d="M116.7 119.9c.8-1 1.4-1.8 2.1-2.6.3.6 1.1 1.3 1.1 1.8-.2 1.1.3 2.7-1.6 2.7-.5 0-.8-1-1.6-1.9z"
          className="st3"
        ></path>
        <path
          d="M189.6 121c.3-.3.8-1 1.4-1.4.5.6.8 1.3 1.3 1.8v.2c0 1 .6 2.4-1 2.6-1.8 0-1.3-1.6-1.7-3.2z"
          className="st1"
        ></path>
        <path
          d="M160.5 119.7c-.8 1-1.3 2.1-1.8 2.1-1.6.2-1.3-1.3-1.3-2.2s-.2-2.4 1.3-2.2c.7.1 1.2 1.3 1.8 2.3z"
          className="st2"
        ></path>
        <path
          d="M152.8 120.2c-1 1-1.4 1.6-2.1 2.2-.5-.5-1.3-1.1-1.1-1.6.2-.8.8-1.4 1.3-2.2.5.6 1.1.9 1.9 1.6z"
          className="st3"
        ></path>
        <path
          d="M154.8 53c.8-.5 1.3-1.1 1.8-1.1s.8.8 1.1 1.1c-.5.3-.8 1.1-1.3 1.1-.4.2-.8-.5-1.6-1.1z"
          className="st2"
        ></path>
      </svg>
    </div>
  );
};

export default Checking;
