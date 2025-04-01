import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Alert, AlertTitle, AlertDescription } from "../components/ui/alert"

describe('Alert Component', () => {
    it('renders the Alert component', () => {
        render(<Alert>Test Alert</Alert>);

        const alertElement = screen.getByRole('alert');
        expect(alertElement).toBeInTheDocument();
    });

    it('renders with default variant', () => {
        render(<Alert>Default Alert</Alert>);

        const alertElement = screen.getByRole('alert');
        expect(alertElement).toHaveClass('bg-card text-card-foreground');
    });

    it('renders with destructive variant', () => {
        render(<Alert variant="destructive">Destructive Alert</Alert>);

        const alertElement = screen.getByRole('alert');
        expect(alertElement).toHaveClass('text-destructive bg-card');
    });

    it('renders AlertTitle correctly', () => {
        render(
            <Alert>
                <AlertTitle>Alert Title</AlertTitle>
            </Alert>
        );

        const titleElement = screen.getByText('Alert Title');
        expect(titleElement).toBeInTheDocument();
    });

    it('renders AlertDescription correctly', () => {
        render(
            <Alert>
                <AlertDescription>Alert Description</AlertDescription>
            </Alert>
        );

        const descriptionElement = screen.getByText('Alert Description');
        expect(descriptionElement).toBeInTheDocument();
    });
});
