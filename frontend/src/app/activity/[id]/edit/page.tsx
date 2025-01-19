"use client";

import { useParams } from "next/navigation";

const EditClassroom = () => {
  const params = useParams();
  const classroomId = params.id; // Valor capturado da URL (17, por exemplo).

  return (
    <div>
      <h1>Editando Atividade</h1>
      <p>ID da Atividade: {classroomId}</p>
    </div>
  );
};

export default EditClassroom;
