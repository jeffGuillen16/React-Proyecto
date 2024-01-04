// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')
import { mount } from "cypress/react18";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { fab, faFacebook, faInstagram, faTiktok, faWhatsapp,faFacebookF } from "@fortawesome/free-brands-svg-icons";
import {
    faClock,
    faHouse,
    faCaretDown,
    faAngleRight,
    faAngleLeft,
    faLocationDot,
    faPlay,
    faAward,
    faMagnifyingGlass,
    faCircleCheck,
    faEnvelope,
    faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

library.add(
    fab,
    faInstagram,
    faTiktok,
    faFacebook,
    faWhatsapp,
    faClock,
    faHouse,
    faCaretDown,
    faAngleRight,
    faAngleLeft,
    faLocationDot,
    faPlay,
    faAward,
    faMagnifyingGlass,
    faCircleCheck,
    faEnvelope,
    faBars,
    faFacebookF,
);

// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-multi-carousel/lib/styles.css";

Cypress.Commands.add("mount", mount);

// Example use:
// cy.mount(<MyComponent />)
