"use client";

import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { updateClassroom, getClassroom } from "@/services/classroom.service";
import { ChevronLeft } from "@mui/icons-material";

const EditClassroomPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState("");
  const params = useParams();
  const router = useRouter();
  const [classroom, setClassroom] = useState();

  if (typeof params.id !== "string") {
    params.id = "";
  }
  const classroomId = params.id;

  const handleSubmit = async (event: React.FormEvent) => {
    setError("");
    event.preventDefault();

    try {
      const response = await updateClassroom(classroomId, {
        name,
        description,
        subject,
      });

      router.push(`/classrooms/${response.id}`);
    } catch (error) {
      setError("Failed to update classroom");
    }
  };

  const fetchClassroom = async () => {
    const response = await getClassroom(classroomId);

    setClassroom(response);
    setName(response.name);
    setDescription(response.description);
    setSubject(response.subject);
  };

  useEffect(() => {
    fetchClassroom();
  }, []);

  if (!classroom) {
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
          onClick={() => router.push("/classrooms")}
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
          Editar: {classroom.name}
        </Typography>
      </Box>

      <TextField
        label="Nome"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
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

      <TextField
        label="Descrição"
        variant="outlined"
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ marginBottom: 2 }}
        multiline
        rows={6}
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

export default EditClassroomPage;
