import api from "@/utils/api";

export const getAllClassrooms = async () => {
    const professorId = localStorage.getItem("token");

    const response = await api.get(`/professor/${professorId}/classrooms`);

    return response.data;
}

export const getClassroom = async (classroomId: string) => {
    const response = await api.get(`/classroom/${classroomId}`);

    return response.data;
}