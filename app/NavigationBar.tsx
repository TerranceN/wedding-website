"use client";

import { AppBar, Box, Button, Drawer, Stack, Toolbar } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import { LanguageSwitcher } from "next-export-i18n";
import Link from "next/link";

function NavigationBar() {
  const [open, toggleDrawer] = useState(false);

  return (
    <AppBar sx={{ left: 0, width: "100vw", background: "none" }} elevation={0}>
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <Button
          color="info"
          variant="contained"
          aria-label="open drawer"
          onClick={() => toggleDrawer(true)}
          sx={{
            minWidth: "unset",
            width: "24px",
            height: "24px",
            padding: "20px",
            borderRadius: "9999px",
          }}
        >
          <Menu />
        </Button>
        <Drawer
          // from which side the drawer slides in
          anchor="right"
          //if and how easily the drawer can be closed
          variant="temporary"
          //if open is true, drawer is shown
          open={open}
          //function that is called when the drawer should close
          onClose={() => toggleDrawer(false)}
        >
          <Box
            sx={{
              width: "300px",
            }}
          >
            <Stack
              spacing={"16px"}
              sx={{
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <Link href="/">Home</Link>
              <Link href="/schedule#schedule">Schedule</Link>
              <Link href="/international">International Guests</Link>
              <LanguageSwitcher lang="pl">PL</LanguageSwitcher>
              <LanguageSwitcher lang="en">EN</LanguageSwitcher>
            </Stack>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
