import React, { useCallback } from "react";
import Notifications from "./components/base/notification";
import Button from "./components/base/button";
import Input from "./components/base/input";
import SearchIcon from "./assets/icons/search";
import Switch from "./components/base/switch";
import Checkbox from "./components/base/checkbox";
import RadioGroup from "./components/base/radio";
import Alert from "./components/base/alert";
import Modal from "./components/base/modal";
import Select from "./components/base/select";
import Dropdown from "./components/base/dropdown";

const App = () => {
  const pushNotification = useCallback(() => {
    Notifications.open({
      key: Math.random(),
      title: "Notification title will be here",
      content: `Notification message will be displayed here once the alert is going to be presented whenever it
      needs to.`
    });
  }, []);

  const pushAlertAsync = useCallback(() => {
    Alert.open({
      onConfirm: () =>
        new Promise((resolve) =>
          setTimeout(() => {
            resolve("");
          }, 3000)
        ),
      title: "Alert Aysnc title will be here",
      content: `Alert message will be displayed here once the alert is going to be presented whenever it
      needs to.`
    });
  }, []);

  const pushAlert = useCallback(() => {
    Alert.open({
      title: "Alert title will be here",
      content: `Alert message will be displayed here once the alert is going to be presented whenever it
      needs to.`
    });
  }, []);

  const showModal = useCallback(() => {
    Modal.open({
      title: "Window title",
      children: <span className="text-sm">Content here</span>,
      onClose: () => console.log("close modal")
    });
  }, []);

  return (
    <div className="h-screen mx-auto px-4 bg-system-gray06-light">
      <section>
        <h2>Notification</h2>
        <Button type="primary" onClick={pushNotification}>
          Push Notification
        </Button>
      </section>
      <section>
        <h2>Menu</h2>
        <Dropdown>
          <Dropdown.Trigger>
            <Button>Menu</Button>
          </Dropdown.Trigger>
          <Dropdown.Menu>
            <Dropdown.Group>
              <Dropdown.Item onClick={() => console.log("About this mac")} isStillOpenAfterClick>
                About This Mac
              </Dropdown.Item>
              <Dropdown.Item>System Preferences...</Dropdown.Item>
            </Dropdown.Group>

            <Dropdown.Item>Restart..</Dropdown.Item>
            <Dropdown.Item>ShutDown...</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Trigger>
            <Button type="primary">Menu Two</Button>
          </Dropdown.Trigger>
          <Dropdown.Menu>
            <Dropdown.Group>
              <Dropdown.Item onClick={() => console.log("About this mac")} isStillOpenAfterClick>
                About This Mac
              </Dropdown.Item>
              <Dropdown.Item>System Preferences...</Dropdown.Item>
            </Dropdown.Group>

            <Dropdown.Item>Restart..</Dropdown.Item>
            <Dropdown.Item>ShutDown...</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </section>
      <section>
        <h2>Button</h2>
        <div className="flex gap-1">
          <Button type="primary">Primary</Button>
          <Button type="warning">Warning</Button>
          <Button type="danger">Danger</Button>
          <Button type="cancel">Cancel</Button>
          <Button>Default</Button>
        </div>
      </section>
      <section>
        <h2>Form</h2>
        <Input
          type="text"
          className="w-48"
          placeholder="Placeholder"
          clearable
          icon={<SearchIcon />}
        />
        <Switch />
        <Checkbox />
        <Checkbox label="Lable" />

        <RadioGroup className="flex items-center gap-2">
          <RadioGroup.Radio value={0}>Value 0</RadioGroup.Radio>
          <RadioGroup.Radio value={1}>Value 1</RadioGroup.Radio>
        </RadioGroup>
        <RadioGroup>
          <RadioGroup.Radio value={0}>Vertical Value 0</RadioGroup.Radio>
          <RadioGroup.Radio value={1}>Vertical Value 1</RadioGroup.Radio>
        </RadioGroup>
        <Select onChange={(e) => console.log(e.target.value)}>
          <Select.Option value={1}>Option 1</Select.Option>
          <Select.Option value={2}>Option 2</Select.Option>
          <Select.Option value={3}>Option 3</Select.Option>
        </Select>
      </section>
      <section>
        <h2>Alert</h2>
        <div className="flex gap-2">
          <Button type="primary" onClick={pushAlertAsync}>
            Push Alert Async Confirm
          </Button>
          <Button type="primary" onClick={pushAlert}>
            Push Alert
          </Button>
        </div>
      </section>
      <section>
        <h2>Modal</h2>
        <Button type="primary" onClick={showModal}>
          Show Modal
        </Button>
      </section>
    </div>
  );
};

export default App;
