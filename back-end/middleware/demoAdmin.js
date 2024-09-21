const demoAdmin = (req, res, next) => {
  if (req.user.userId == "ba98d693-bf1f-4064-9562-de61c5bd80e8") {
    return res.status(403).json({
      message:
        "Demo Admin cannot perform this action is read-only in some actions",
      data: null,
    });
  }

  next();
};

export default demoAdmin;
