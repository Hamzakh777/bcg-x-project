import { Appointment } from "@pp/utils";
import styles from "./Card.module.css";
import { Inter } from "next/font/google";

interface CardProps {
  appointment: Appointment;
}

const inter = Inter({ subsets: ["latin"] });


export const Card = ({ appointment }: CardProps) => {
  const { name, date } = appointment;

  return (
    <div className={styles.card}>
      <h2 className={inter.className}>
        {name} <span>-&gt;</span>
      </h2>
      <p className={inter.className}>
        {date}
      </p>
    </div>
  );
};
