import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Checkbox from "@mui/joy/Checkbox";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import Stack from "@mui/joy/Stack";

export default function BasicModal() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <IconButton
        size="lg"
        variant="soft"
        color="primary"
        onClick={() => setOpen(true)}
      >
        <SettingsIcon />
      </IconButton>

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="soft"
          sx={{ borderRadius: "md", p: 3, boxShadow: "lg" }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography id="modal-title" level="h2" textColor="inherit">
            Options
          </Typography>
          <Typography id="modal-title" level="title-lg" textColor="inherit">
            User preferences
          </Typography>

          <div role="group" aria-labelledby="sandwich-group">
            <List size="sm">
              <ListItem>
                <Checkbox label="Timer indication in title?" defaultChecked />
              </ListItem>
              <ListItem>
                <Checkbox label="Browser notifications?" defaultChecked />
              </ListItem>
              <ListItem>
                <Checkbox label="Auto start pomodoros and breaks?" />
              </ListItem>
            </List>
          </div>

          <FormControl>
            <FormLabel>Select Sound</FormLabel>
            <Select defaultValue="0">
              <Option value="0">80s Alarm</Option>
              <Option value="1">Alarm Clock</Option>
              <Option value="2">Wristwatch Alarm</Option>
              <Option value="3">Elevator Ding</Option>
              <Option value="4">Door Bell</Option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Select Volume</FormLabel>
            <Select defaultValue="0">
              <Option value="0">Mute</Option>
              <Option value="1">25%</Option>
              <Option value="2">50%</Option>
              <Option value="3">75%</Option>
              <Option value="4">100%</Option>
            </Select>
          </FormControl>
          <Typography>Set Custom Times (in minutes)</Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 2 }}
            sx={{
              justifyContent: "center",
              m: 1,
            }}
          >
            <FormControl>
              <FormLabel>Pomodoro</FormLabel>
              <Input defaultValue="25" />
            </FormControl>
            <FormControl>
              <FormLabel>Short Break</FormLabel>
              <Input defaultValue="5" />
            </FormControl>
            <FormControl>
              <FormLabel>Long Break</FormLabel>
              <Input defaultValue="10" />
            </FormControl>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 2 }}
            sx={{
              justifyContent: "flex-start",
              m: 1,
            }}
          >
            <Button size="sm">Save</Button>
            <Button size="sm">Reset</Button>
            <Button size="sm">Sound Test</Button>
          </Stack>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
