import Component from "@ember/component";
import { action } from "@ember/object";

export default Component.extend({
  tagName: "div",
  classNames: ["custom-sidebar"],
  categories: null,

  init() {
    this._super(...arguments);
    this.set('categories', [
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
    ]);
  },

  didInsertElement() {
    this._super(...arguments);
    this.setupEventListeners();
  },

  willDestroyElement() {
    this._super(...arguments);
    this.teardownEventListeners();
  },

  setupEventListeners() {
    const sidebar = this.element.querySelector('.discourse-sidebar');
    sidebar.addEventListener('click', this.handleCategoryClick);
  },

  teardownEventListeners() {
    const sidebar = this.element.querySelector('.discourse-sidebar');
    sidebar.removeEventListener('click', this.handleCategoryClick);
  },

  @action
  handleCategoryClick(event) {
    const categoryButton = event.target.closest('.category-button');
    if (categoryButton) {
      const subCategories = categoryButton.nextElementSibling;
      if (subCategories && subCategories.classList.contains('sub-categories')) {
        categoryButton.classList.toggle('expanded');
        subCategories.classList.toggle('expanded');
      }
    }
  }
});