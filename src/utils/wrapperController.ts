export const wrapperController = (controller) => (req, res, next) => {
  controller(req, res, next).catch(next);
};
