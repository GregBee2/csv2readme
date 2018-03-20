var csv2readme = require('./csv2readme.js');
const definition = require("../package.json");

var options={
	input:{
		base:"data/base.csv",
		functionParam:"data/functionParams.csv",
		classDef:"data/classes.csv"
	},
	moduleName:"xassist-object",
	globalTOC:false,
	header:{
		title:"@xassist/xassist-object",
		explanation:["This module adds different methods to the generic javascript `Object`.",
			"It does not extend the javascript `Object` itself, but defines a subClass."].join("\r\n")
	},
	headerFiles:["src/installationModule.md"],
	includeDependencies:true,
	includeLicense:true,
	footerFiles:[/*"dependencies.md","src/license.md"*/],
	subTitle:"API",
	output:{
		file:"src/object.md"
	},
	baseLevel:3,
	headerTemplates:{
		moduleName:"xassist-object",
		moduleUrl:"https://raw.githubusercontent.com/GregBee2/xassist-object/master/dist/xAssist-object.min.js",
		libraryName:"xassist",
		libraryUrl:"https://github.com/GregBee2/xassist",
		moduleTest:"object()"
	},
	footerTemplates:{
		/*license:definition.license,
		licenseUrl:"https://choosealicense.com/licenses/"+definition.license.toLowerCase()*/
	}
};
csv2readme.init(options);

	
	