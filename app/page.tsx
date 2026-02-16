"use client";

import {
  Box,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
  type BoxProps,
} from "@mui/material";
import { type ReactElement } from "react";
import { useTranslation } from "next-export-i18n";

function Section(props: BoxProps) {
  return (
    <Box
      {...props}
      sx={{
        minHeight: "100vh",
        ...props.sx,
      }}
    ></Box>
  );
}

function TitleSection({ id }: { id?: string }) {
  const { t } = useTranslation();

  return (
    <Section id={id}>
      <Stack
        direction="column"
        justifyContent="flex-end"
        alignItems="center"
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <Typography
          fontFamily="Messaline"
          fontSize={{
            xs: 70,
            sm: 90,
          }}
          sx={{
            marginBottom: "-10px",
          }}
        >
          {t("title-section.paula-and-terrance")}
        </Typography>
        <Stack direction="row" spacing={4}>
          <Typography
            fontSize={{
              xs: 18,
              sm: 24,
            }}
          >
            {t("title-section.date")}
          </Typography>
          <Typography
            fontSize={{
              xs: 18,
              sm: 24,
            }}
          >
            |
          </Typography>
          <Typography
            fontSize={{
              xs: 18,
              sm: 24,
            }}
          >
            {t("title-section.location")}
          </Typography>
        </Stack>
        <Box sx={{ height: "10%" }} />
      </Stack>
      <img
        src={"/Images/Title Photo - Make Brighter.webp"}
        style={{
          maxWidth: "unset",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          objectPosition: "70% 50%",
          objectFit: "cover",
        }}
      />
    </Section>
  );
}

function IntroSection({ id }: { id?: string }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  return (
    <Section
      id={id}
      sx={{
        background: "#EEEBE7",
      }}
    >
      <Stack
        width="100%"
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{ height: { sm: "10vh", xs: "5vh" } }} />
        <Grid container width="100%">
          {!isMobile && (
            <Grid size={6} display="flex" justifyContent="center">
              <img
                src="/Images/Stamp Asset.webp"
                style={{ objectFit: "contain", padding: "0 20px" }}
              />
            </Grid>
          )}
          <Grid size={{ sm: 6, xs: 12 }}>
            <Stack
              sx={{
                ...(isMobile && {
                  margin: "0 10%",
                }),
              }}
            >
              <Typography
                fontFamily="Messaline"
                fontSize={80}
                whiteSpace="pre-line"
                color="#2D2B25"
                sx={{
                  marginBottom: "-20px",
                }}
              >
                {t("intro-section.title")}
              </Typography>
              <Typography
                fontStyle="italic"
                fontSize={24}
                whiteSpace="pre-line"
                color="#2D2B25"
                sx={{
                  marginBottom: "20px",
                }}
              >
                {t("intro-section.title-translation")}
              </Typography>
              <Typography fontSize={24} whiteSpace="pre-line" color="#2D2B25">
                {t("intro-section.intro")}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        {isMobile && (
          <img
            src="/Images/Stamp Asset.webp"
            width="60%"
            style={{ objectFit: "contain", margin: "5vh" }}
          />
        )}
        <Box sx={{ height: { sm: "10vh", xs: "5vh" } }} />
      </Stack>
    </Section>
  );
}

