"use client";

import { updateActivity, getActivity } from "@/services/activity.service";
import { ChevronLeft } from "@mui/icons-material";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
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
          onClick={() => router.push(`/classrooms/${activity.classroom_id}`)}
        >
          <ChevronLeft />
        </IconButton>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 500,
          }}
          gutterBottom
        >
          Editar: {activity.title}
        </Typography>
      </Box>

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
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            marginLeft: 2,
            backgroundColor: "#FF7A6A",
            transition: "transform 0.2s ease",
            "&:hover": { transform: "scale(1.05)" },
          }}
        >
          Salvar
        </Button>
      </Box>
    </Box>
  );
};

export default EditActivityPage;
