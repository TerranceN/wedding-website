"use client";

import {
  AppBar,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  Stack,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import { useSelectedLanguage, useTranslation } from "next-export-i18n";
import Link from "next/link";
import useSetLang from "@/app/hooks/useSetLang";

function NavigationBar() {
  const { t } = useTranslation();
  const [open, toggleDrawer] = useState(false);
  const { lang } = useSelectedLanguage();
  const setLang = useSetLang();

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
              <List>
                <ListItem>
                  <Link href="/">{t("home")}</Link>
                </ListItem>
                <ListItem>
                  <Link href="/schedule">
                    {t("schedule.title-section.wedding-details")}
                  </Link>
                </ListItem>
                <ListItem>
                  <Stack>
                    <Link href="/other-events">
                      {t("other-events.title-section.other-events")}
                    </Link>
                    <List>
                      <ListItem>
                        <Link href="/other-events/bridal-party-meetup">
                          {t("other-events.bridal-party-meetup.title")}
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="/other-events/a-day-in-krakow">
                          {t("other-events.a-day-in-krakow.title")}
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="/other-events/bachelor-ette">
                          {t("other-events.bachelor-ette.title")}
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="/other-events/welcome-drinks">
                          {t("other-events.welcome-drinks.title")}
                        </Link>
                      </ListItem>
                    </List>
                  </Stack>
                </ListItem>
                <ListItem>
                  <Link href="/international">
                    {t("international.title-section.title")}
                  </Link>
                </ListItem>
              </List>
              <Stack
                direction="row"
                alignItems="center"
                sx={{ paddingLeft: "16px" }}
              >
                <Typography>EN</Typography>
                <Switch
                  checked={lang === "pl"}
                  onChange={(_evt, checked) => {
                    if (checked) {
                      setLang("pl");
                    } else {
                      setLang("en");
                    }
                  }}
                  slotProps={{ input: { "aria-label": "controlled" } }}
                />
                <Typography>PL</Typography>
              </Stack>
              <Typography sx={{ padding: "0 16px" }}>
                Polish translations not available on pages for international
                guests
              </Typography>
            </Stack>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
