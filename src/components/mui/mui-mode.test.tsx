// import {render, screen} from '@testing-library/react';
import {render, screen} from '../../test-utils';    // imported for custom render function
import {MuiMode} from './mui-mode';
// import {AppProviders} from '../../providers/app-providers'; // removed as AppProvider is a part of test-utils file

describe('MuiMode', () => {
    test('renders text correctly', () => {
        // render(<MuiMode />, {
        //     wrapper: AppProviders
        // });

        // wrapper option is removed after creating the custom render function
        render(<MuiMode />);

        const headingElement = screen.getByRole('heading');
        expect(headingElement).toHaveTextContent(/dark mode/i);
    });
});

// To achieve single wrapper across all tests is by writing the custom render function