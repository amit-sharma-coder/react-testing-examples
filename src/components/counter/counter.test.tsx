import {render, screen} from '@testing-library/react';
import User from '@testing-library/user-event';
import {Counter} from './counter';

describe('Counter', () => {
    test('renders correctly', () => {
        render(<Counter />);
        const countElement = screen.getByRole('heading');
        expect(countElement).toBeInTheDocument();

        const incButton = screen.getByRole('button', {
            name: 'Increment'
        });
        expect(incButton).toBeInTheDocument();
    });

    test('renders the count of 0', () => {
        render(<Counter />);
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('0');
    });

    test('renders the count of 1 after clicking the increment button', async () => {
        render(<Counter />);
        const incButton = screen.getByRole('button', {
            name: 'Increment'
        });
        User.setup();
        await User.click(incButton);
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('1');
    });
});