// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getUserAppointments } from "@pp/services/appointments.service";
import { Appointment } from "@pp/utils";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  appointments: Appointment[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query, method } = req;
  const { uuid } = query;

  switch (method) {
    case "GET":
      // Get data from your database
      const appointments = getUserAppointments(uuid as string);

      res.status(200).json({ appointments });
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
