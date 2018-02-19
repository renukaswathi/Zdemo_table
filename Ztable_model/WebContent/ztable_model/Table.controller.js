sap.ui.controller("ztable_model.Table", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ztable_model.Table
*/
	onInit: function() {
		
		var URL = "http://services.odata.org/V4/Northwind/Northwind.svc/Customers",
		oModel = new sap.ui.model.json.JSONModel(URL, true);				
		sap.ui.getCore().setModel(oModel);
         
		
	
	   // var oBinding = oTable1.getBinding("items");
	   // oBinding.filter(oFilter);
		
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ztable_model.Table
*/
	//onBeforeRendering: function() {
		
	//},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ztable_model.Table
*/
	onAfterRendering: function() {
	//	debugger;
//		var oFilter = new sap.ui.model.Filter("CustomerID","EQ","10");
	//    var oBinding = sap.ui.getCore().byId("table1").getBinding("items");
	    
	   // oBinding.filter(oFilter);
	    
	    
	    
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ztable_model.Table
*/
//	onExit: function() {
//
//	}
	
	//filterTable: function(oEvent) {

		 //debugger;
		//var data = oEvent.getSource().getValue();
		//debugger;
		 //var oFilter = new sap.ui.model.Filter("CustomerID",
		 //sap.ui.model.FilterOperator.Contains,"9");
		 
		 //var oElement = sap.ui.getCore().getElementById("table1");
		 //var oBinding = element.getBinding("items");
		 //oBinding.filter(oFilter);
	//},
	filter:function(oEvent){
		
    	var para = oEvent.getParameters();
    	para = para.newValue;
    	
    	var oFilter = new sap.ui.model.Filter("CustomerID",sap.ui.model.FilterOperator.Contains,para);
    	
    	var oElement = sap.ui.getCore().getElementById("table1");
		 var oBinding = oElement.getBinding("items");
		 oBinding.filter(oFilter);	
    	
	},
	
	DialogPopUp:null,
	
	handlefilter:function(swathi){
		  
		
		if(this.DialogPopUp==null){

			this.DialogPopUp = sap.ui.xmlfragment("ztable_model.fragments.dialog");
		//	oController.getView().addDependent(this._oDialog);
	     //   getView().addDependent(this._valueHelpDialog);
			
			
		}
		
		this.DialogPopUp.open();
		
		
		
		//this.inputId = oController.oSource.sId;
		// create value help dialog
	//	if (!this._valueHelpDialog) {
		//this._valueHelpDialog = sap.ui.xmlfragment("view2.Error_List",this);
		
	//	}
			
			//this.dialog = sap.ui.xmlfragment("ztable_model.fragments.dialog", this);
			//this.getView().addDependent(this.fragment);
			//this.dialog.open();
		},
		 
		
		handleok:function(oEvent){
			debugger;	
		},
		
		closeDialog: function() {
			debugger;
			this.dialog.close();
		}
	
	
	

});