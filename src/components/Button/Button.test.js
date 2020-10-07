import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Button } from './Button';

describe('Buttom component Snapshot', () => {
  it('renders a button', () => {
    const tree = renderer
      .create(
        <Router>
          <Button>Click Me</Button>
        </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders a anchor tag', () => {
    const tree = renderer
      .create(
        <Router>
          <Button link="/something">Click Me</Button>
        </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Testing functionality', () => {
  it('should execute onClick function when clicked', () => {
    const handleOnClick = jest.fn();

    render(
      <Router>
        <Button onClick={handleOnClick}>Click me</Button>
      </Router>
    );

    fireEvent.click(screen.getByText('Click me'));
    expect(handleOnClick).toHaveBeenCalledTimes(1);
  });
});
