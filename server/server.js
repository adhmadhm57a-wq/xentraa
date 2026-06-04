app.post("/login", async (req, res) => {

  const { username, password } = req.body;

  const student =
    await Student.findOne({
      username,
      password
    });

  if (!student) {

    return res.json({
      success: false
    });

  }

  res.json({
    success: true,
    student
  });

});
