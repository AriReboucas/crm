"use client";

import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClassroom } from "@/services/classroom.service";
import { ChevronLeft } from "@mui/icons-material";

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
        padding: 3,
        maxWidth: 700,
        margin: "0 auto",
        textAlign: "center",
      }}
      suppressHydrationWarning
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          marginBottom: 3,
        }}
      >
        <IconButton
          sx={{ color: "#FF7A6A", mr: 2 }}
          onClick={() => router.push("/classrooms")}
        >
          <ChevronLeft />
        </IconButton>
        <Typography variant="h4" gutterBottom>
          Nova Sala de Aula
        </Typography>
      </Box>

      <TextField
        label="Nome"
        type="text"
        id="name"
        name="name"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      <TextField
        label="Descrição"
        type="text"
        id="description"
        name="description"
        variant="outlined"
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ marginBottom: 2 }}
        multiline
        rows={6}
      />

      <TextField
        label="Matéria"
        type="text"
        id="subject"
        name="subject"
        variant="outlined"
        fullWidth
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        sx={{ marginBottom: 3 }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          width: "100%",
        }}
      >
        <Button
          variant="contained"
          id="create-cl-btn"
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#FF7A6A",
            transition: "transform 0.2s ease",
            "&:hover": { transform: "scale(1.05)" },
          }}
        >
          Criar Sala de Aula
        </Button>
      </Box>
    </Box>
  );
};

export default CreateClassroomPage;
