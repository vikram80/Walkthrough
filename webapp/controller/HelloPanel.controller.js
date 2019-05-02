sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {
	"use strict";

	return Controller.extend("Walkthrough.controller.HelloPanel", {


		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Walkthrough.view.HelloPanel
		 */
		onInit: function () {

		},
			onPress: function (oEvt) {
			MessageToast.show("Hello App");
		},
		
		onOpenDialog: function(oEvt){
			var oView = this.getView();

			// create dialog lazily
			if (!this.byId("DialogFrag")) {
				// load asynchronous XML fragment
				Fragment.load({
					id: oView.getId(),
					name: "Walkthrough.view.DepotDirect"
				}).then(function (oDialog) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					oDialog.open();
				});
			} else {
				this.byId("DialogFrag").open();
			}
		},
		onCloseFrag: function(){
this.byId("DialogFrag").close();
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Walkthrough.view.HelloPanel
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Walkthrough.view.HelloPanel
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Walkthrough.view.HelloPanel
		 */
		//	onExit: function() {
		//
		//	}

	});

});