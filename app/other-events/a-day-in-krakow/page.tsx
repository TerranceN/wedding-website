"use client";

import { Box, Stack, Typography, type BoxProps } from "@mui/material";
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
            {t("other-events.a-day-in-krakow.title")}
          </Typography>
          <Stack
            sx={{
              padding: "0 2vw",
            }}
            spacing={2}
          >
            <Typography>
              Krakow is Poland’s cultural capital and the closest major
              city/airport to the wedding venue. We’d love to welcome overseas
              guests with a day in our favorite Polish city! If you are included
              in this event it will be listed in your invitation and RSVP. Final
              schedule will be provided after RSVP.
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
                    name: "Wednesday",
                    date: "Sept 9th, 2026",
                    image: "/Images/KrakowChurch.webp",
                  },
                  events: [
                    {
                      time: "~ Morning",
                      name: "Meet & Greet",
                      location: "Krakow Old Town",
                    },
                    {
                      time: "~ Morning",
                      name: "Walking Tour",
                      location: "Krakow Old Town and Wawel Castle",
                    },
                    {
                      time: "~ Noon",
                      name: "Lunch",
                      location:
                        "Authentic Milkbar in Krakow’s student district ",
                    },
                    {
                      time: "~ Afternoon",
                      name: "Free Time",
                      location: "Explore Krakow on your own or rest",
                    },
                    {
                      time: "~ Evening",
                      name: "Dinner",
                      location: "Group dinner in Krakow’s Jewish district",
                    },
                    {
                      time: "~ Evening",
                      name: "Drinks",
                      location: "Beer garden in Krakow’s Jewish district",
                    },
                  ],
                },
              ]}
            />
            <Box>
              <Typography fontWeight={600}>Estimated Costs:</Typography>
              <Stack spacing={4}>
                <Typography>
                  Walking tour and family-style lunch will be booked together.
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
              <BulletedList
                bullets={[
                  {
                    note: "Accomodations",
                    details:
                      "Please book accomodations individually. We recommend booking for at least two nights from Sept 8th - Sept 10th in or around the Krakow Old Town, Stradom or Kazimierz. Please arrive in Europe at least 24 hours early to avoid jet-lag during events.",
                    extra: (
                      <img
                        src={"/Images/KrakowMap.webp"}
                        style={{
                          objectFit: "contain",
                          padding: "1vw",
                          maxHeight: "500px",
                        }}
                      />
                    ),
                  },
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
            </Box>
            <Box>
              <Typography fontWeight={600}>Recommended Activities:</Typography>
              <Typography>
                During your free time on Sept 9th, we recommend:
              </Typography>
              <BulletedList
                bullets={[
                  {
                    note: "Sukiennice (Cloth Hall)",
                    details:
                      "Historic market in the main square originally built in the 13th century. This is the place to go for polish crafts, souvenirs or rooftop coffee.",
                  },
                  {
                    note: "Barbican & the Planty",
                    details:
                      "Krakow’s old town was once surrounded by a defensive wall built in the 14th century. Visit the Barbican to see one of the wall’s few remaining towers, or walk the Planty - an urban park that has replaced most of the walls length.",
                  },
                  {
                    note: "Schindler’s Factory",
                    details:
                      "Former enamel factory and museum about the Nazi occupation and Oscar Schindler’s efforts to save Jewish workers, as seen on Schindler’s List.",
                  },
                ]}
              />
            </Box>
            <Box>
              <Typography>
                If you will be in Krakow for longer, consider booking a day
                trip:
              </Typography>
              <BulletedList
                bullets={[
                  {
                    note: "Wieliczka Salt Mine",
                    details:
                      "UNESCO World Heritage Site Started in the 13th century. Explore an extpansive network of salt cathedrals and caverns.",
                  },
                  {
                    note: "Auschwitz-Birkenau",
                    details:
                      "A museum at the site of one of Europe’s most notorious concentration camps established by the Nazi’s in World War II. While this can technically be combined with a Wieliczka tour, we recommend choosing one or the other as this is a long day and this activity can be very emotionally draining.",
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
