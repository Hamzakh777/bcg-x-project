import { Appointment } from "@pp/utils";
import { Card } from "../Card";
import styles from "./List.module.css";

interface ListProps {
  appointments: Appointment[];
}

export const List = ({ appointments }: ListProps) => {
  return (
    <div className={styles.list}>
      {appointments.map((appointment) => (
        <Card appointment={appointment} key={appointment.uuid}/>
      ))}
    </div>
  );
};
