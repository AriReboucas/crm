"use client";

import { useParams, useRouter } from "next/navigation";
import { getClassroom } from "@/services/classroom.service";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  Modal,
  Typography,
  Box as ModalBox,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { ChevronLeft } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteActivity } from "@/services/activity.service";

const ClassroomDetailPage = () => {
  const params = useParams();
  const router = useRouter();

  if (typeof params.id !== "string") {
    params.id = "";
  }
  const classroomId = params.id;

  const [classroom, setClassroom] = useState();
  const [activityToDelete, setActivityToDelete] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const fetchClassroom = async () => {
    const response = await getClassroom(classroomId);

    setClassroom(response);
  };

  const handleEditClassroom = (id: string) => {
    router.push(`/classrooms/${id}/edit`);
  };

  const handleCreateActivity = (classroomId: string) => {
    router.push(`/classrooms/${classroomId}/activity/new`);
  };

  const handleEditActivity = (id: string) => {
    router.push(`/activity/${id}/edit`);
  };

  const handleActivityClick = (id: string) => {
    router.push(`/activity/${id}`);
  };

  const handleDeleteOpen = (id: string) => {
    console.log("activityToDelete: ", id);
    setActivityToDelete(id);
    setOpenModal(true);
  };

  const handleDeleteClose = () => {
    setActivityToDelete(null);
    setOpenModal(false);
  };

  const handleDeleteActivity = async () => {
    console.log("activityToDelete: ", activityToDelete);
    if (activityToDelete) {
      const responseDeletedActivity = await deleteActivity(activityToDelete);

      if (responseDeletedActivity) {
        await fetchClassroom();
      }

      handleDeleteClose();
    }
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
        maxWidth: 600,
        margin: "0 auto",
        textAlign: "center",
      }}
      suppressHydrationWarning
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          color="primary"
          onClick={() => router.push("/classrooms")}
          sx={{ mr: 2 }}
        >
          <ChevronLeft />
        </IconButton>

        <Typography variant="h4" gutterBottom>
          Sala: {classroom.name}
        </Typography>

        <IconButton
          color="primary"
          onClick={() => handleEditClassroom(classroom.id)}
        >
          <EditIcon />
        </IconButton>
      </Box>

      <Typography variant="h6" color="textSecondary" gutterBottom>
        Matéria: {classroom.subject}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Descrição: {classroom.description}
      </Typography>

      <Typography sx={{ mt: 2 }} variant="h4" gutterBottom>
        Atividades
      </Typography>
      <List>
        {classroom.activities.map((activity: any) => (
          <ListItem
            key={activity.id}
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
                onClick={() => handleActivityClick(activity.id)}
                variant="text"
                sx={{ textAlign: "left" }}
              >
                <Typography variant="h6">{activity.title}</Typography>
              </Button>
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton
                  color="primary"
                  onClick={() => handleEditActivity(activity.id)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="secondary"
                  onClick={() => handleDeleteOpen(activity.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>

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
            Tem certeza de que deseja excluir esta atividade?
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteActivity}
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

      <Button
        variant="contained"
        color="primary"
        onClick={() => handleCreateActivity(classroom.id)}
      >
        Criar Atividade
      </Button>
    </Box>
  );
};

export default ClassroomDetailPage;
