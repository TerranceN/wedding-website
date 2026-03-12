import { List, ListItem, Typography } from "@mui/material";

export type Bullet = {
  note?: string;
  details: string;
  bullets?: Bullet[];
  extra?: React.ReactNode;
};

function BulletedList({ bullets }: { bullets: Bullet[] }) {
  return (
    <List
      sx={{
        listStyleType: "disc",
        padding: 0,
        pl: 4,
      }}
    >
      {bullets.map(({ note, details, extra, bullets: subBullets }, idx) => (
        <ListItem
          key={`$bullet-${idx}`}
          sx={{
            display: "list-item",
            padding: 0,
          }}
        >
          {note && (
            <Typography display="inline" fontWeight={600} marginRight="5px">
              {note}:
            </Typography>
          )}
          <Typography display="inline">{details}</Typography>
          {subBullets && <BulletedList bullets={subBullets} />}
          {extra}
        </ListItem>
      ))}
    </List>
  );
}

export default BulletedList;
