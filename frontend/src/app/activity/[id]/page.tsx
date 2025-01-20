"use client";

import { useParams } from "next/navigation";
import { getActivity } from "@/services/activity.service";
import { useEffect, useState } from "react";

const ActivityPage = () => {
  const params = useParams();
  const activityId = params.id;

  const [activity, setActivity] = useState();

  const fetchActivity = async () => {
    const response = await getActivity(activityId);

    setActivity(response);
  };

  useEffect(() => {
    fetchActivity();
  }, []);

  if (!activity) {
    return <div>Atividade não encontrada!</div>;
  }

  return (
    <div>
      <h1>Detalhes da Atividade: {activity?.title}</h1>
      <h2>Matéria: {activity?.subject}</h2>
      <p>Descrição: {activity?.description}</p>

      <p>{activityId}</p>
    </div>
  );
};

export default ActivityPage;
