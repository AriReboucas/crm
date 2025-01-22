"use client";

import { useParams, useRouter } from "next/navigation";
import { getActivity } from "@/services/activity.service";
import { useEffect, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import router from "next/router";

const ActivityPage = () => {
  const params = useParams();
  const activityId = params.id;
  const router = useRouter();

  const [activity, setActivity] = useState();

  const fetchActivity = async () => {
    try {
      const response = await getActivity(activityId);
      setActivity(response);
    } catch (error) {
      console.error("Erro ao buscar atividade", error);
    }
  };

  useEffect(() => {
    fetchActivity();
  }, []);

  if (!activity) {
    return <div>Atividade não encontrada!</div>;
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
          justifyContent: "flex-start",
          alignItems: "center",
          marginBottom: 3,
        }}
      >
        <IconButton
          onClick={() => router.push(`/classrooms/${activity.classroom_id}`)}
          sx={{ color: "#FF7A6A", mr: 2 }}
        >
          <ChevronLeft />
        </IconButton>

        <Typography
          variant="h4"
          component="h1"
          sx={{ marginBottom: 0 }}
          gutterBottom
        >
          {activity?.title}
        </Typography>
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
          {activity?.subject}
        </Typography>

        <Typography
          variant="body1"
          gutterBottom
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem" },
            color: "text.primary",
          }}
        >
          {activity?.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ActivityPage;
