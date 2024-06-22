const Form = require("../models/formModel");

exports.submitForm = async (req, res)=>{
    // if(!req.body.name || !req.body.email) {
    //     return res.status(400).json({message: "Name and Email are required"});
    // }

    try {
        const {name, email, rating, reason} = req.body;
        //Check email exist
        const existingForm = await Form.findOne({email});
        if(existingForm){
            return res.status(400).json({message:"Email already exists"})
        }
        const newForm = new Form({name, email, rating, reason});
        const saveData = await newForm.save();
        res.status(201).json({message:"Form Submitted Successfully", saveData});
    } catch (error) {
        // console.error("Error Submitting Form data",error);
        res.status(500).json({message:'Internal server error'})
    }
};

exports.getAllForms = async (req, res) => {
    try {
        const forms = await Form.find();
        // console.log("Form Data", forms);
        const totalForms = forms.length;
        
        // Calculate average rating
        const totalRatings = forms.reduce((sum, form) => sum + form.rating, 0);
        const averageRating = totalForms > 0 ? totalRatings / totalForms : 0;

        res.status(200).json({ forms, totalForms, averageRating });
    } catch (error) {
        // console.error("Error fetching form data", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};