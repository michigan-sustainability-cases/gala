import React from "react";
import styled from 'styled-components';


export default function GetStarted() {
  return (
    <div id="getting-started">
      <h4>Get Started</h4>
      <div id="getting-started-blocks">
        <Block className="gs-block" theme="red" id="findcase-block">
          <div className="pluginWrapper buttonWrapper">
            <a className="button pt-button pt-intent-primary" id="findcase-btn" href='/catalog/home'>
              Find a Case
            </a>
          </div>
          <p className="btn-descriptor">
              Browse free, engaging modules for classrooms, organizations and public education.
          </p>
        </Block>
        <Block className="gs-block" theme="green" id="makecase-block">
          <div className="pluginWrapper buttonWrapper">
            <a className="button pt-button pt-intent-primary" id="makecase-btn" href='/my_cases'>
              Make a Case
            </a>
          </div>
          <p className="btn-descriptor">
            Author your own modules for educators, professionals, or the public.
          </p>
        </Block>
      </div>
    </div>
  );
}

const Block = styled.div.attrs(({ theme, icon }) => ({
  className: `pt-callout ${intents[theme]}`,
}))`
  padding: 1.25em;
  text-align: center;
  margin: 20px !important;

  &::before {
    top: 17px !important;
  }

  &::before,
  .pt-callout-title {
    color: ${p => contrastColors[p.theme]} !important;
  }
`

const intents = {
  red: 'pt-intent-danger',
  green: 'pt-intent-success',
  blue: 'pt-intent-primary',
}

const contrastColors = {
  red: 'hsl(20, 93%, 78%)',
  green: 'hsl(145, 76%, 73%)',
  blue: 'hsl(275, 100%, 87%)',
}
