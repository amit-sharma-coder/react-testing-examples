import {render, screen} from '@testing-library/react';
import {rest} from 'msw';
import {server} from '../../mocks/server';
import {Users} from './users';

describe('Users', () => {
    test('renders corectly', () => {
        render(<Users />);
        const textElement = screen.getByText('Users');
        expect(textElement).toBeInTheDocument();
    });

    test('render the list of users', async () => {
        render(<Users />);
        const users = await screen.findAllByRole('listitem');
        expect(users).toHaveLength(3);
    });

    test('renders error', async () => {
        server.use(
            rest.get(
                'https://jsonplaceholder.typicode.com/users',
                (req, res, ctx) => {
                    return res(ctx.status(500));
                }
            )
        );
        render(<Users />);
        const errorElement = await screen.findByText('Error fetching users');
        expect(errorElement).toBeInTheDocument();
    });
});