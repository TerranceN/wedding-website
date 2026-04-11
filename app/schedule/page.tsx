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
import { useSelectedLanguage, useTranslation } from "next-export-i18n";
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
          color="#faf1e1"
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
      info: t("schedule.ceremony-section.address.info"),
    },
    {
      header: t("schedule.ceremony-section.time.header"),
      info: "16:45",
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
  const { lang } = useSelectedLanguage();
  const { t } = useTranslation();

  const information = [
    {
      header: t("schedule.reception-section.address.header"),
      info: t("schedule.reception-section.address.info"),
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
              details: "~19:00",
            },
            {
              note: t(
                "schedule.reception-section.time.reception.main-dinner.note",
              ),
              details: "~19:00",
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
            ...(lang === "en"
              ? [
                  {
                    note: t(
                      "schedule.reception-section.time.reception.night-end.note",
                    ),
                    details: "~05:00, but you are welcome to retire earlier",
                  },
                ]
              : []),
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
      header: t("schedule.reception-section.accommodations.header"),
      info: t("schedule.reception-section.accommodations.info"),
    },
    ...(lang === "en"
      ? [
          {
            header: t("schedule.reception-section.after-party.header"),
            info: t("schedule.reception-section.after-party.info"),
          },
        ]
      : []),
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

function FAQTransportationDetails() {
  const { t } = useTranslation();

  return (
    <BulletedList
      bullets={[
        {
          note: t("schedule.faq.transportation.bullets.car.note"),
          details: t("schedule.faq.transportation.bullets.car.details"),
        },
        {
          note: t("schedule.faq.transportation.bullets.transit.note"),
          details: t("schedule.faq.transportation.bullets.transit.details"),
        },
        {
          note: t("schedule.faq.transportation.bullets.to-ceremony.note"),
          details: t("schedule.faq.transportation.bullets.to-ceremony.details"),
        },
      ]}
    />
  );
}

function FAQAccommodationDetails() {
  const { t } = useTranslation();

  return (
    <>
      <Typography whiteSpace="pre-line">
        {t(`schedule.faq.accommodations.details1`)}
      </Typography>
      <BulletedList
        bullets={[
          {
            details: t("schedule.faq.accommodations.bullets.email"),
          },
          {
            details: t("schedule.faq.accommodations.bullets.phone"),
          },
        ]}
      />
      <Typography whiteSpace="pre-line">
        {t(`schedule.faq.accommodations.details2`)}
      </Typography>
    </>
  );
}

function FAQDressCodeDetails() {
  const { t } = useTranslation();

  return (
    <>
      <Typography whiteSpace="pre-line">
        {t(`schedule.faq.dress-code.details1`)}
      </Typography>
      <BulletedList
        bullets={[
          {
            details: t("schedule.faq.dress-code.bullets.bullet1"),
          },
          {
            details: t("schedule.faq.dress-code.bullets.bullet2"),
          },
          {
            details: t("schedule.faq.dress-code.bullets.bullet3"),
          },
          {
            details: t("schedule.faq.dress-code.bullets.bullet4"),
          },
        ]}
      />
      <Typography whiteSpace="pre-line">
        {t(`schedule.faq.dress-code.details2`)}
      </Typography>
    </>
  );
}

function FAQSection({ id }: { id?: string }) {
  const { lang } = useSelectedLanguage();
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
        {(
          [
            ["transportation", FAQTransportationDetails],
            ["accommodations", lang === "en" ? FAQAccommodationDetails : null],
            ["plus-ones", null],
            ["children", null],
            ["dress-code", lang === "en" ? FAQDressCodeDetails : null],
            ["registry", null],
            ...(lang === "en" ? [["more-questions", null]] : []),
          ] as const
        ).map(([section, Details]) => {
          return (
            <Box key={section} id={`faq-${section}`}>
              <Typography fontWeight={600} textTransform="uppercase">
                {t(`schedule.faq.${section}.header`)}
              </Typography>
              {Details ? (
                <Details />
              ) : (
                <Typography whiteSpace="pre-line">
                  {t(`schedule.faq.${section}.details`)}
                </Typography>
              )}
            </Box>
          );
        })}
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
