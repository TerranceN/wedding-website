import {
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { type ResponsiveStyleValue } from "@mui/system";
import ListWithSeparators from "./ListWithSeparators";

function ResponsiveSchedule({
  events,
  spacing,
  dayPadding,
}: {
  events: {
    day: {
      name?: string;
      date: string;
    };
    events: {
      name: string;
      location?: string;
      time?: string;
      notes?: string;
    }[];
  }[];
  spacing?: ResponsiveStyleValue<string | number>;
  dayPadding?: ResponsiveStyleValue<string | number>;
}) {
  const theme = useTheme();
  const isLargeOrSmaller = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Stack
      spacing={spacing}
      sx={{
        "*": {
          color: "#2D2B25",
          fontSize: {
            xl: "18px",
            lg: "16px",
            md: "18px",
            sm: "16px",
            xs: "16px",
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
            <Stack
              direction={{ sm: "column", xs: "row" }}
              spacing={{ sm: 0, xs: "6px" }}
              sx={{
                width: "fit-content",
                textAlign: "right",
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
                      <Grid key={`${event.name}-time`} size={{ md: 2, xs: 3 }}>
                        <Typography sx={{ textAlign: "center" }}>
                          {event.time}
                        </Typography>
                      </Grid>,
                    ]
                  : [<Grid key={`${event.name}-time`} size={1} />]),
                <Grid key={`${event.name}-rest`} size={{ md: 10, xs: 9 }}>
                  {isLargeOrSmaller ? (
                    <Stack spacing="2px">
                      <Typography fontWeight={600} textTransform="uppercase">
                        {event.name}
                      </Typography>
                      {event.location && (
                        <Typography fontStyle="italic">
                          {event.location}
                        </Typography>
                      )}
                      {event.notes && <Typography>{event.notes}</Typography>}
                    </Stack>
                  ) : (
                    <ListWithSeparators>
                      <Typography fontWeight={600} textTransform="uppercase">
                        {event.name}
                      </Typography>
                      {event.location && (
                        <Typography fontStyle="italic">
                          {event.location}
                        </Typography>
                      )}
                      {event.notes && <Typography>{event.notes}</Typography>}
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
