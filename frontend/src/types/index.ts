export interface IActivity {
    id: string;
    title: string;
    description: string;
    subject: string;
    classroom_id?: string;
}

export interface IClassroom {
    id: string;
    name: string;
    description: string;
    subject: string;
    activities?: IActivity[];
}