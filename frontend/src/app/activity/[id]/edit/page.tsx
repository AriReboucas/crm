"use client";

import { updateActivity, getActivity } from "@/services/activity.service";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import router from "next/router";
import { useEffect, useState } from "react";

const EditActivityPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState("");
  const [activity, setActivity] = useState();

  const router = useRouter();
  const params = useParams();

  if (typeof params.id !== "string") {
    params.id = "";
  }
  const activityId = params.id;

  const handleSubmit = async (event: React.FormEvent) => {
    setError("");
    event.preventDefault();

    try {
      const response = await updateActivity(activityId, {
        title,
        description,
        subject,
      });

      router.push(`/classrooms/${activity.classroom_id}`);
    } catch (error) {
      setError("Failed to update activity");
    }
  };

  const fetchActivity = async () => {
    const response = await getActivity(activityId);

    setActivity(response);
    setTitle(response.title);
    setDescription(response.description);
    setSubject(response.subject);
  };

  useEffect(() => {
    fetchActivity();
  }, []);

  if (!activity) {
    return <div>Loading...</div>;
  }

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
        Editar Sala de Aula
      </Typography>

      <TextField
        label="Título"
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
          Salvar
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => router.push(`/classrooms/${activity.classroom_id}`)}
        >
          Voltar
        </Button>
      </Box>
    </Box>
  );
};

export default EditActivityPage;
