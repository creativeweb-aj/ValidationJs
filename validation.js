// This is validation js created for simple setup validation on any page
// Created by ~Ajay Sharma~

// Use of this js is simple give id of input field then boom event set on input field it's keypress event


// Validation JS 
class ValidationJs{
	constructor(){
		// Common validtion obj
		this.commonObj = new commonValidationEvents();
	}

	// Set number input validation 
	setNumberValidation(inputId, isPaste, isKeyUp, message){
		// add number only validation event keypress
		this.numValidObj = new numberValidation(inputId);
		// set copy paste event on it if isPaste true
		if(isPaste){
			// Add copy paste event
			this.commonObj.copyPasteEvent(inputId, message);
		}
		if(isKeyUp){
			// add number keyup event
			this.commonObj.numberKeyUpEvent(inputId, false, message)
		}
	}

	// Set number or decimal number input validation
	setDecimalNumberValidation(inputId, isPaste, isKeyUp, message){
		// add number or decimal number only validation event keypress
		this.numValidObj = new decimalValidation(inputId);
		// set copy paste event on it if isPaste true
		if(isPaste){
			// Add copy paste event
			this.commonObj.copyPasteEvent(inputId, message);
		}
		if(isKeyUp){
			// add number keyup event
			this.commonObj.numberKeyUpEvent(inputId, true, message)
		}
	}
	
}

// Validation for number value input
class numberValidation{
	constructor(id){
		this.onlyNumber(id);
	}

	// Only except number input
	onlyNumber(inputId){
		// var thisObj = this;
		// inputId is input field id for add keypress event
		$('#'+inputId).keypress(function(e){
			if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
   		         return false;
   		    }
		});
	}
}

// Validation for decimal value input
class decimalValidation{
	constructor(id){
		this.decimalNumberKeyPress(id);
	}

	// Only except decimal number input
	decimalNumberKeyPress(inputId){
		// var thisObj = this;
		// inputId is input field id for add keypress event
		$('#'+inputId).bind('keypress', function(e){
			var regex = new RegExp("^[0-9.]+$");
		    var key = e.key;
		    if (!regex.test(key)) {
		       	return false;
		    }
		});
	}
}

class commonValidationEvents{
	constructor(){
		// Validation message class object
		this.validMsgObj = new validationMessage();
	}

	// Validation key up event
	numberKeyUpEvent(inputId, isDecimal, message){
		// var thisObj = this;
		// Create variable for message function call
		var validMsgObj = this.validMsgObj;
		$('#'+inputId).bind('keyup', function(){
			if(isDecimal){
				var regex = new RegExp("^[0-9.]+$");
				var value = $(this).val().trim();
				var count = 0
				for(var i=0; i<value.length; i++){
					if(value[i] == '.'){
						count += 1;
					}
				}
				if(count > 1){
					validMsgObj.validationMessage(true, inputId, 'Please enter only one decimal');
				}else{
					validMsgObj.validationMessage(false, inputId, 'Please enter only one decimal');
				}
			}else{
				var regex = new RegExp("^[0-9]+$");
				var value = $(this).val().trim();
			}
			
			if (!regex.test(value)) {
				validMsgObj.validationMessage(true, inputId, message);
		    }
			if(value == ""){
				validMsgObj.validationMessage(false, inputId, message);
			}
		});
	}

	// Copy paste event
	copyPasteEvent(inputId, message){
		// var thisObj = this;
		// Create variable for message function call
		var validMsgObj = this.validMsgObj;
		$('#'+inputId).bind('paste', function(){
			var regex = new RegExp("^[0-9]+$");
			var value = $(this).val().trim();
		    if (!regex.test(value)) {
				// Validation message set
				validMsgObj.validationMessage(true, inputId, message);
		    }
		});
	}
}


// Validation message class
class validationMessage{
	constructor(){

	}

	// Validation message function
	validationMessage(isShow, inputId, message){
		if(isShow){
			$('.v-msg-'+inputId).remove();
			$('#'+inputId).attr('style', 'border : 2px solid red !important');
			$('#'+inputId).after('<span class="v-msg-'+inputId+' text-danger">'+message+'</span>');
		}else{
			$('#'+inputId).attr('style', 'border: 2px solid black !important');
			$('.v-msg-'+inputId).remove();
		}
	}
}