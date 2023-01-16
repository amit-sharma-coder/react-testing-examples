import { render, screen } from '@testing-library/react';
import { Application } from './application';

describe('Application', () => {
    test('renders correctly', () => {
        render(<Application />);
        const nameElement = screen.getByRole('textbox', {
            name: 'Name'
        });
        expect(nameElement).toBeInTheDocument();
    });

    test('getByLabelText', () => {
        render(<Application />);
        const nameElement = screen.getByLabelText('Name');
        expect(nameElement).toBeInTheDocument();
    });

    test('getByLabelText another example', () => {
        render(<Application />);
        const termsElement = screen.getByLabelText('I agree to the terms and conditions');
        expect(termsElement).toBeInTheDocument();
    });

    test('getByLabelText with selector option', () => {
        // This works if there are two elements with the same label.
        // You can specify the html type of the element to select it
        render(<Application />);
        const nameElement = screen.getByLabelText('Name', {
            selector: 'input'
        });
        expect(nameElement).toBeInTheDocument();
    });

    test('getByRole(textbox) with name option', () => {
        render(<Application />);
        const bioElement = screen.getByRole('textbox', {
            name: /bio/i
        });
        expect(bioElement).toBeInTheDocument();
    });

    test('getByRole(heading) with level option', () => {
        render(<Application />);
        const pageHeading = screen.getByRole('heading', {
            level: 1
        });
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole('heading', {
            level: 2
        });
        expect(sectionHeading).toBeInTheDocument();
    });

    test('getByRole(combobox)', () => {
        render(<Application />);
        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();
    });

    test('getByRole(checkbox)', () => {
        render(<Application />);
        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();
    });

    test('getByRole(button)', () => {
        render(<Application />);
        const submitButtonElement = screen.getByRole('button');
        expect(submitButtonElement).toBeInTheDocument();
    });

    test('getByPlaceholderText', () => {
        render(<Application />);
        const nameElement = screen.getByPlaceholderText('Full name');
        expect(nameElement).toBeInTheDocument();
    });

    test('', () => {

    });
});
