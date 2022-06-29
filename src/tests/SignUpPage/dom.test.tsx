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
    expect(
      container.getElementsByClassName('submit-btn')[0],
    ).toBeInTheDocument();
  });
});

describe('SignUpPage shows warning on submit click', () => {
  it('if form values are empty', async () => {
    const { container } = render(<SignUpPage />);

    fireEvent.click(container.getElementsByClassName('submit-btn')[0]);

    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });
  it('if name value is empty', async () => {
    const { container } = render(<SignUpPage />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'olga@mail.ru' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'aaaaaa' },
    });
    fireEvent.click(container.getElementsByClassName('submit-btn')[0]);

    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });
  it('if password value is empty', async () => {
    const { container } = render(<SignUpPage />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'olga@mail.ru' },
    });
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'olga' },
    });
    fireEvent.click(container.getElementsByClassName('submit-btn')[0]);

    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });
  it('if email value is empty', async () => {
    const { container } = render(<SignUpPage />);

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'aaaaaa' },
    });
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'olga' },
    });
    fireEvent.click(container.getElementsByClassName('submit-btn')[0]);

    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });
});

describe('SignUpPage hides warning', () => {
  it('hides warning on form focus', async () => {
    const { container } = render(<SignUpPage />);

    fireEvent.click(container.getElementsByClassName('submit-btn')[0]);
    expect(await screen.findByText(/error/i)).toBeInTheDocument();

    fireEvent.focus(screen.getByLabelText(/email/i));
    expect(screen.queryByText(/error/i)).toBeNull();
  });
});

describe('SignUpPage shows warnings on inputs blur', () => {
  it('if onblur fires at name input', () => {
    render(<SignUpPage />);
    fireEvent.blur(screen.getByLabelText(/name/i));
    expect(screen.getByText(/error:username is invalid/i)).toBeInTheDocument();
  });
  it('if onblur fires at email input', () => {
    render(<SignUpPage />);
    fireEvent.blur(screen.getByLabelText(/email/i));
    expect(screen.getByText(/error:email is invalid/i)).toBeInTheDocument();
  });
  it('if onblur fires at email and name input', () => {
    render(<SignUpPage />);
    fireEvent.blur(screen.getByLabelText(/name/i));
    fireEvent.blur(screen.getByLabelText(/email/i));
    const errors = screen.getAllByText(/error/i);
    expect(errors.length).toBe(2);
    errors.forEach((item) => expect(item).toBeInTheDocument());
  });
});

describe('SignUpPage hides warnings on inputs focus', () => {
  it('hides invalid name warning on name input focus', () => {
    render(<SignUpPage />);
    fireEvent.blur(screen.getByLabelText(/name/i));
    expect(screen.getByText(/error:username/i)).toBeInTheDocument();

    fireEvent.focus(screen.getByLabelText(/name/i));
    expect(screen.queryByText(/error:username/i)).not.toBeInTheDocument();
  });
  it('hides invalid email warning on email input focus', () => {
    render(<SignUpPage />);
    fireEvent.blur(screen.getByLabelText(/email/i));
    expect(screen.getByText(/error:email/i)).toBeInTheDocument();

    fireEvent.focus(screen.getByLabelText(/email/i));
    expect(screen.queryByText(/error:email/i)).not.toBeInTheDocument();
  });
  it('hides invalid email warnings after email input onblur and submit btn click on email input focus', async () => {
    const { container } = render(<SignUpPage />);
    fireEvent.blur(screen.getByLabelText(/email/i));
    expect(screen.getByText(/error:email is invalid/i)).toBeInTheDocument();
    fireEvent.click(container.getElementsByClassName('submit-btn')[0]);
    expect(
      await screen.findByText(/error:email can't be blank/i),
    ).toBeInTheDocument();

    fireEvent.focus(screen.getByLabelText(/email/i));
    expect(screen.queryAllByText(/error:email/i).length).toBe(0);
  });
});
