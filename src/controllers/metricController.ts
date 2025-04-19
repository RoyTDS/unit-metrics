import { Request, Response } from 'express';
import Metric from '../models/Metric';
import { convertUnit } from '../utils/converter';

export const createMetric = async (req: Request, res: Response) => {
    try {
        const data = Array.isArray(req.body) ? req.body : [req.body];
        const metrics = await Metric.insertMany(data);
        res.status(201).json(metrics);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create metric(s)', detail: err });
    }
};

export const getMetricsByType = async (req: Request, res: Response) => {
    try {
        const { type, userId } = req.query;
        const metrics = await Metric.find({ userId, type });
        res.json(metrics);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch metrics', detail: err });
    }
};

export const getChartData = async (req: Request, res: Response) => {
    try {
        const { type, months = 1, unit, userId } = req.query;
        const fromDate = new Date();
        fromDate.setMonth(fromDate.getMonth() - Number(months));

        const rawData = await Metric.aggregate([
            { $match: { userId, type, date: { $gte: fromDate } } },
            { $sort: { date: -1, createdAt: -1 } },
            {
                $group: {
                    _id: {
                        day: { $dayOfMonth: "$date" },
                        month: { $month: "$date" },
                        year: { $year: "$date" },
                    },
                    latest: { $first: "$$ROOT" }
                }
            },
            { $replaceRoot: { newRoot: "$latest" } },
            { $sort: { date: 1 } }
        ]);

        const data = unit
            ? rawData.map(m => ({
                ...m,
                value: convertUnit(m.type, m.value, m.unit, unit as string)
            }))
            : rawData;

        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to get chart data', detail: err });
    }
};

export const deleteMetric = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deleted = await Metric.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ error: 'Metric not found' });
        }
        res.json({ message: 'Metric deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete metric', detail: err });
    }
};

export const updateMetric = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { value, unit, date } = req.body;
        const updated = await Metric.findByIdAndUpdate(
            id,
            { value, unit, date },
            { new: true }
        );
        if (!updated) {
            return res.status(404).json({ error: 'Metric not found' });
        }
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update metric', detail: err });
    }
};