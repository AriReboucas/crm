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
      sx={{
        marginTop: "10%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F2F0E4",
        padding: 5,
        borderRadius: 2,
      }}
      suppressHydrationWarning
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: "bold",
          marginBottom: 4,
          color: "#133069",
          letterSpacing: 1.5,
          textTransform: "uppercase",
        }}
      >
        Extra HomeWork
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "#FFFFFF",
          width: "100%",
        }}
      >
        <Typography
          variant="h6"
          align="center"
          marginBottom={3}
          sx={{ color: "#133069" }}
        >
          Login
        </Typography>

        <TextField
          label="Email"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          autoFocus
        />

        <TextField
          label="Senha"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
        />

        <Button
          variant="contained"
          type="submit"
          id="login-button"
          fullWidth
          sx={{
            backgroundColor: "#FF7A6A",
            "&:hover": {
              backgroundColor: "#D2371D",
            },
            color: "#FFFFFF",
            fontWeight: "bold",
          }}
        >
          Login
        </Button>

        {error && <Typography color="error">{error}</Typography>}
      </Box>
    </Container>
  );
};

export default LoginPage;
