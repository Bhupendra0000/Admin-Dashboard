"use client";

import { Container, Typography, Button, Stack } from "@mui/material";
import Link from "next/link";

export default function Dashboard() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" mb={3}>Dashboard</Typography>

      <Stack spacing={2} direction="row">
        <Link href="/users">
          <Button variant="contained">Go to Users</Button>
        </Link>

        <Link href="/products">
          <Button variant="contained">Go to Products</Button>
        </Link>
      </Stack>
    </Container>
  );
}
