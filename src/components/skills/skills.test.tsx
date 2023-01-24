import {render, screen, logRoles} from '@testing-library/react';
import { Skills } from './skills';

describe('skills', () => {
    const skills = ['NodeJS', 'ReactJS', 'React Native'];

    test('renders correctly', () => {
        render(<Skills skills={skills} />);
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    });

    test('renders list of skills', () => {
        render(<Skills skills={skills} />);
        const listItemElements = screen.getAllByRole('listitem');
        expect(listItemElements).toHaveLength(skills.length);
    });

    test('renders login button', () => {
        render(<Skills skills={skills} />);
        const loginButton = screen.getByRole('button', {name: 'Login'});
        expect(loginButton).toBeInTheDocument();
    });

    test('start learning button not rendered', () => {
        render(<Skills skills={skills} />);
        const startLearningButton = screen.queryByRole('button', {name: 'Start Learning'});
        expect(startLearningButton).not.toBeInTheDocument();
    });

    test('start learning button eventually displayed', async () => {
        const view = render(<Skills skills={skills} />);
        logRoles(view.container);
        // screen.debug();
        const startLearningButton = await screen.findByRole('button', {name: 'Start Learning'}, { timeout: 2000 });
        // screen.debug();
        expect(startLearningButton).toBeInTheDocument();
    });
});