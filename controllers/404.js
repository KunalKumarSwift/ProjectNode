exports.resourceNotFound = (req, res, next) => {
  res.status(404).render("404", { path: "", docTitle: "Not Found!!!" });
};
