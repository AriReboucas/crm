import api from "@/utils/api";

export const createClassroom = async (classroom: any) => {
    const professorId = localStorage.getItem("token");
    const response = await api.post(`/professor/${professorId}/classrooms`, classroom);

    return response.data;
}

export const getClassroom = async (classroomId: string) => {
    const response = await api.get(`/classroom/${classroomId}`);

    return response.data;
}

export const getAllClassrooms = async () => {
    const professorId = localStorage.getItem("token");

    const response = await api.get(`/professor/${professorId}/classrooms`);

    return response.data;
}

export const updateClassroom = async (classroomId: string, classroom: any) => {
    const response = await api.patch(`/classroom/${classroomId}`, classroom);

    return response.data;
}

export const deleteClassroom = async (classroomId: string) => {
    const response = await api.delete(`/classroom/${classroomId}`);

    return response.data;
}

