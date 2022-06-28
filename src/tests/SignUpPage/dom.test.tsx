import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import SignUpPage from '../../pages/SignUpPage';

describe('SignUpPage renders form', () => {
  it('renders 3 inputs', () => {
    render(<SignUpPage />);

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('renders 1 submit button', () => {
    const { container } = render(<SignUpPage />);

    expect(container.getElementsByClassName('submit-btn').length).toBe(1);
    expect(container.getElementsByClassName('submit-btn')[0]).toBeInTheDocument();
  });
});
