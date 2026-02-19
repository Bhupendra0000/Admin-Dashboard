"use client";

import { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();

 const [form, setForm] = useState({
  username: "emilys",
  password: "emilyspass",
});


  const handleLogin = async () => {
    const res = await signIn("credentials", {
      username: form.username,
      password: form.password,
      redirect: false,
    });

    if (!res?.error) {
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" mb={2}>
        Admin Login
      </Typography>

      <TextField
        fullWidth
        label="Username"
        margin="normal"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />

      <TextField
        fullWidth
        type="password"
        label="Password"
        margin="normal"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
}
