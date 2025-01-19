"use client";

import { useParams } from "next/navigation";

const ClassroomPage = () => {
  const params = useParams();
  const classroomId = params.id; // Captura o ID dinâmico da URL

  return (
    <div>
      <h1>Detalhes da Atividade</h1>
      <p>ID da Atividade: {classroomId}</p>
    </div>
  );
};

export default ClassroomPage;
