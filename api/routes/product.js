//setup routes here
const express=require('express');
const router =express.Router();
router.get('/',(req,res,next)=>{
    res.status(200).json({
      message :'handing get req'
    });
});

router.post('/',(req,res,next)=>{
    res.status( 00).json({
      message :'handing post req'
    });
});

module.exports=router;
