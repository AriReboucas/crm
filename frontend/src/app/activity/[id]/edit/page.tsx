"use client";

import { updateActivity, getActivity } from "@/services/activity.service";
import { IActivity } from "@/types";
import { ChevronLeft } from "@mui/icons-material";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const EditActivityPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState("");
  const [activity, setActivity] = useState<IActivity | null>();

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

      router.push(`/classrooms/${response.classroom_id}`);
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
        id="act-title"
        name="act-title"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      <TextField
        label="Descrição"
        id="act-description"
        name="act-description"
        variant="outlined"
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      <TextField
        label="Matéria"
        id="act-subject"
        name="act-subject"
        variant="outlined"
        fullWidth
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        sx={{ marginBottom: 3 }}
      />

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="contained"
          id="edit-act-btn"
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
