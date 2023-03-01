import { Avatar, Button, Dropdown, Link, Navbar, Text } from "@nextui-org/react";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import Earn from "../Earn/Earn.js";
import app from "../Firebase/firebase.config.js";
import { Layout } from "./Layout.js";
import { Logo } from "./Logo.js";

const auth = getAuth(app);

const Nav = () => {   

   const [user] = useAuthState(auth)
    
    const collapseItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
      ];
  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="lg" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Logo />
          {!user?.email?<Text b color="inherit" hideIn="xs">
            ACME
          </Text>:
          <div class="space-x-4 space-y-4 sm:justify-evenly">
      <button><Earn></Earn></button>
      <button><Earn></Earn></button>
      </div>}
        </Navbar.Brand>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            {!user?.email ?
             <NavLink to='/login'><Button color="warning">Log in</Button></NavLink>:
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
            
             <Dropdown.Item key="profile" css={{ height: "$18" }}>
                {user?.email ?<Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>: <NavLink to='/login'><Button color="warning">Log in</Button></NavLink>
              }
                {user?.email &&<Text b color="inherit" css={{ d: "flex" }}>
                   {user.email}
                </Text>}
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              {user?.email &&<Dropdown.Item  key="logout" withDivider>
                <Button color="error" onClick={()=>signOut(auth)}>Log Out</Button>
              </Dropdown.Item>} 
            </Dropdown.Menu>}
          </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>

  );
}
export default Nav;
