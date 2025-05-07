"use client";
import * as React from "react";
import Button from "@mui/joy/Button";
import ToggleButtonGroup, {
} from "@mui/joy/ToggleButtonGroup";
import { useTimer } from "react-timer-hook";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import Sheet from "@mui/joy/Sheet";

function MyTimer({ expiryTimestamp }) {
  const {
    totalSeconds,
    milliseconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
    interval: 20,
  });
  const [value, setValue] = React.useState<string | null>("default");
  return (
    <div style={{ textAlign: "center" }}>
      <ToggleButtonGroup
        sx={{
          justifyContent: "center",
          m: 1,
        }}
        size="lg"
        variant="soft"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Button
          value="default"
          onClick={() => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + 1500);
            restart(time);
          }}
        >
          Pomodoro
        </Button>
        <Button
          value="short"
          onClick={() => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + 300);
            restart(time);
          }}
        >
          Short Break
        </Button>
        <Button
          value="long"
          onClick={() => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + 600);
            restart(time);
          }}
        >
          Long Break
        </Button>
      </ToggleButtonGroup>
      <Typography level="h1" sx={{ fontSize: 100 }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </Typography>
      <center>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 2 }}
          sx={{
            justifyContent: "center",
            m: 1,
          }}
        >
          <Button onClick={start} size="lg" color="success">
            Start
          </Button>
          <Button onClick={pause} size="lg" color="danger">
            Pause
          </Button>
          <Button onClick={resume} size="lg" color="warning">
            Resume
          </Button>
          <Button
            onClick={() => {
              const time = new Date();
              time.setSeconds(time.getSeconds() + 1500);
              restart(time);
            }}
            size="lg"
            color="neutral"
          >
            Restart
          </Button>
        </Stack>
      </center>
    </div>
  );
}
export default function Home() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1500); 
  return (
    <>
      <div>
        <MyTimer expiryTimestamp={time} />
      </div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 2 }}
        sx={{
          justifyContent: "center",
          m: 1,
        }}
      >
        <Sheet
          variant="outlined"
          color="neutral"
          sx={{ p: 2, borderRadius: 4 }}
        >
          <div>
            <h3>Keyboard Shortcuts</h3>
            <ul>
              <li>
                <strong>SPACE </strong>&nbsp;&nbsp;Start or Stop the timer
              </li>
              <li>
                <strong>ALT + P</strong>&nbsp;&nbsp;Pomodoro
              </li>
              <li>
                <strong>ALT + S</strong>&nbsp;&nbsp;Short Break
              </li>
              <li>
                <strong>ALT + L</strong>&nbsp;&nbsp;Long Break
              </li>
              <li>
                <strong>ALT + R</strong>&nbsp;&nbsp;Reset Timer
              </li>
            </ul>
          </div>
        </Sheet>
        <Sheet
          variant="outlined"
          color="neutral"
          sx={{ p: 2, borderRadius: 4 }}
        >
          <div>
            <h3>Notifications</h3>
            <p>
              You can change the audio tone
              <br /> and volume via Settings
            </p>
            <p>
              Desktop Notifications are currently
              <br /> supported in Chrome, Firefox and
              <br />
              Safari
            </p>
            <Button variant="solid" size="sm">
              Enable Desktop Alerts
            </Button>
          </div>
        </Sheet>
        <Sheet
          variant="outlined"
          color="neutral"
          sx={{ p: 2, borderRadius: 4 }}
        >
          <div>
            <h3>Settings</h3>
            <p>
              You can set custom times, audio tone
              <br /> and volume via Settings.
            </p>
          </div>
        </Sheet>
      </Stack>
    </>
  );
}
