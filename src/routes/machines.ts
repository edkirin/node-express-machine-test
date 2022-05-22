import express from "express";
import { MachineModel, CompanyModel } from "../orm/models";

export const router = express.Router();

router
    .get("/", async (req: any, res: any) => {
        const machines = await MachineModel.findAll({
            limit: 10,
            include: CompanyModel,
        });

        res.json({
            meta: {},
            machines,
        });
    })
    .post("/", (req: any, res: any) => {
        res.json({
            message: "Machines POST",
        });
    });

router.get("/:id", async (req: any, res: any) => {
    const machine = await MachineModel.findByPk(req.params.id);
    if (machine === null) {
        res.status(404).send();
        return;
    }

    res.json(machine);
});
