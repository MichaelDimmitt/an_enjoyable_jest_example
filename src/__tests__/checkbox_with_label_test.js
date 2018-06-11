// Copyright 2004-present Facebook. All Rights Reserved.

/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import * as TestUtils from 'react-dom/test-utils';
import CheckboxWithLabel from '../CheckboxWithLabel';
import context from 'jest-plugin-context';

it('renders correctly', () => {
    const tree = renderer
      .create(<CheckboxWithLabel labelOn="On" labelOff="Off"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});
describe('a sane universe', () => {
  context('planet earth', () => {

    it('CheckboxWithLabel changes the text after click', () => {
      // Render a checkbox with label in the document
      const checkbox = TestUtils.renderIntoDocument(
        <CheckboxWithLabel labelOn="On" labelOff="Off" />
      );

      const checkboxNode = ReactDOM.findDOMNode(checkbox);

      // Verify that it's Off by default
      expect(checkboxNode.textContent).toEqual('Off');

      // Simulate a click and verify that it is now On
      TestUtils.Simulate.change(
        TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
      );
      expect(checkboxNode.textContent).toEqual('On');
    });
  })
})
