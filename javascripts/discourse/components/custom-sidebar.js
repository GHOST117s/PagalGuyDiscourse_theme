import Component from "@ember/component";

export default Component.extend({
  tagName: "div",
  classNames: ["custom-sidebar"]
});

const sidebarData = {
    categories: [
      {
        id: "mba",
        name: "MBA",
        count: "19.9K",
        lastUpdated: "1m ago",
        isExpanded: true,
        subCategories: [
          { name: "CAT", year: "2022" },
          { name: "IIFT", year: "2022" },
          { name: "XAT", year: "2022" },
          { name: "GMAT", year: "2022" },
          { name: "CMAT", year: "2022" },
          { name: "NMAT", year: "2022" },
          { name: "SNAP", year: "2022" },
          { name: "MAT", year: "2021" },
          { name: "GRE", year: "2022" },
          { name: "TISSNET", year: "2022" },
          { name: "ATMA", year: "2022" },
          { name: "MHCET (MBA)", year: "2022" },
          { name: "MICAT", year: "2022" },
          { name: "BISAT", year: "2022" },
          { name: "IRMASAT", year: "2022" },
          { name: "MH-CET MBA", year: "2022" },
        ],
      },
      {
        id: "jobs",
        name: "Jobs & Careers",
        count: "16.4K",
        lastUpdated: "15m ago",
        isExpanded: false,
      },
    ],
  };