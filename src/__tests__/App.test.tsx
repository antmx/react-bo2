import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import App from "../App"
import type IScheduleService from '../Services/IScheduleService';
import type Schedule from '../DataTypes/Schedule';

test('demo', () => {
    expect(true).toBe(true)
});

test("Renders the main page", () => {

    // Mocking the IScheduleService
    let scheduleService: IScheduleService = {
        fetchAll: async () => {
            return [
                { scheduleId: 1, cron: "0 0 * * *", lastRunDate: new Date(2025, 6, 24) } as Schedule,
                { scheduleId: 2, cron: "0 0 * * 1-5", lastRunDate: new Date(2025, 6, 23) } as Schedule
            ];
        }
    };

    //let app = render(<App />);
    let app = render(<App {...scheduleService} />);

    // let app = render(<App fetchAll={function (): Promise<Schedule[]> {
    //     //throw new Error('Function not implemented.');
    //     return scheduleService.fetchAll();
    // }} />);

    expect(app.getByText("Vite + React")).toBeInTheDocument();
    expect(app.getByText("Last run:")).toBeInTheDocument();
    
});
