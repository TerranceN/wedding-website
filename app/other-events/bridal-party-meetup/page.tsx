"use client";

import BulletedList from "@/app/components/BulletedList";
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
          background: "#eeebe7",
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
            {t("other-events.bridal-party-meetup.title")}
          </Typography>
          <Stack
            sx={{
              padding: "0 2vw",
            }}
            spacing={4}
          >
            <Typography>
              Let’s all get to know each other before the celebrations begin!
              We’ll spend half the day together in and around Krakow and wrap up
              any final plans ahead of the wedding.
            </Typography>
            <ResponsiveSchedule
              wideTime
              dayPadding={{
                sm: "10px 0",
                xs: 0,
              }}
              events={[
                {
                  day: {
                    name: "Tuesday",
                    date: "Sept 8th, 2026",
                    image: "/Images/SaltMine.webp",
                  },
                  events: [
                    {
                      time: "~ Afternoon",
                      name: "Meet & Greet",
                      location: "Krakow",
                    },
                    {
                      time: "~ Afternoon",
                      name: "Miner's Route",
                      location: "Wieliczka Salt Mine",
                    },
                    {
                      time: "~ Evening",
                      name: "Dinner & Drinks",
                      location: "Krakow Old Town",
                    },
                  ],
                },
              ]}
            />
            <Box>
              <Typography fontWeight={600}>Wieliczka Salt Mine:</Typography>
              <Stack spacing={4}>
                <Typography>
                  UNESCO World Heritage Site started in the 13th century with an
                  expansive network of mining tunnels, salt cathedrals and
                  pools. The miner’s route does not pass through the most
                  dramatic salt caverns, but provides a more intimate bonding
                  experience and back-stage view into the experiences of
                  medieval miners.
                </Typography>
              </Stack>
            </Box>
            <Box>
              <Typography fontWeight={600}>Estimated Costs:</Typography>
              <Stack spacing={4}>
                <Typography>
                  Wieliczka tour and transportation will be booked together.
                  Costs will not exceed $100 CAD. Details on payment will be
                  provided after RSVP.
                </Typography>
                <Typography>
                  Dinner, accomodations, and any other meals will be paid
                  individually.
                </Typography>
              </Stack>
            </Box>
            <Box>
              <Typography fontWeight={600}>Logistics:</Typography>
              <Stack spacing={4}>
                <Typography>
                  If you are traveling from abroad, please plan to arrive on
                  Monday or earlier as you do not want to be jet-lagged in a
                  mining tunnel. If you are arrvi Please book accomodations
                  individually - see “A Day in Krakow” for more information and
                  for other activities.
                </Typography>
              </Stack>
            </Box>
            <BulletedList
              bullets={[
                {
                  note: "Transit",
                  details:
                    "Krakow is very walkable and has good public transit. Uber is readily available when needed. A car rental is not required in most cases.",
                  bullets: [
                    {
                      note: "Airport",
                      details:
                        "A train runs between Krakow Airport and Krakow Main Station (Główny) and Krakow Grzegórzki station.",
                    },
                    {
                      note: "Streetcars",
                      details: "TODO Payment process",
                    },
                    {
                      note: "Getting to the wedding venue",
                      details:
                        "You can get from Krakow to Wegierksa Gorka Station by train. The station is a 10 minute walk from Beskidian, the wedding venue. The fastest route is 2.5 hours and transfers through Czechowice-Dziedzice. Book in advance.",
                    },
                  ],
                },
                {
                  note: "See Poland FAQ",
                  details:
                    "for more information and recommendations about traveling in Poland!",
                },
              ]}
            />
          </Stack>
        </Stack>
      </Section>
    </Stack>
  );
}
