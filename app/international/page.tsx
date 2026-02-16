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
          ...(isMediumOrSmaller
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
            xs: 60,
            sm: 75,
            lg: 90,
          }}
          sx={{
            width: "fit-content",
            textShadow: "1px 1px 8px #000000",
            marginBottom: "-10px",
            ...(isMediumOrSmaller
              ? {
                  marginTop: "2vh",
                  textAlign: "center",
                }
              : {
                  position: "relative",
                  left: "7vw",
                  top: "30vh",
                }),
          }}
        >
          {t("international.title-section.title")}
        </Typography>
      </Box>
      <img
        src={"/Images/ScheduleTitle.webp"}
        style={{
          maxWidth: "unset",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          objectPosition: "70% 20%",
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
          {t("international.week-at-a-glance-section.title")}
        </Typography>
        <Stack
          sx={{
            background: "white",
            padding: "4vw",
            borderRadius: "2px",
          }}
        >
          <ResponsiveSchedule
            spacing={{
              sm: 0,
              xs: "10px",
            }}
            dayPadding={{
              lg: "10px 0",
              sm: "15px 0",
              xs: 0,
            }}
            events={[
              {
                day: {
                  name: "Wednesday",
                  date: "Sept 9th, 2026",
                },
                events: [
                  {
                    name: "A day in Krakow",
                    location: "Krakow",
                    notes: "Activities for overseas guests",
                  },
                ],
              },
              {
                day: {
                  name: "Thursday",
                  date: "Sept 10th, 2026",
                },
                events: [
                  {
                    name: "Bachelor/ette",
                    location: "Wegierska Gorka",
                    notes: "Celebration in the mountains with close friends",
                  },
                ],
              },
              {
                day: {
                  name: "Friday",
                  date: "Sept 11th, 2026",
                },
                events: [
                  {
                    name: "Welcome Drinks",
                    location: "Zywiec",
                    notes:
                      "Informal meet-up ahead of wedding for those arriving early",
                  },
                ],
              },
              {
                day: {
                  name: "Saturday",
                  date: "Sept 12th, 2026",
                },
                events: [
                  {
                    name: "Wedding",
                    location: "Wegierska Gorka",
                    notes: "Ceremony and reception for all guests",
                  },
                ],
              },
              {
                day: {
                  name: "Sunday",
                  date: "Sept 13th, 2026",
                },
                events: [
                  {
                    name: "Brunch",
                    location: "Wegierska Gorka",
                    notes: "Final celebration and goodbyes for all guests",
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

function ADayInKrakowSection({ id }: { id?: string }) {
  const { t } = useTranslation();

  return (
    <Section
      id={id}
      sx={{
        background: "white",
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
          {t("international.a-day-in-krakow-section.title")}
        </Typography>
        <Stack
          sx={{
            background: "white",
            padding: "4vw",
          }}
        >
          <ResponsiveSchedule
            spacing={{
              sm: 0,
              xs: "10px",
            }}
            dayPadding={{
              sm: "15px 0",
              xs: 0,
            }}
            events={[
              {
                day: {
                  name: "Wednesday",
                  date: "Sept 9th, 2026",
                },
                events: [
                  {
                    name: "Walking tour",
                    time: "~10:00",
                    location: "Krakow Old Town and Wawel Castle",
                  },
                  {
                    name: "Lunch",
                    time: "~12:30",
                    location: "Authentic Milkbar in Krakow student district",
                  },
                  {
                    name: "Free time",
                    time: "~2:00",
                    location: "Explore Krakow on your own or rest",
                  },
                  {
                    name: "Dinner",
                    time: "~6:00",
                    location: "Group dinner in Krakow's Jewish district",
                  },
                  {
                    name: "Drinks",
                    time: "~10:00",
                    location: "Beer garden in Krakow's Jewish district",
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
    "week-at-a-glance": {
      component: WeekAtAGlanceSection,
      label: "Week at a Glance",
    },
    "a-day-in-krakow": {
      component: ADayInKrakowSection,
      label: "A Day in Krakow",
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
