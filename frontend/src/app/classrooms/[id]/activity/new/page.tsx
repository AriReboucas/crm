"use client";

import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { createActivity } from "@/services/activity.service";
import { ChevronLeft } from "@mui/icons-material";

const CreateActivityPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const params = useParams();

  if (typeof params.id !== "string") {
    params.id = "";
  }
  const classroomId = params.id;

  const handleSubmit = async (event: React.FormEvent) => {
    setError("");
    event.preventDefault();

    try {
      const response = await createActivity(classroomId, {
        title,
        description,
        subject,
      });

      router.push(`/classrooms/${response.classroom_id}`);
    } catch (error) {
      setError("Failed to create activity");
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
          Nova Atividade
        </Typography>
      </Box>

      <TextField
        label="Nome"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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
          sx={{
            backgroundColor: "#FF7A6A",
            transition: "transform 0.2s ease",
            "&:hover": { transform: "scale(1.05)" },
          }}
          onClick={handleSubmit}
        >
          Criar Atividade
        </Button>
      </Box>
    </Box>
  );
};

export default CreateActivityPage;
