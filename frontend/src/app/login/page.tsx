"use client";

import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { login } from "@/services/auth.service";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    setError("");
    event.preventDefault();

    try {
      const response = await login(email, password);

      localStorage.setItem("token", response.id);

      window.location.href = "/classrooms";
    } catch (_) {
      setError("Invalid email or password");
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{ marginTop: 8, border: 1, borderRadius: 2 }}
      suppressHydrationWarning
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "background.paper",
        }}
      >
        <Typography variant="h5" align="center" marginBottom={3}>
          Login
        </Typography>

        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          autoFocus
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
        />

        <Button variant="contained" color="primary" type="submit" fullWidth>
          Login
        </Button>

        {error && <Typography color="error">{error}</Typography>}
      </Box>
    </Container>
  );
};

export default LoginPage;
