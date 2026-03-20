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

function CeremonySection({ id }: { id?: string }) {
  const { t } = useTranslation();

  const information = [
    {
      header: t("schedule.ceremony-section.address.header"),
      info: "Zamkowa 2, 34-300 Żywiec, Poland",
    },
    {
      header: t("schedule.ceremony-section.time.header"),
      info: "17:00 - 17:45",
    },
    {
      header: t("schedule.ceremony-section.getting-there.header"),
      info: t("schedule.ceremony-section.getting-there.info"),
    },
    {
      header: t("schedule.ceremony-section.notes.header"),
      info: t("schedule.ceremony-section.notes.info"),
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
          fontStyle="italic"
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
      header: t("schedule.reception-section.address.header"),
      info: "Zamkowa 2, 34-300 Żywiec, Poland",
    },
    {
      header: t("schedule.reception-section.time.header"),
      bullets: [
        {
          note: t("schedule.reception-section.time.reception.note"),
          details: t("schedule.reception-section.time.reception.details"),
          bullets: [
            {
              note: t(
                "schedule.reception-section.time.reception.cocktail-hour.note",
              ),
              details: "18:00",
            },
            {
              note: t(
                "schedule.reception-section.time.reception.entrance.note",
              ),
              details: "19:00",
            },
            {
              note: t(
                "schedule.reception-section.time.reception.main-dinner.note",
              ),
              details: "19:30",
            },
            {
              note: t(
                "schedule.reception-section.time.reception.second-dinner.note",
              ),
              details: "~22:00",
            },
            {
              note: t("schedule.reception-section.time.reception.snack.note"),
              details: "~02:00",
            },
          ],
        },
        {
          note: t("schedule.reception-section.time.brunch.note"),
          details: t("schedule.reception-section.time.brunch.details"),
        },
      ],
    },
    {
      header: t("schedule.reception-section.getting-there.header"),
      info: t("schedule.reception-section.getting-there.info"),
    },
    {
      header: t("schedule.reception-section.notes.header"),
      info: t("schedule.reception-section.notes.info"),
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
          fontStyle="italic"
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

function FAQSection({ id }: { id?: string }) {
  const { t } = useTranslation();

  return (
    <Section
      id={id}
      sx={{
        background: "white",
        color: "#2D2B25",
      }}
    >
      <Stack sx={{ margin: "2vh 10vw", marginBottom: "40px" }} spacing={4}>
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
          {t("schedule.faq.title")}
        </Typography>
        {[
          "transportation",
          "accommodations",
          "dress-code",
          "registry",
          "getting-there",
          "children",
        ].map((section) => (
          <Box key={section} id={`faq-${section}`}>
            <Typography fontWeight={600} textTransform="uppercase">
              {t(`schedule.faq.${section}.header`)}
            </Typography>
            <Typography whiteSpace="pre-line">
              {t(`schedule.faq.${section}.details`)}
            </Typography>
            {section === "dress-code" && (
              <img
                src="/Images/DressCode.webp"
                style={{ objectFit: "contain", padding: "20px" }}
              />
            )}
          </Box>
        ))}
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
    ceremony: {
      component: CeremonySection,
      label: "Ceremony",
    },
    reception: {
      component: ReceptionSection,
      label: "Reception",
    },
    faq: {
      component: FAQSection,
      label: "FAQ",
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
