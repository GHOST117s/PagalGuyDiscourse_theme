import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { and } from "@ember/object/computed";
import discourseComputed, { observes } from "discourse-common/utils/decorators";

export default Component.extend({
  router: service(),
  tagName: "",
  // secondaryHeaderDisplayed: settings.enable_secondary_header,

  @discourseComputed("router.currentRouteName")
  displayForRoute(currentRouteName) {
    const enableSecondaryHeader = settings.enable_secondary_header;
    if (enableSecondaryHeader) {
      return true;
    }
  },

  secondaryHeaderDisplayed: and("displayForRoute"),

  // Setting a class on <html> from a component is not great
  // but we need it for backwards compatibility
  @observes("secondaryHeaderDisplayed")
  displayChanged() {
    document.documentElement.classList.toggle(
      "display-secondary-header",
      this.secondaryHeaderDisplayed
    );
  },

  didInsertElement() {
    this.displayChanged();
  },

  didDestroyElement() {
    document.documentElement.classList.remove("display-secondary-header");
  },
});