function TimelineSection({ id }: { id?: string }) {
  const theme = useTheme();
  const isMediumOrSmaller = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallOrSmaller = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  const eventData = ["slub", "wesele", "poprawiny", "what-else"]
    .map((category) => ({
      title: t(`timeline-section.${category}.title`),
      dateAndTime: t(`timeline-section.${category}.date-and-time`),
      location: t(`timeline-section.${category}.location`),
    }))
    .map((item) => ({
      title: (
        <Typography
          fontSize={20}
          fontWeight={600}
          textTransform="uppercase"
          whiteSpace="nowrap"
          color="#2D2B25"
        >
          {item.title}
        </Typography>
      ),
      dateAndTime: (
        <Typography fontSize={20} whiteSpace="nowrap" color="#2D2B25">
          {item.dateAndTime}
        </Typography>
      ),
      location: (
        <Typography fontSize={20} whiteSpace="nowrap" color="#2D2B25">
          {item.location}
        </Typography>
      ),
    }));

  const infoItems = [
    {
      title: "Dress Code",
      additionalInfo: "Romantic cocktail",
    },
    {
      title: "Accomodation",
      additionalInfo: "One night as Beskidian provided (Sept. 12)",
    },
    {
      title: "Transportation",
      additionalInfo: "Shuttles between Zywiec and Beskidian provided",
    },
    {
      title: "Registry",
      additionalInfo: "At your discretion",
    },
    {
      title: "Other FAQ",
    },
  ].map((item) => ({
    title: (
      <Typography
        fontSize={20}
        fontWeight={600}
        textTransform="uppercase"
        whiteSpace="nowrap"
        color="#2D2B25"
      >
        {item.title}
      </Typography>
    ),
    ...(item.additionalInfo && {
      additionalInfo: (
        <Typography fontSize={20} whiteSpace="wrap" color="#2D2B25">
          {item.additionalInfo}
        </Typography>
      ),
    }),
  }));

  return (
    <Section
      id={id}
      sx={{
        background: "#CCC1B7",
      }}
    >
      <Stack sx={{ margin: "10%" }}>
        <Typography
          fontFamily="Messaline"
          fontSize={80}
          whiteSpace="pre-line"
          color="#2D2B25"
          sx={{
            marginBottom: "-20px",
          }}
        >
          {t("timeline-section.title")}
        </Typography>
        <Typography
          fontStyle="italic"
          fontSize={24}
          whiteSpace="pre-line"
          color="#2D2B25"
          sx={{
            marginBottom: "20px",
          }}
        >
          {t("timeline-section.title-translation")}
        </Typography>
        <Grid container>
          <Grid size={{ lg: 7, xs: 12 }}>
            <Table>
              <TableBody>
                {eventData.map((event, index) => (
                  <TableRow
                    key={index}
                    sx={{ ...(!isMediumOrSmaller && { height: "100px" }) }}
                  >
                    {isMediumOrSmaller ? (
                      <TableCell sx={{ borderBottomColor: "#2D2B25" }}>
                        <Stack>
                          {event.title}
                          <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                          >
                            {event.dateAndTime}
                            {!isSmallOrSmaller && event.location}
                          </Stack>
                          {isSmallOrSmaller && event.location}
                        </Stack>
                      </TableCell>
                    ) : (
                      <>
                        <TableCell sx={{ borderBottomColor: "#2D2B25" }}>
                          {event.title}
                        </TableCell>
                        <TableCell sx={{ borderBottomColor: "#2D2B25" }}>
                          {event.dateAndTime}
                        </TableCell>
                        <TableCell sx={{ borderBottomColor: "#2D2B25" }}>
                          {event.location}
                        </TableCell>
                      </>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
          <Grid size={{ lg: 1, xs: 0 }} />
          <Grid size={{ lg: 4, xs: 12 }}>
            <Stack>
              {infoItems.map((item, index) => (
                <Box
                  key={index}
                  sx={{ ...(!isMediumOrSmaller && { height: "100px" }) }}
                >
                  <Stack height="100%" justifyContent="center">
                    {item.title}
                    {item.additionalInfo}
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Section>
  );
}

function RSVPSection({ id }: { id?: string }) {
  return (
    <Section
      id={id}
      sx={{
        background: "#2D2B25",
      }}
    >
      <Typography>Test</Typography>
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
    intro: {
      component: IntroSection,
      label: "Intro",
    },
    timeline: {
      component: TimelineSection,
      label: "Timeline",
    },
    rsvp: {
      component: RSVPSection,
      label: "RSVP",
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
