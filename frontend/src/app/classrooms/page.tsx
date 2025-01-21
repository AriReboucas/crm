"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Modal,
  Box as ModalBox,
} from "@mui/material";
import { useRouter } from "next/navigation";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  deleteClassroom,
  getAllClassrooms,
} from "@/services/classroom.service";

const ClassroomsPage = () => {
  const [classrooms, setClassrooms] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [classroomToDelete, setClassroomToDelete] = useState<string | null>(
    null
  );
  const router = useRouter();

  const fetchClassrooms = async () => {
    const classrooms = await getAllClassrooms();

    setClassrooms(classrooms);
  };

  useEffect(() => {
    fetchClassrooms();
  }, []);

  const handleEdit = (id: string) => {
    router.push(`/classrooms/${id}/edit`);
  };

  const handleDeleteOpen = (id: string) => {
    setClassroomToDelete(id);
    setOpenModal(true);
  };

  const handleDeleteClose = () => {
    setClassroomToDelete(null);
    setOpenModal(false);
  };

  const handleDeleteClassroom = async () => {
    if (classroomToDelete) {
      const responseDeletedClassroom = await deleteClassroom(classroomToDelete);

      if (responseDeletedClassroom) {
        await fetchClassrooms();
      }

      handleDeleteClose();
    }
  };

  const handleCreate = () => {
    router.push("/classrooms/new");
  };

  const handleClassroomClick = (id: string) => {
    router.push(`/classrooms/${id}`);
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
        Salas de Aula
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={handleCreate}
        sx={{ display: "flex", flexDirection: "column", marginBottom: 3 }}
      >
        Criar Nova Sala
      </Button>

      {classrooms.length === 0 ? (
        <Typography variant="h6">Nenhuma sala criada.</Typography>
      ) : (
        <List>
          {classrooms.map((classroom) => (
            <ListItem
              key={classroom.id}
              sx={{ display: "flex", flexDirection: "column", marginBottom: 2 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Button
                  onClick={() => handleClassroomClick(classroom.id)} // Redirecionar ao clicar
                  variant="text"
                  sx={{ textAlign: "left" }}
                >
                  <Typography variant="h6">{classroom.name}</Typography>
                </Button>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <IconButton
                    color="primary"
                    onClick={() => handleEdit(classroom.id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleDeleteOpen(classroom.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>
      )}

      <Modal
        open={openModal}
        onClose={handleDeleteClose}
        suppressHydrationWarning
      >
        <ModalBox
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Tem certeza de que deseja excluir esta sala?
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteClassroom}
            >
              Excluir Sala
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleDeleteClose}
            >
              Cancelar
            </Button>
          </Box>
        </ModalBox>
      </Modal>
    </Box>
  );
};

export default ClassroomsPage;
