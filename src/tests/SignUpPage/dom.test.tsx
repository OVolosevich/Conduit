import { render, screen, fireEvent } from '@testing-library/react';
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

describe('SignUpPage shows warning', () => {
  it('shows warning if form values are empty', async () => {
    const { container } = render(<SignUpPage />);
    const submitBtn = container.getElementsByClassName('submit-btn')[0];
    fireEvent.click(submitBtn);
    const warning = await screen.findByText(/Error/i);
    expect(warning).toBeInTheDocument();
  });
});

describe('SignUpPage hides warning', () => {
  it('hides warning on form focus', async () => {
    const { container } = render(<SignUpPage />);

    const submitBtn = container.getElementsByClassName('submit-btn')[0];
    const signUpForm = container.getElementsByClassName('form')[0];

    fireEvent.click(submitBtn);
    const warning = await screen.findByText(/Error/i);
    expect(warning).toBeInTheDocument();

    fireEvent.focus(signUpForm);
    expect(screen.queryByText(/Error/i)).toBeNull();
  });
});
