const pg = require("../../lib/postgres");

const all_clinics = `
    SELECT * FROM clinics
`;

const createClinicsQuery = `
    INSERT INTO clinics (clinic_name)
    VALUES ($1)
    RETURNING *
`;

const createClinics = (cname) => pg(createClinicsQuery, [cname]);

const clinics = () => pg(all_clinics);

module.exports = {
  clinics,
  createClinics,
};
