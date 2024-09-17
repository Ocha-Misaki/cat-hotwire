// Import and register all your controllers from the importmap under controllers/*

import { application } from "./application"
import FormController from "./form_controller.js"
application.register("form", FormController)
import ModalController from "./modal_controller.js"
application.register("modal", ModalController)
import ToastController from "./toast_controller.js"
application.register("toast", ToastController)
// Eager load all controllers defined in the import map under controllers/**/*_controller
// import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
// eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)
