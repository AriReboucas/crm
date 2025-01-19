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
import VisibilityIcon from "@mui/icons-material/Visibility";
import { getAllClassrooms } from "@/services/classroom.service";

const ClassroomsPage = () => {
  const [classrooms, setClassrooms] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [classroomToDelete, setClassroomToDelete] = useState<string | null>(
    null
  );
  const [activityToDelete, setActivityToDelete] = useState<string | null>(null);
  const router = useRouter();

  const getClassroomsFromLocalStorage = async () => {
    const classrooms = await getAllClassrooms();

    setClassrooms(classrooms);
  };

  useEffect(() => {
    getClassroomsFromLocalStorage();
  }, []);

  const handleEdit = (id: string) => {
    router.push(`/edit-classroom/${id}`);
  };

  const handleDeleteOpen = (id: string) => {
    setClassroomToDelete(id);
    setOpenModal(true);
  };

  const handleDeleteClose = () => {
    setClassroomToDelete(null);
    setActivityToDelete(null);
    setOpenModal(false);
  };

  const handleDeleteClassroom = () => {
    if (classroomToDelete) {
      const updatedClassrooms = classrooms.filter(
        (classroom) => classroom.id !== classroomToDelete
      );
      localStorage.setItem("classrooms", JSON.stringify(updatedClassrooms));
      setClassrooms(updatedClassrooms);
      handleDeleteClose();
    }
  };

  const handleDeleteActivity = (classroomId: string, activityId: string) => {
    const updatedClassrooms = classrooms.map((classroom) =>
      classroom.id === classroomId
        ? {
            ...classroom,
            activities: classroom.activities?.filter(
              (activity) => activity.id !== activityId
            ),
          }
        : classroom
    );
    localStorage.setItem("classrooms", JSON.stringify(updatedClassrooms));
    setClassrooms(updatedClassrooms);
    handleDeleteClose();
  };

  const handleCreateActivity = (classroomId: string) => {
    router.push(`/create-activity/${classroomId}`);
  };

  const handleCreate = () => {
    router.push("/create-classroom");
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
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleCreateActivity(classroom.id)}
                  >
                    Criar Atividade
                  </Button>
                </Box>
              </Box>

              {classroom.activities && classroom.activities.length > 0 ? (
                <Box sx={{ marginTop: 2 }}>
                  <Typography variant="h6">Atividades:</Typography>
                  {classroom.activities.map((activity: any) => (
                    <Box key={activity.id} sx={{ marginBottom: 1 }}>
                      <Typography variant="body1">{activity.title}</Typography>
                      <Typography variant="body2">
                        {activity.description}
                      </Typography>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <IconButton
                          color="primary"
                          onClick={() =>
                            router.push(`/edit-activity/${activity.id}`)
                          }
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          color="secondary"
                          onClick={() => {
                            setActivityToDelete(activity.id);
                            setClassroomToDelete(classroom.id);
                            setOpenModal(true);
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                        <IconButton
                          color="default"
                          onClick={() =>
                            router.push(`/view-activity/${activity.id}`)
                          }
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  ))}
                </Box>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  Nenhuma atividade criada para esta sala.
                </Typography>
              )}
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
            Tem certeza de que deseja excluir{" "}
            {activityToDelete ? "a atividade?" : "esta sala?"}
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            {activityToDelete ? (
              <Button
                variant="contained"
                color="error"
                onClick={() =>
                  handleDeleteActivity(classroomToDelete!, activityToDelete)
                }
              >
                Excluir Atividade
              </Button>
            ) : (
              <Button
                variant="contained"
                color="error"
                onClick={handleDeleteClassroom}
              >
                Excluir Sala
              </Button>
            )}
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
