import request from "supertest";
import express from "express";
import { prisma } from "../server";
import { createActivity, updateActivity, deleteActivity, getActivity } from "./activity.controller";

jest.mock("../server", () => ({
    prisma: {
        activity: {
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
            findUnique: jest.fn()
        }
    }
}))

const app = express();
app.use(express.json());
app.post("/activity", createActivity);
app.patch("/activity/:activityId", updateActivity);
app.delete("/activity/:activityId", deleteActivity);
app.get("/activity/:activityId", getActivity);

describe("Activity Controller", () => {
    it("should create an activity", async () => {
        const newActivity = {
            title: "Test Activity",
            description: "Test Description",
            subject: "Test Subject"
        }

        const createdActivity = {
            id: 1,
            ...newActivity
        };

        (prisma.activity.create as jest.Mock).mockResolvedValue(createdActivity);

        const response = await request(app).post("/activity").send(newActivity);

        expect(response.body).toEqual(createdActivity);
        expect(response.status).toBe(201);
    })

    it("should update an activity", async () => {
        const toUpdateActivity = {
            title: "Updated Activity",
            description: "Updated Description",
            subject: "Updated Subject"
        }

        const activityId = 1;

        const updatedActivity = {
            id: activityId,
            ...toUpdateActivity
        };

        (prisma.activity.update as jest.Mock).mockResolvedValue(updatedActivity);

        const response = await request(app).patch(`/activity/${activityId}`).send(toUpdateActivity);

        expect(response.body).toEqual(updatedActivity);
        expect(response.status).toBe(200);
    })

    it("should delete an activity", async () => {
        const activityId = 1;

        const deletedActivity = {
            id: activityId
        };

        (prisma.activity.delete as jest.Mock).mockResolvedValue(deletedActivity);

        const response = await request(app).delete(`/activity/${activityId}`);

        expect(response.body).toEqual(deletedActivity);
        expect(response.status).toBe(200);
    })

    it("should get an activity", async () => {
        const activityId = 1;

        const activity = {
            "id": activityId,
            "title": "Title Activity 3",
            "description": "Description Activity 3",
            "subject": "Subject Activity 3",
            "created_at": "2025-01-19T00:13:30.995Z",
            "classroom_id": 2
        };

        (prisma.activity.findUnique as jest.Mock).mockResolvedValue(activity);

        const response = await request(app).get(`/activity/${activityId}`);

        expect(response.body).toEqual(activity);
        expect(response.status).toBe(200);
    })

})