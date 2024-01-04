import Footer from "./Footer";

const sizes = ["iphone-6", "ipad-2", "samsung-s10", "macbook-16"];
// const sizes = ["macbook-16"];

describe("Footer Component", () => {
    sizes.forEach((size) => {
        // an array of different viewports
        it(`Should display on ${size} screen`, () => {
            cy.viewport(size);
            cy.mount(<Footer />);

            // Check Image
            cy.get(":nth-child(1) > a").invoke("attr", "href").should("eq", "#Home");
        });
    });
});
