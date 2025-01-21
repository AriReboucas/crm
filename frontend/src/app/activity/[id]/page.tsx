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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      suppressHydrationWarning
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
        <IconButton
          color="primary"
          onClick={() => router.push(`/classrooms/${activity.classroom_id}`)}
          sx={{ mr: 2 }}
        >
          <ChevronLeft />
        </IconButton>

        <Typography variant="h4" component="h1" gutterBottom>
          {activity?.title}
        </Typography>
      </Box>

      <Box>
        <Typography variant="body1" component="p" gutterBottom>
          {activity?.subject}
        </Typography>

        <Typography variant="body1" component="p" gutterBottom>
          {activity?.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ActivityPage;
