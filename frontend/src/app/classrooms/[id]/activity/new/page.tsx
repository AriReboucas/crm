"use client";

import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { createActivity } from "@/services/activity.service";

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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
      }}
      suppressHydrationWarning
    >
      <Typography variant="h4" gutterBottom>
        Nova Atividade
      </Typography>

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

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Criar Atividade
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

export default CreateActivityPage;
