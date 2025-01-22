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
import AddIcon from "@mui/icons-material/Add";

import {
  deleteClassroom,
  getAllClassrooms,
} from "@/services/classroom.service";
import { IClassroom } from "@/types";

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
        width: {
          xs: "100%",
        },
      }}
      suppressHydrationWarning
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: {
            xs: "100%",
            sm: 1500,
          },
          marginBottom: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginLeft: 2,
            marginBottom: 0,
          }}
          gutterBottom
        >
          Salas de Aula
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={handleCreate}
          sx={{
            display: "flex",
            alignItems: "center",
            paddingX: 3,
            marginRight: 2,
            backgroundColor: "#FF7A6A",
            textTransform: "none",
            transition: "transform 0.2s ease",
            "&:hover": { transform: "scale(1.05)" },
          }}
        >
          <AddIcon />
        </Button>
      </Box>

      {classrooms.length === 0 ? (
        <Typography variant="h6" color="text.secondary">
          Nenhuma sala criada.
        </Typography>
      ) : (
        <List>
          {classrooms.map((classroom: IClassroom) => (
            <ListItem
              key={classroom.id}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",

                backgroundColor: "background.paper",
                borderRadius: 1,
                boxShadow: 1,
                marginBottom: 2,
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "action.hover",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  textAlign: "left",
                  alignItems: "center",
                }}
              >
                <Button
                  onClick={() => handleClassroomClick(classroom.id)}
                  variant="text"
                  sx={{ color: "text.primary" }}
                >
                  <Typography variant="h6">{classroom.name}</Typography>
                </Button>
              </Box>

              <Box sx={{ display: "flex", gap: 2, ml: "auto" }}>
                <IconButton
                  sx={{ color: "#133069" }}
                  onClick={() => handleEdit(classroom.id)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  sx={{ color: "#D2371D" }}
                  onClick={() => handleDeleteOpen(classroom.id)}
                >
                  <DeleteIcon />
                </IconButton>
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
            borderRadius: 2,
            maxWidth: 400,
          }}
        >
          <Typography
            variant="h6"
            sx={{ textAlign: "center", mb: 3 }}
            gutterBottom
          >
            Tem certeza de que deseja excluir esta sala?
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteClassroom}
            >
              Excluir
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
