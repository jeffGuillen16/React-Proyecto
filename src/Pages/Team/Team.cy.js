import Team from "./Team";

const sizes = ["iphone-6", "ipad-2", "samsung-s10", "macbook-16"];
// const sizes = ["macbook-16"];

describe("Team Component", () => {
    sizes.forEach((size) => {
        // an array of different viewports
        it(`Should display on ${size} screen`, () => {
            cy.viewport(size);
            cy.mount(<Team />);

            // Check Image
            cy.get("#MariaElena1").invoke("attr", "src").should("eq", "/__cypress/src/static/media/Employee_1.03117fb8c8cc5c64b02e.png");
            cy.get(":nth-child(1) > :nth-child(1) > .details_box > .name").should("have.text", "Maria Elena");
            cy.get(":nth-child(1) > :nth-child(1) > .details_box > .role").should("have.text", "CEO");
        });
    });
});
