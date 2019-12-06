const { ApiService } = require("./service");

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */

exports.run = async (req, res) => {
  let message = req.body.message;

  const service = new ApiService();
  const response = await service.getTodos();

  res.status(200).json(response.data);
};
