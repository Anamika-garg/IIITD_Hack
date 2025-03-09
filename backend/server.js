const express = require("express");
const { getMergedData } = require("./getData");
const { getAmountData } = require("./getUserAmountData");

const app = express();

const cors = require('cors');
app.use(cors());

app.get("/", (req, res) => {
    return res.json({ message: "Hello World" });
})

app.get("/data/:userId", async (req, res) => {
    const {userId} = req.params;
    if(userId){
        const data = await getMergedData(userId);
        console.log(JSON.stringify(data));
        return res.json({ data });
    }
    else{
        return res.json({ message: "Please provide a user ID" });
    }
})

app.get("/amount/:amountId/:radioValue" , async(req,res) =>{
    const {amountId , radioValue} = req.params;
    console.log('amountId' , typeof(Number(amountId)))
    // console.log('amountId' , typeof(Number(userId)))
    console.log("radioValue" , radioValue)
    if(amountId){
        const data = await getAmountData(amountId , radioValue);
        // console.log(data);
        return res.json({
            data
        });
    }
    else{
        return res.json({
            error : "Fill all the details"
        })
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})