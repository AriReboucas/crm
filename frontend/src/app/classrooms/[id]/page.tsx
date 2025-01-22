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
import AddIcon from "@mui/icons-material/Add";
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
        maxWidth: 700,
        margin: "0 auto",
        textAlign: "center",
      }}
      suppressHydrationWarning
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
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
          sx={{ fontWeight: 500, fontSize: { xs: 24 } }}
          gutterBottom
        >
          {classroom.name}
        </Typography>

        <IconButton
          sx={{ color: "#133069" }}
          onClick={() => handleEditClassroom(classroom.id)}
        >
          <EditIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          marginBottom: 3,
          padding: 2,
          borderRadius: 2,
          backgroundColor: "background.paper",
          boxShadow: 1,
        }}
      >
        <Typography
          variant="h6"
          color="text.secondary"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
            marginBottom: 1,
          }}
        >
          Matéria: {classroom.subject}
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem" },
            color: "text.primary",
          }}
        >
          {classroom.description}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "auto",
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
          Atividades
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleCreateActivity(classroom.id)}
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

      {classroom.activities.length === 0 ? (
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem" },
            color: "text.primary",
          }}
        >
          Nenhuma atividade cadastrada
        </Typography>
      ) : (
        <List>
          {classroom.activities.map((activity: any) => (
            <ListItem
              key={activity.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingY: 1,
                borderBottom: "1px solid #ddd",
              }}
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
              </Box>

              <Box sx={{ display: "flex", gap: 2, ml: "auto" }}>
                <IconButton
                  sx={{ color: "#133069" }}
                  onClick={() => handleEditActivity(activity.id)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  sx={{ color: "#D2371D" }}
                  onClick={() => handleDeleteOpen(activity.id)}
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
            Tem certeza de que deseja excluir esta atividade?
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteActivity}
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

export default ClassroomDetailPage;
