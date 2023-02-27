import { Appointment } from "@pp/utils";
import React from "react";
import { Card } from "./index";

const appointment: Appointment = {
  date: new Date().toString(),
  name: "Appointment 1",
  uuid: "1",
  user: {
    uuid: "1",
  },
};

describe("<Card />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Card appointment={appointment}/>);
    cy.get('p').should('have.text', appointment.date)

  });
});
