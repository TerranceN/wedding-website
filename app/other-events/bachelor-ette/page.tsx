"use client";

import { Box, Grid, Stack, Typography, type BoxProps } from "@mui/material";
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
            {t("other-events.bachelor-ette.title")}
          </Typography>
          <Stack
            sx={{
              padding: "0 2vw",
            }}
            spacing={2}
          >
            <Typography whiteSpace="pre-line">
              In honor of Poland’s Mountaineering Culture, we will be holding an
              optional bachelor/ette celebration by hiking to Rysianka Mountain
              Hut in the foothills near the wedding venue. If you are included
              in this event it will be listed in your invitation and RSVP.{" "}
              <u>
                Space is limited and will be first-come-first-serve based on
                RSVP date.
              </u>
              {`\n\n`}
              Final confirmation and schedule will be provided after RSVP.
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
                    name: "Thursday",
                    date: "Sept 10th, 2026",
                    image: "/Images/HikingTicket.webp",
                  },
                  events: [
                    {
                      time: "~ Morning",
                      name: "Meet In Krakow",
                      location: "Likely at Train Station",
                    },
                    {
                      time: "~ Morning",
                      name: "Transit to Beskidian",
                      location: "Train or shuttle to Węgierska Górka",
                    },
                    {
                      time: "~ Noon",
                      name: "Lunch",
                      location: "Lunch at Beskidian Hotel and luggage drop-off",
                    },
                    {
                      time: "~ Afternoon",
                      name: "Hiking",
                      location:
                        "~3 hour intermediate hike to Rysianka mountain hut",
                    },
                    {
                      time: "~ Evening",
                      name: "Dinner & Celebrations",
                      location: "Overnight at Rysianka mountain hut",
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
                      time: "~ Morning",
                      name: "Breakfast",
                      location: "Rysianka Mountain Hut",
                    },
                    {
                      time: "~ Morning",
                      name: "Hiking",
                      location: "Return to Beskidian Hotel",
                    },
                    {
                      time: "~ Noon",
                      name: "Lunch & Check-in",
                      location: "Beskidian Hotel",
                    },
                    {
                      time: "~ Afternoon",
                      name: "Free Time",
                      location:
                        "Enjoy Beskidian Hotel or explore Węgierska Górka",
                    },
                    {
                      time: "~ Night",
                      name: "Night at Beskidian",
                      location:
                        "Additional night at Beskidian hotel included in cost of Bachelor/ette",
                    },
                  ],
                },
              ]}
            />
            <Box>
              <Typography fontWeight={600}>Estimated Costs:</Typography>
              <Stack>
                <Typography>
                  Costs will not exceed $400 CAD. The following items will be
                  organized for the group and are included in the cost of the
                  Bachelor/ette:
                </Typography>
                <BulletedList
                  bullets={[
                    { details: "Transit from Krakow to Beskidian" },
                    { details: "Thursday lunch at Beskidian" },
                    { details: "Transit to and from Rysianka trail head" },
                    { details: "Thursday dinner at Rysianka" },
                    { details: "Thursday night accomodations at Rysianka" },
                    { details: "Friday breakfast at Rysianka" },
                    { details: "Friday lunch at Beskidian" },
                    { details: "Friday night accomodations at Beskidian" },
                    {
                      details:
                        "Saturday brunch at Beskidian (included in accomodations)",
                    },
                  ]}
                />
              </Stack>
            </Box>
            <Box>
              <Typography>
                The following items are not included in the cost and will be
                paid for individually:
              </Typography>
              <BulletedList
                bullets={[
                  { details: "Additional drinks/snacks" },
                  { details: "Friday dinner and free time activities" },
                ]}
              />
            </Box>
            <Box>
              <Typography>
                Details on payment will be provided after RSVP.
              </Typography>
            </Box>
            <Box>
              <Typography fontWeight={600}>Logistics:</Typography>
              <BulletedList
                bullets={[
                  {
                    note: "Transport",
                    details:
                      "Transportation from Krakow to Beskidian and Beskidian to the trailhead will be organized",
                  },
                  {
                    note: "Luggage",
                    details:
                      "Extra luggage can be dropped off for storage at Beskidian prior to the hike.",
                  },
                  {
                    note: "Accommodations",
                    details:
                      "Rysianka is a traditional Polish mountain shelter with rustic, hostel-style accomodations. Sheets and bedding will be provided but towels may not be. Charger plugs are limited and may not be available in all rooms; a portable battery is recommended. Rooms will be assigned after RSVP. ",
                  },
                  {
                    note: "Food",
                    details:
                      "Food will be pre-ordered at Rysianka for the group taking into account dietary restrictions.",
                  },
                  {
                    note: "Hike & Preparation",
                    details:
                      "This is an intermediate hike and is generally 3-4 hours in each direction. While food and accommodations are provided at Rysianka, you will need to carry any clothes or toiletries up with you. In addition to this please bring:",
                    bullets: [
                      {
                        details:
                          "A comfortable backpack that is large enough for an overnight stay (~30 L)",
                      },
                      { details: "Comfortable hiking boots or running shoes" },
                      {
                        details:
                          "Packable “Camp shoes” - aka a pair of comfortable shoes to change into once you arrive. This could be combined with flip-flops for showering.",
                      },
                      { details: "Rain-gear in case of poor weather" },
                    ],
                  },
                ]}
              />
            </Box>
            <Typography>
              This is an optional event. Please be mindful of your comfort and
              skill-level when RSVPing. If you are attending “A Day in Krakow”
              but not this event, we recommend extending your stay in Krakow and
              arriving in Węgierska Górka on Friday or Saturday.
            </Typography>
            <Grid container spacing={2}>
              {[
                "/Images/Hiking1.webp",
                "/Images/Hiking2.webp",
                "/Images/Hiking3.webp",
              ].map((imgSrc) => (
                <Grid
                  key={imgSrc}
                  size={{
                    xs: 12,
                    sm: 4,
                  }}
                >
                  <Stack direction="row" justifyContent="center">
                    <img src={imgSrc} style={{ objectFit: "contain" }} />
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </Section>
    </Stack>
  );
}
