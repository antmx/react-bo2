import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import type IScheduleService from './Services/IScheduleService'
import type Schedule from './DataTypes/Schedule'

function App(scheduleService: IScheduleService) {

  const [count, setCount] = useState(0)
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  useEffect(() => {
    // This effect runs once when the component mounts

    async function startFetchingSchedules() {
      try {
        setSchedules([]); // Clear previous schedules
        const fetchedSchedules = await scheduleService.fetchAll();
        console.log(fetchedSchedules);

        if (!ignore) {
          setSchedules(fetchedSchedules); // Update state with fetched schedules
        }
      } catch (error) {
        console.error("Error fetching schedules:", error);
      }
    }

    let ignore = false;
    startFetchingSchedules();

    return () => {
      ignore = true;
    }
  }, []);


  return (
    <>
      <ul>
        {schedules.map((schedule) => (
          <li key={schedule.scheduleId}>
            {schedule.cron} - Last run: {schedule.lastRunDate?.toLocaleString()}
          </li>
        ))}
      </ul>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
