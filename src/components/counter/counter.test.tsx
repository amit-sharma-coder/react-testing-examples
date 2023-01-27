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

    test('renders the count of 10 after clicking the Set button', async () => {
        User.setup();
        render(<Counter />);
        const amountInput = screen.getByRole('spinbutton');
        await User.type(amountInput, '10');
        expect(amountInput).toHaveValue(10);

        const setButton = screen.getByRole('button', {
            name: 'Set'
        });
        await User.click(setButton);

        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('10');
    });

    test('elements are focused in right order', async () => {
        render(<Counter />);
        User.setup();

        const amountInput = screen.getByRole('spinbutton');
        const setButton = screen.getByRole('button', { name: 'Set' });
        const incButton = screen.getByRole('button', { name: 'Increment' });

        await User.tab();
        expect(incButton).toHaveFocus();

        await User.tab();
        expect(amountInput).toHaveFocus();

        await User.tab();
        expect(setButton).toHaveFocus();
    });

    test('clear', async () => {
        User.setup();
        render(<textarea defaultValue='Hello World!' />);
        await User.clear(screen.getByRole('textbox'));
        expect(screen.getByRole('textbox')).toHaveValue('')
    });

    // test('selectOptions', async () => {
    //     render(
    //         <select multiple>
    //             <option value='1'>A</option>
    //             <option value='2'>B</option>
    //             <option value='3'>C</option>
    //         </select>
    //     );
    //     User.setup();
    //     await User.selectOptions(screen.getByRole('listbox'), ['1', '3']);
    //     expect(screen.getByRole('option', {name: 'A'}).selected).toBe(true);
    //     expect(screen.getByRole('option', {name: 'B'}).selected).toBe(false);
    //     expect(screen.getByRole('option', {name: 'C'}).selected).toBe(true);
    // });

    // test('deselectOptions', async () => {
    //     render(
    //         <select multiple>
    //             <option value='1'>A</option>
    //             <option value='2'>B</option>
    //             <option value='3'>C</option>
    //         </select>
    //     );

    //     // User.setup();
    //     await User.deselectOptions(screen.getByRole('listbox'), '2');
    //     expect(screen.getByText('B').selected).toBe(false);
    // });

    // test('upload file', async () => {
    //     render(
    //         <div>
    //             <label htmlFor='file-uploader'>Upload File</label>
    //             <input id='file-uploader' type='file' />
    //         </div>
    //     );

    //     const file = new File(['hello'], 'hello.png', { type: 'image/png'});
    //     const input = screen.getByLabelText(/upload file/i);
    //     await User.upload(input, file);

    //     expect(input.files[0]).toBe(file);
    //     expect(input.files.item(0)).toBe(file);
    //     expect(input.files).toHaveLength(1);
    // });
});