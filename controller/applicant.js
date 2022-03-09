const getApplicants = (req, res) => {
    res.json({message: 'Get all applicants'})
};

const postApplicant = (req, res) => {
    res.json({message: 'Create applicants'})
};

const updateApplicant = (req, res) => {
    res.json({message: 'Update applicants'})
};

const deleteApplicant = (req, res) => {
    res.json({message: 'Delete applicants'})
};

module.exports = {
    getApplicants,
    postApplicant,
    updateApplicant,
    deleteApplicant 
}