import api from "@/utils/api";

export const createActivity = async (classroomId: string, activity: any) => {
    const response = await api.post(`/classroom/${classroomId}/activity`, activity);

    return response.data;
}