sap.ui.jsview("ztable_model.Table", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ztable_model.Table
	*/ 
	getControllerName : function() {
		return "ztable_model.Table";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ztable_model.Table
	*/ 
	createContent : function(oController) {
 		 
		//var oTF = new sap.m.Input();
		
		var oTable = new sap.m.Table("table1",{
			    			
			  
			    headerToolbar: new sap.m.Toolbar({ content : [ new sap.m.SearchField("SF1",
			    		                                      { width : "20%",
			    	                                            liveChange:oController.filter,
			    	                                            selectOnFocus:false
			    	                                            }),
			                                                  
			                                                  new sap.m.Button ({
			    	                                           text: "Create",
	                                                           icon: "sap-icon://create" }) ,
	                                                          
	                                                          new sap.m.Button ({
				    	                                       text: "Filter",
		                                                       icon: "sap-icon://filter" ,
		                                                      press: [oController.handlefilter,oController] }),
		                                                     
	                                                          
		                                                       new sap.m.Button ({
					    	                                       text: "Edit",
			                                                       icon: "sap-icon://edit" }) ,
		                                                          
			                                                   new sap.m.Button ({
						    	                                   text: "Delete",
				                                                   icon: "sap-icon://delete" }) 
				                                                   
			                                                      ]      
	                                               
	                                               
			    }),
			    	
			    
			
			
				columns: [ new sap.m.Column ({ header: new sap.m.Label({
					                           text: "Name",
					                           design: sap.m.LabelDesign.Bold})}),
					       new sap.m.Column ({ header: new sap.m.Label({
					    	                   text: "CompanyName",
					    	                   design: sap.m.LabelDesign.Bold})}),
					       new sap.m.Column ({ header: new sap.m.Label({
					    	                   text: "Title",
					    	                   design: sap.m.LabelDesign.Bold})}) ],
			    items: {
					       	path :"/value",
					       
					       	template: new sap.m.ColumnListItem({
					       		cells:[
					       		       new sap.m.Text({text: "{CustomerID}"}),
					       		       new sap.m.Text({text: "{CompanyName}"}),
					       		       new sap.m.Text({text: "{ContactName}"})
					       		       ]

					       	})}}); 
				
		        

		console.log(oTable);
		
		
		
		return new sap.m.Page({
			title : "Product Deatils",
			content : [ oTable ]
		});
		
		
	}

});