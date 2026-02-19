import { Container, Typography, Button } from "@mui/material";
import Link from "next/link";

export default async function UserDetail({ params }) {
  const res = await fetch(`https://dummyjson.com/users/${params.id}`, {
    cache: "no-store",
  });

  const user = await res.json();

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4">
        {user.firstName} {user.lastName}
      </Typography>

      <Typography>Email: {user.email}</Typography>
      <Typography>Phone: {user.phone}</Typography>
      <Typography>Gender: {user.gender}</Typography>
      <Typography>Company: {user.company?.name}</Typography>

      <Link href="/users" style={{ textDecoration: "none" }}>
        <Button sx={{ mt: 2 }} variant="contained">
          Back to Users
        </Button>
      </Link>
    </Container>
  );
}
