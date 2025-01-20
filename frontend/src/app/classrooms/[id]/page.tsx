"use client";

import { useParams } from "next/navigation";
import { getClassroom } from "@/services/classroom.service";
import { useEffect, useState } from "react";

const ClassroomPage = () => {
  const params = useParams();

  if (typeof params.id !== "string") {
    params.id = "";
  }
  const classroomId = params.id;

  const [classroom, setClassroom] = useState();

  const fetchClassroom = async () => {
    const response = await getClassroom(classroomId);

    setClassroom(response);
  };

  useEffect(() => {
    fetchClassroom();
  }, []);

  if (!classroom) {
    return <div>Sala de Aula não encontrada!</div>;
  }

  return (
    <div>
      <h1>Detalhes da Sala: {classroom.name}</h1>
      <h2>Matéria: {classroom.subject}</h2>
      <p>Descrição: {classroom.description}</p>

      <p>{classroom.description}</p>
    </div>
  );
};

export default ClassroomPage;
