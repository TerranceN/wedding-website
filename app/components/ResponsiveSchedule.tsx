import {
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { type ResponsiveStyleValue } from "@mui/system";
import ListWithSeparators from "./ListWithSeparators";
import { Launch } from "@mui/icons-material";
import Link from "next/link";

function ResponsiveSchedule({
  events,
  spacing,
  dayPadding,
  wideTime,
}: {
  events: {
    day: {
      name?: string;
      date: string;
      image?: string;
    };
    events: {
      name: string;
      location?: string;
      time?: string;
      notes?: string;
      link?: string;
    }[];
  }[];
  spacing?: ResponsiveStyleValue<string | number>;
  dayPadding?: ResponsiveStyleValue<string | number>;
  wideTime?: boolean;
}) {
  const theme = useTheme();
  const isLargeOrSmaller = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmallOrLarger = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      spacing={spacing}
      sx={{
        "*": {
          color: "#2D2B25",
          fontSize: {
            xl: "18px !important",
            lg: "16px !important",
            md: "18px !important",
            sm: "16px !important",
            xs: "16px !important",
          },

          whiteSpace: {
            md: "nowrap",
            sm: "wrap",
          },
        },
      }}
    >
      {...events.map(({ day, events }) => (
        <Grid key={day.date} container rowSpacing="6px">
          <Grid size={{ lg: 2, md: 3, sm: 4, xs: 12 }}>
            <Stack alignItems={{ sm: "center", xs: "right" }}>
              <Stack
                direction={{ sm: "column", xs: "row" }}
                spacing={{ sm: 0, xs: "6px" }}
                sx={{
                  width: "fit-content",
                  textAlign: day.image ? "center" : "right",
                  ...(dayPadding && {
                    padding: dayPadding,
                  }),
                }}
              >
                {day.name && (
                  <Typography fontWeight={600} textTransform="uppercase">
                    {day.name}
                  </Typography>
                )}
                <Typography fontWeight={600}>{day.date}</Typography>
              </Stack>

              {!isSmallOrLarger && day.image && (
                <img
                  src={day.image}
                  style={{
                    objectFit: "contain",
                    padding: "1vh 2vw",
                  }}
                />
              )}
            </Stack>
          </Grid>
          <Grid
            size={{ lg: 10, md: 9, sm: 8, xs: 12 }}
            sx={{ borderLeft: "3px solid black" }}
          >
            <Grid
              container
              rowSpacing="20px"
              sx={{
                ...(dayPadding && {
                  padding: dayPadding,
                }),
              }}
            >
              {events.flatMap((event) => [
                ...(event.time
                  ? [
                      <Grid
                        key={`${event.name}-time`}
                        size={{ md: wideTime ? 3 : 2, xs: wideTime ? 4 : 3 }}
                      >
                        <Typography sx={{ textAlign: "center" }}>
                          {event.time}
                        </Typography>
                      </Grid>,
                    ]
                  : [<Grid key={`${event.name}-time`} size={1} />]),
                <Grid
                  key={`${event.name}-rest`}
                  size={{ md: wideTime ? 9 : 10, xs: wideTime ? 8 : 9 }}
                >
                  {isLargeOrSmaller ? (
                    <Stack spacing="2px">
                      <Typography fontWeight={600} textTransform="uppercase">
                        {event.name}
                      </Typography>
                      {event.location && (
                        <Typography fontStyle="italic">
                          {event.location}
                          {!event.notes && event.link && (
                            <Link href={event.link}>
                              <Launch
                                stroke="#0000EE"
                                sx={{
                                  marginLeft: "4px",
                                  width: "16px",
                                  height: "16px",
                                }}
                              />
                            </Link>
                          )}
                        </Typography>
                      )}
                      {event.notes && (
                        <Typography>
                          {event.notes}
                          {event.link && (
                            <Link href={event.link}>
                              <Launch
                                stroke="#0000EE"
                                sx={{
                                  marginLeft: "4px",
                                  width: "16px",
                                  height: "16px",
                                }}
                              />
                            </Link>
                          )}
                        </Typography>
                      )}
                    </Stack>
                  ) : (
                    <ListWithSeparators>
                      <Typography fontWeight={600} textTransform="uppercase">
                        {event.name}
                      </Typography>
                      {event.location && (
                        <Typography fontStyle="italic">
                          {event.location}
                          {!event.notes && event.link && (
                            <Link href={event.link}>
                              <Launch
                                stroke="#0000EE"
                                sx={{
                                  marginLeft: "4px",
                                  width: "16px",
                                  height: "16px",
                                }}
                              />
                            </Link>
                          )}
                        </Typography>
                      )}
                      {event.notes && (
                        <Typography>
                          {event.notes}
                          {event.link && (
                            <Link href={event.link}>
                              <Launch
                                stroke="#0000EE"
                                sx={{
                                  marginLeft: "4px",
                                  width: "16px",
                                  height: "16px",
                                }}
                              />
                            </Link>
                          )}
                        </Typography>
                      )}
                    </ListWithSeparators>
                  )}
                </Grid>,
              ])}
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Stack>
  );
}

export default ResponsiveSchedule;
