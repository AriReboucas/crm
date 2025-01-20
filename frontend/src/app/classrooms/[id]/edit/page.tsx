"use client";

import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClassroom } from "@/services/classroom.service";

const CreateClassroomPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    setError("");
    event.preventDefault();

    try {
      const response = await createClassroom({ name, description, subject });

      router.push(`/classrooms/${response.id}`);
    } catch (error) {
      setError("Failed to create classroom");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
      }}
      suppressHydrationWarning
    >
      <Typography variant="h4" gutterBottom>
        Nova Sala de Aula
      </Typography>

      <TextField
        label="Nome"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      <TextField
        label="Descrição"
        variant="outlined"
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      <TextField
        label="Matéria"
        variant="outlined"
        fullWidth
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        sx={{ marginBottom: 3 }}
      />

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Criar Sala de Aula
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => router.push("/classrooms")}
        >
          Voltar
        </Button>
      </Box>
    </Box>
  );
};

export default CreateClassroomPage;
