sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"Walkthrough/model/models",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (UIComponent, Device, models, JSONModel, ResourceModel) {
	"use strict";

	return UIComponent.extend("Walkthrough.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set data model on view
			var oData = {
				recipient: {
					name: "HomeDepot"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);

			// set i18n model on view
			/*	var i18nModel = new ResourceModel({
					bundleName: "Walkthrough.i18n.i18n"
				});
				this.getView().setModel(i18nModel, "i18n"); */

			// enable routing
			var oRouter = this.getRouter();
			if (oRouter) {
				oRouter.initialize();
			}

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});

});