"use client";

import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  type BoxProps,
} from "@mui/material";
import { type ReactElement } from "react";
import { useTranslation } from "next-export-i18n";
import ResponsiveSchedule from "@/app/components/ResponsiveSchedule";
import BulletedList from "@/app/components/BulletedList";

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
          {t("schedule.title-section.wedding-details")}
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

function ScheduleSection({ id }: { id?: string }) {
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
          {t("schedule.schedule-section.title")}
        </Typography>
        <Stack
          sx={{
            background: "white",
            padding: "4vw",
            borderRadius: "2px",
          }}
        >
          <ResponsiveSchedule
            spacing="30px"
            dayPadding={{
              sm: "10px 0",
              xs: 0,
            }}
            events={[
              {
                day: {
                  name: "Saturday",
                  date: "Sept 12th, 2026",
                },
                events: [
                  {
                    name: "Ceremony",
                    location: "Zywiec Stary Zamek",
                    time: "16:45",
                    notes: "Please arrive early for the ceremony at 17:00",
                  },
                  {
                    name: "Reception Cocktail Hour",
                    location: "Beskidian Outdoor Gazebo",
                    time: "18:00",
                    notes: "Drinks and appetizers",
                  },
                  {
                    name: "Reception",
                    location: "Beskidian Main Hall",
                    time: "19:00",
                    notes: "Food, dancing, and celebration!",
                  },
                  {
                    name: "Night End",
                    location: "Zywiec Stary Zamek",
                    time: "05:00",
                    notes: "Feel free to retire earlier",
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
                    location: "Beskidian Outdoor Gazebo",
                    time: "12:00",
                    notes: "Food, drinks, and goodbyes",
                  },
                  {
                    name: "Night End",
                    location: undefined,
                    time: "16:30",
                    notes: "Feel free to retire earlier",
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

function CeremonySection({ id }: { id?: string }) {
  const { t } = useTranslation();

  const information = [
    {
      header: "Address",
      info: "Zamkowa 2, 34-300 Żywiec, Poland",
    },
    {
      header: "Time",
      info: "17:00 - 17:45",
    },
    {
      header: "Getting there",
      info: "Shuttles will be available from Beskidian and parking is also available on-site. Details to come.",
    },
    {
      header: "Notes",
      info: "We will be having a symbolic wedding ceremony in the castle courtyard. Please dress to be outdoors.",
    },
  ];

  return (
    <Section
      id={id}
      sx={{
        background: "white",
        color: "#2D2B25",
      }}
    >
      <Stack sx={{ margin: "2vh 10vw", marginBottom: "40px" }}>
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
          {t("schedule.ceremony-section.title")}
        </Typography>
        <Typography
          fontSize={{
            md: 24,
            sm: 21,
            xs: 18,
          }}
          whiteSpace="pre-line"
          color="#2D2B25"
          sx={{
            marginTop: {
              md: "-25px",
              sm: "-20px",
              xs: "-15px",
            },
            marginBottom: "20px",
          }}
        >
          {t("schedule.ceremony-section.location")}
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            "& p": {
              fontSize: {
                md: 18,
                sm: 16,
                xs: 16,
              },
            },
          }}
        >
          <Grid size={{ md: 6, xs: 12 }}>
            <img
              src="/Images/StaryZamek.webp"
              style={{ objectFit: "contain" }}
            />
          </Grid>
          <Grid size={{ md: 6, xs: 12 }}>
            <Stack spacing={2}>
              {information.map(({ header, info }, idx) => (
                <Stack key={idx}>
                  <Typography fontWeight={600} textTransform="uppercase">
                    {header}
                  </Typography>
                  <Typography>{info}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Section>
  );
}

function ReceptionSection({ id }: { id?: string }) {
  const { t } = useTranslation();

  const information = [
    {
      header: "Address",
      info: "Zamkowa 2, 34-300 Żywiec, Poland",
    },
    {
      header: "Time",
      bullets: [
        {
          note: "Reception",
          details: "Saturday Sept. 12th 18:00 ~ 05:00",
          bullets: [
            {
              note: "Cocktail hour",
              details: "18:00",
            },
            {
              note: "Entrance",
              details: "19:00",
            },
            {
              note: "Main Dinner",
              details: "19:30",
            },
            {
              note: "Second Dinner",
              details: "~22:00",
            },
            {
              note: "Late-Night Snack",
              details: "~02:00",
            },
          ],
        },
        {
          note: "Brunch",
          details: "Sunday Sept. 13th 12:00 - 16:00",
        },
      ],
    },
    {
      header: "Getting there",
      info: "Shuttles will be available from the ceremony. More info to come.",
    },
    {
      header: "Notes",
      info: "Cocktail hour and brunch will take place in the outdoor gazebo.",
    },
  ];

  return (
    <Section
      id={id}
      sx={{
        background: "#eeebe7",
        color: "#2D2B25",
      }}
    >
      <Stack sx={{ margin: "2vh 10vw", marginBottom: "40px" }}>
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
          {t("schedule.reception-section.title")}
        </Typography>
        <Typography
          fontSize={{
            md: 24,
            sm: 21,
            xs: 18,
          }}
          whiteSpace="pre-line"
          color="#2D2B25"
          sx={{
            marginTop: {
              md: "-25px",
              sm: "-20px",
              xs: "-15px",
            },
            marginBottom: "20px",
          }}
        >
          {t("schedule.reception-section.location")}
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            "& *": {
              fontSize: {
                md: 18,
                sm: 16,
                xs: 16,
              },
            },
          }}
        >
          <Grid size={{ md: 6, xs: 12 }}>
            <Stack spacing={2}>
              {information.map(({ header, info, bullets }, idx) => (
                <Stack key={idx}>
                  <Typography fontWeight={600} textTransform="uppercase">
                    {header}
                  </Typography>
                  {info && <Typography>{info}</Typography>}
                  {bullets && <BulletedList bullets={bullets} />}
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid size={{ md: 6, xs: 12 }}>
            <img
              src="/Images/Beskidian.webp"
              style={{ objectFit: "contain" }}
            />
          </Grid>
        </Grid>
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
    schedule: {
      component: ScheduleSection,
      label: "Schedule",
    },
    ceremony: {
      component: CeremonySection,
      label: "Ceremony",
    },
    reception: {
      component: ReceptionSection,
      label: "Reception",
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
