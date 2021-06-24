import multer from 'multer'
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public/collections/')
    },
    filename: function(req,file,cb){
        var ext = file.originalname.substr(file.originalname.lastIndexOf('.'));
        cb(null,file.fieldname+ '-'+ Date.now()+ext)
    }
})

export default multer({storage: storage})