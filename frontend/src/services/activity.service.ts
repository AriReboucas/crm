import api from "@/utils/api";

export const createActivity = async (classroomId: string, activity: any) => {
    const response = await api.post(`/classroom/${classroomId}/activity`, activity);

    return response.data;
}

export const getActivity = async (activityId: string) => {
    const response = await api.get(`/activity/${activityId}`);

    return response.data;
}

export const updateActivity = async (activityId: string, activity: any) => {
    const response = await api.patch(`/activity/${activityId}`, activity);

    return response.data;
}

export const deleteActivity = async (activityId: string) => {
    const response = await api.delete(`/activity/${activityId}`);

    return response.data;
}

