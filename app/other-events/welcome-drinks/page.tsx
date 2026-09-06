"use client";

import ResponsiveSchedule from "@/app/components/ResponsiveSchedule";
import { Box, Stack, Typography, type BoxProps } from "@mui/material";
import { useTranslation } from "next-export-i18n";

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

export default function Page() {
  const { t } = useTranslation();

  return (
    <Stack>
      <Section
        sx={{
          background: "white",
          color: "#2D2B25",
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
            {t("other-events.welcome-drinks.title")}
          </Typography>
          <Stack
            sx={{
              padding: "0 2vw",
            }}
            spacing={2}
          >
            <Typography whiteSpace="pre-line">
              {t("other-events.welcome-drinks.details")}
            </Typography>
            <ResponsiveSchedule
              wideTime
              dayPadding={{
                sm: "10px 0",
                xs: 0,
              }}
              spacing="30px"
              events={[
                {
                  day: {
                    name: t("common.dates.friday.name"),
                    date: t("common.dates.friday.date"),
                  },
                  events: [
                    {
                      time: "14:00",
                      name: t(
                        "other-events.welcome-drinks.schedule.events.bp-shuttle.name",
                      ),
                      location: t(
                        "other-events.welcome-drinks.schedule.events.bp-shuttle.location",
                      ),
                    },
                    {
                      time: "18:00",
                      name: t(
                        "other-events.welcome-drinks.schedule.events.family-shuttle.name",
                      ),
                      location: t(
                        "other-events.welcome-drinks.schedule.events.family-shuttle.location",
                      ),
                    },
                    {
                      time: "18:30",
                      name: t(
                        "other-events.welcome-drinks.schedule.events.dinner.name",
                      ),
                      location: t(
                        "other-events.welcome-drinks.schedule.events.dinner.location",
                      ),
                    },
                    {
                      time: "20:00",
                      name: t(
                        "other-events.welcome-drinks.schedule.events.return-shuttle.name",
                      ),
                      location: t(
                        "other-events.welcome-drinks.schedule.events.return-shuttle.location",
                      ),
                    },
                    {
                      time: "20:45",
                      name: t(
                        "other-events.welcome-drinks.schedule.events.last-return-shuttle.name",
                      ),
                      location: t(
                        "other-events.welcome-drinks.schedule.events.last-return-shuttle.location",
                      ),
                    },
                  ],
                },
              ]}
            />
            <img
              src="/Images/Brewery.webp"
              style={{ objectFit: "contain", padding: "20px 0" }}
            />
          </Stack>
        </Stack>
      </Section>
    </Stack>
  );
}
