var path=require("path"),devCheck=module.exports=Plugin.create("resourcesCopy");devCheck.run=function(e,t){var n=path.join(e.baseDirectory,"tests"),r=path.join(e.baseDirectory,"examples");fsExt.existsSync(n)&&fsExt.copydirSync(n,path.join(e.distDirectory,"tests")),fsExt.existsSync(r)&&fsExt.copydirSync(r,path.join(e.distDirectory,"examples")),t()};