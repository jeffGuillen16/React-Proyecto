import Projects from "./Projects";

// const sizes = ["iphone-6", "ipad-2", "samsung-s10", "macbook-16"];
const sizes = ["macbook-16"];

describe("Projects Component", () => {
    sizes.forEach((size) => {
        // an array of different viewports
        it(`Should display on ${size} screen`, () => {
            cy.viewport(size);
            cy.mount(<Projects />);

            // Check Image
            cy.get(".react-multi-carousel-item--active > .img_box > img")
                .invoke("attr", "src")
                .should("eq", "https://t3.ftcdn.net/jpg/00/83/92/82/360_F_83928200_mYGZqB0ozTtSS6J5EtW9834mjb5tLW6x.jpg");

            // Click Next Button
            cy.get(".project_img_box > .react-multi-carousel-list > .react-multiple-carousel__arrow").click();
            cy.get(".react-multi-carousel-item--active > .img_box > img")
                .invoke("attr", "src")
                .should("eq", "https://t3.ftcdn.net/jpg/01/86/53/12/360_F_186531267_4Q8uw3z9Mf2XNWuazPismDtQswjGzwfu.jpg");

            // Check Title
            cy.get("h2").should("have.text", "Project 1");

            // Change Slide
            cy.wait(1000);
            cy.get('[data-index="1"] > .item > img').click();
            cy.get(".react-multi-carousel-item--active > .img_box > img")
                .invoke("attr", "src")
                .should(
                    "eq",
                    "https://images.unsplash.com/photo-1612637968894-660373e23b03?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50JTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
                );
            cy.get(".project_img_box > .react-multi-carousel-list > .react-multiple-carousel__arrow").click();
            cy.get(".react-multi-carousel-item--active > .img_box > img").invoke("attr", "src").should(
                "eq",
                // "https://images.unsplash.com/photo-1612637968894-660373e23b03?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50JTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
                "https://c8.alamy.com/comp/2E20XW1/courtyard-of-modern-apartment-buildings-condo-with-sidewalk-and-green-grass-no-people-real-estate-business-concept-2E20XW1.jpg"
            );
            cy.get("h2").should("have.text", "Project 2");
        });
    });
});
