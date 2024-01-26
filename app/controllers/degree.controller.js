const degreeService = require ('../services/degree.service');

module.exports = {

    async getDegree(req,res) {
        const { id } = req.params;
        const data = await degreeService.getDegree(id);
        if (data) {
          return  res.json(data)
        } else {
            return res.status(404).json({ message: "degree inexistant!"});
        }
    },

    async getAllDegree(req,res) {
        const data = await degreeService.getAllDegree();
        return res.json(data);
    }
}