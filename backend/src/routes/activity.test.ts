import request from 'supertest';
import express from 'express';
import { deleteActivity, getActivity, updateActivity } from '../controllers/activity.controller';

const activityId = "1";

const activity = {
    id: activityId,
    title: 'Sports',
    description:
        'Amor aqua deripio amaritudo appono ante ultio. Viridis spes desidero amita aptus confugo. Aspicio subvenio triduana ulterius suscipio cenaculum deorsum eum veritas.',
    subject: 'Unbranded Bronze Fish',
    created_at: '2025-01-19T01:18:28.955Z',
    classroom_id: 6,
}

const updatedActivity = { title: 'New Title', description: 'Updated Description' }

jest.mock('../controllers/activity.controller', () => ({
    updateActivity: jest.fn((req, res) =>
        res.status(200).json(activity)
    ),
    deleteActivity: jest.fn((req, res) =>
        res.status(200).json(activity)),
    getActivity: jest.fn((req, res) =>
        res.status(200).json(activity)),
}));

const app = express();
app.use(express.json());

app.patch('/activity/:activityId', updateActivity);
app.delete('/activity/:activityId', deleteActivity);
app.get('/activity/:activityId', getActivity);

describe('Activity Route', () => {
    it('should update an activity', async () => {
        const response = await request(app)
            .patch('/activity/' + activityId)
            .send(updatedActivity);

        expect(response.body).toEqual(activity);
        expect(response.status).toBe(200);
    });

    it('should delete an activity', async () => {
        const response = await request(app)
            .delete('/activity/' + activityId)

        expect(response.body).toEqual(activity);
        expect(response.status).toBe(200);
    });

    it('should get an activity', async () => {
        const response = await request(app)
            .get('/activity/' + activityId)

        expect(response.body).toEqual(activity);
        expect(response.status).toBe(200);
    });
});
