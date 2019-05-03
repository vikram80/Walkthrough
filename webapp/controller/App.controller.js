sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel, Fragment) {
	"use strict";

	return Controller.extend("Walkthrough.controller.App", {

		onOpenDialog: function (oEvt) {
			this.getOwnerComponent().openHelloDialog();
		//	MessageToast.show("Hello App1");
			// var oView = this.getView();

			// // create dialog lazily
			// if (!this.byId("DialogFrag")) {
			// 	// load asynchronous XML fragment
			// 	Fragment.load({
			// 		id: oView.getId(),
			// 		name: "Walkthrough.view.DepotDirect"
			// 	}).then(function (oDialog) {
			// 		// connect dialog to the root view of this component (models, lifecycle)
			// 		oView.addDependent(oDialog);
			// 		oDialog.open();
			// 	});
			// } else {
			// 	this.byId("DialogFrag").open();
			// }
		},
		onCloseFrag: function () {
			this.byId("DialogFrag").close();
		},
		onPress: function (oEvt) {
			MessageToast.show("Hello App");
		}
	});

});