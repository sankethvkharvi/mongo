const User = require('../model/user');

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    console.log('✅ User created:', user);
    res.status(201).json(user);
  } catch (err) {
    console.error('❌ Create error:', err.message);
    res.status(500).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!user) return res.status(404).json({ error: 'User not found' });

    console.log('✅ User updated:', user);
    res.json(user);
  } catch (err) {
    console.error('❌ Update error:', err.message);
    res.status(500).json({ error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log(`📋 Found ${users.length} users`);
    res.json(users);
  } catch (err) {
    console.error('❌ Fetch error:', err.message);
    res.status(500).json({ error: err.message });
  }
};
