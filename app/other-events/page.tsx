"use client";

import {
  Box,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  type BoxProps,
} from "@mui/material";
import { type ReactElement } from "react";
import { useTranslation } from "next-export-i18n";
import ResponsiveSchedule from "../components/ResponsiveSchedule";

function Section(props: BoxProps) {
  return (
    <Box
      {...props}
      sx={{
        minHeight: "100svh",
        ...props.sx,
      }}
    ></Box>
  );
}

function TitleSection({ id }: { id?: string }) {
  const theme = useTheme();
  const isMediumOrSmaller = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallOrSmaller = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  return (
    <Section id={id}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          ...(isSmallOrSmaller
            ? {
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
              }
            : {}),
        }}
      >
        <Typography
          fontFamily="Messaline"
          fontSize={{
            xs: 75,
            sm: 75,
            lg: 90,
          }}
          sx={{
            width: "fit-content",
            textShadow: "2px 2px 16px #000000",
            marginBottom: "-10px",
            ...(isSmallOrSmaller
              ? {
                  marginTop: "18vh",
                  textAlign: "center",
                }
              : {
                  position: "absolute",
                  right: "10vw",
                  top: "80vh",
                }),
          }}
        >
          {t("other-events.title-section.other-events")}
        </Typography>
      </Box>
      <img
        src={"/Images/Tatry.webp"}
        style={{
          maxWidth: "unset",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          objectPosition: "35% 20%",
          objectFit: "cover",
        }}
      />
    </Section>
  );
}

function WeekAtAGlanceSection({ id }: { id?: string }) {
  const { t } = useTranslation();

  return (
    <Section
      id={id}
      sx={{
        background: "#CCC1B7",
      }}
    >
      <Stack sx={{ margin: "2vh 10vw" }}>
        <Typography
          fontFamily="Messaline"
          fontSize={{
            md: 80,
            sm: 70,
            xs: 50,
          }}
          whiteSpace="pre-line"
          color="#2D2B25"
        >
          {t("other-events.schedule-section.title")}
        </Typography>
        <Typography
          fontSize={{
            md: 20,
            sm: 18,
            xs: 16,
          }}
          whiteSpace="pre-line"
          color="#2D2B25"
        >
          {t("other-events.schedule-section.description")}
        </Typography>
        <Stack
          sx={{
            background: "white",
            padding: "4vw",
            borderRadius: "2px",
            marginTop: "20px",
          }}
        >
          <ResponsiveSchedule
            dayPadding={{
              sm: "10px 0",
              xs: 0,
            }}
            events={[
              {
                day: {
                  date: "Tue Sept 8",
                },
                events: [
                  {
                    name: t(
                      "other-events.schedule-section.bridal-party-meetup.title",
                    ),
                    location: "Kraków",
                    notes: t(
                      "other-events.schedule-section.bridal-party-meetup.description",
                    ),
                    link: "/other-events/bridal-party-meetup",
                  },
                ],
              },
              {
                day: {
                  date: "Wed Sept 9",
                },
                events: [
                  {
                    name: t(
                      "other-events.schedule-section.a-day-in-krakow.title",
                    ),
                    location: "Kraków",
                    notes: t(
                      "other-events.schedule-section.a-day-in-krakow.description",
                    ),
                    link: "/other-events/a-day-in-krakow",
                  },
                ],
              },
              {
                day: {
                  date: "Thu Sept 10",
                },
                events: [
                  {
                    name: t(
                      "other-events.schedule-section.bachelor-ette.title",
                    ),
                    location: "Węgierska Górka",
                    notes: t(
                      "other-events.schedule-section.bachelor-ette.description",
                    ),
                    link: "/other-events/bachelor-ette",
                  },
                ],
              },
              {
                day: {
                  date: "Fri Sept 11",
                },
                events: [
                  {
                    name: t(
                      "other-events.schedule-section.welcome-drinks.title",
                    ),
                    location: "Kraków",
                    notes: t(
                      "other-events.schedule-section.welcome-drinks.description",
                    ),
                    link: "/other-events/welcome-drinks",
                  },
                ],
              },
              {
                day: {
                  date: "Sat Sept 12",
                },
                events: [
                  {
                    name: t("other-events.schedule-section.wedding.title"),
                    location: "Węgierska Górka",
                    notes: t(
                      "other-events.schedule-section.wedding.description",
                    ),
                    link: "/schedule#ceremony",
                  },
                ],
              },
              {
                day: {
                  date: "Sun Sept 13",
                },
                events: [
                  {
                    name: t("other-events.schedule-section.after-party.title"),
                    location: "Węgierska Górka",
                    notes: t(
                      "other-events.schedule-section.after-party.description",
                    ),
                    link: "/schedule#reception",
                  },
                ],
              },
            ]}
          />
        </Stack>
      </Stack>
    </Section>
  );
}

export default function Home() {
  const sections: {
    [key: string]: {
      component: (props: { id: string }) => ReactElement;
      label: string;
    };
  } = {
    title: {
      component: TitleSection,
      label: "Title",
    },
    weekAtAGlance: {
      component: WeekAtAGlanceSection,
      label: "Week at a Glance",
    },
  };

  return (
    <Stack>
      {...Object.entries(sections).map(([key, { component: Component }]) => (
        <Component key={key} id={key} />
      ))}
    </Stack>
  );
}
