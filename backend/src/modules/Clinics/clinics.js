const model = require("./model");

module.exports = {
  Clinics: async (_, res) => {
    try {
      const data = await model.clinics();
      res.status(200).send(data);
    } catch (e) {
      console.log(e.message);
    }
  },
  createClinics: async (req, res) => {
    try {
      const { clinic_name } = req.body;
      const newClinic = await model.createClinics(
        clinic_name,
      );
      res.status(201).send(newClinic);
    } catch (e) {
      console.log(e.message);
    }
  }
};
