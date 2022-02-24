import {
    useToolbarState,
    Toolbar,
    ToolbarItem,
  } from "reakit/Toolbar";
  import { Button } from "reakit/Button";
  
export default function MenuBar() {
    const toolbar = useToolbarState({ loop: true });
    return (
      <Toolbar {...toolbar} aria-label="My toolbar">
        <ToolbarItem {...toolbar}>
          Dashboard
        </ToolbarItem>
        <ToolbarItem {...toolbar}>
          Departments
        </ToolbarItem>
        <ToolbarItem {...toolbar}>
          Employees
        </ToolbarItem>
        <ToolbarItem {...toolbar}>
          Projects
        </ToolbarItem>
        <ToolbarItem {...toolbar}>
          Performances
        </ToolbarItem>
      </Toolbar>
    );
  }