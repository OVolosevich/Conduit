import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import SignUpPage from '../../pages/SignUpPage';

describe('SignUpPage renders form', () => {
  it('renders 3 inputs', () => {
    render(<SignUpPage />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it('renders 1 submit button', () => {
    const { container } = render(<SignUpPage />);

    expect(container.getElementsByClassName('submit-btn').length).toBe(1);
    expect(container.getElementsByClassName('submit-btn')[0]).toBeInTheDocument();
  });
});

describe('SignUpPage shows warning', () => {
  it('if form values are empty', async () => {
    const { container } = render(<SignUpPage />);

    fireEvent.click(container.getElementsByClassName('submit-btn')[0]);

    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });
  it('if name value is empty', async () => {
    const { container } = render(<SignUpPage />);

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'a' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'a' } });
    fireEvent.click(container.getElementsByClassName('submit-btn')[0]);

    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });
  it('if password value is empty', async () => {
    const { container } = render(<SignUpPage />);

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'a' } });
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'a' } });
    fireEvent.click(container.getElementsByClassName('submit-btn')[0]);

    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });
  it('if email value is empty', async () => {
    const { container } = render(<SignUpPage />);

    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'a' } });
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'a' } });
    fireEvent.click(container.getElementsByClassName('submit-btn')[0]);

    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });
});

describe('SignUpPage hides warning', () => {
  it('hides warning on form focus', async () => {
    const { container } = render(<SignUpPage />);

    fireEvent.click(container.getElementsByClassName('submit-btn')[0]);
    expect(await screen.findByText(/error/i)).toBeInTheDocument();

    fireEvent.focus(container.getElementsByClassName('form')[0]);
    expect(screen.queryByText(/error/i)).toBeNull();
  });
});
