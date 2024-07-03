const { JournalEntry, User } = require('../models');

exports.createEntry = async (req, res) => {
  const { title, content, category, date } = req.body;
  const userId = req.user.id;

  try {
    const entry = await JournalEntry.create({ title, content, category, date, userId });
    res.status(201).json(entry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEntries = async (req, res) => {
  const userId = req.user.id;

  try {
    const entries = await JournalEntry.findAll({ where: { userId } });
    res.json(entries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an existing journal entry
exports.updateEntry = async (req, res) => {
    const { id } = req.params;
    const { title, content, category, date } = req.body;
    const userId = req.user.id;
  
    try {
      const entry = await JournalEntry.findOne({ where: { id, userId } });
  
      if (!entry) {
        return res.status(404).json({ error: 'Entry not found' });
      }
  
      entry.title = title || entry.title;
      entry.content = content || entry.content;
      entry.category = category || entry.category;
      entry.date = date || entry.date;
  
      await entry.save();
      res.json(entry);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Delete a journal entry
  exports.deleteEntry = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;
  
    try {
      const entry = await JournalEntry.findOne({ where: { id, userId } });
  
      if (!entry) {
        return res.status(404).json({ error: 'Entry not found' });
      }
  
      await entry.destroy();
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

