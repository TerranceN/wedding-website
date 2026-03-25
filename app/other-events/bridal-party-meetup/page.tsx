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
              We’ll spend half the day together in and around Kraków and wrap up
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
                      location: "Kraków",
                    },
                    {
                      time: "~ Afternoon",
                      name: "Miner's Route",
                      location: "Wieliczka Salt Mine",
                    },
                    {
                      time: "~ Evening",
                      name: "Dinner & Drinks",
                      location: "Kraków Old Town",
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
                  Dinner, accommodations, and any other meals will be paid
                  individually.
                </Typography>
              </Stack>
            </Box>
            <Box>
              <Typography fontWeight={600}>Logistics:</Typography>
              <BulletedList
                bullets={[
                  {
                    note: "Accommodations and arrival",
                    details:
                      "If you are traveling from overseas, please plan to arrive on Monday or earlier as you do not want to be jet-lagged in a mining tunnel. If you are arriving from within Europe, please just plan to be checked in to your accommodations and settled before noon on Tuesday. Please book accommodations individually - see “A Day in Kraków” for more information and for other activities.",
                  },
                  {
                    note: "Plus Ones",
                    details:
                      "While we would like to include partners and plus ones in the bridal party activities we may not have capacity for the group size.",
                  },
                ]}
              />
            </Box>
          </Stack>
        </Stack>
      </Section>
    </Stack>
  );
}
