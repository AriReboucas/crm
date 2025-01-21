"use client";

import { Box, Typography, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { updateClassroom, getClassroom } from "@/services/classroom.service";

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
          Salvar
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

export default EditClassroomPage;
