const router = require('express').Router();
const { Op } = require('sequelize');
const { Business, Comment, User } = require('../db/models');
const {
  validateAdmin,
  validateUser,
  validateUserOrAdmin
} = require('../utils/permission');
const upload = require('../utils/multerConfig');
const cloudinary = require('../utils/cloudinaryConfig');

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const comments = await Comment.findAll({
      where: {
        id
      }
    });

    res.status(200).json(comments);
  } catch (err) {
    console.log(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const comments = await Comment.findAll({});

    res.status(200).json(comments);
  } catch (err) {
    console.log(err);
  }
});

router.post('/upload', upload.single('image'), async (req, res, next) => {
  try {
    const newPhoto = req.files['photo'].data.toString('base64');
    const type = req.files['photo'].mimetype;

    const result = await cloudinary.uploader.upload(
      `data:${type};base64,${newPhoto}`
    );

    res.status(200).json(result.url);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { businessId, userId } = req.body;
    const businessOwnerId = await Business.findByPk(Number(businessId), {
      include: [
        { model: Comment, include: { model: User } },
        { model: User, as: 'owner' }
      ]
    }).ownerId;

    if (!req.user) {
      res.status(403).send('You must be logged in to write a comment!');
    } else if (Number(userId) === Number(businessOwnerId)) {
      res
        .status(403)
        .send(
          'Not Authorized! Businesses Owners cannot write a comment on their own business!'
        );
    } else {
      const newComment = req.body;
      const createdComment = await Comment.create(newComment);

      res.status(201).json(createdComment);
    }
  } catch (err) {
    next(err);
  }
});

router.put('/:id', validateUser, async (req, res, next) => {
  const { id } = req.params;
  const commentObj = req.body;
  let comment = await Comment.findByPk(id);

  try {
    if (comment) {
      await comment.update(commentObj);

      res.status(200).send(comment);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const commentToRemove = await Comment.findByPk(id);

    if (!req.user.isAdmin && req.user.id !== commentToRemove.userId) {
      res.status(403).send('Not Authorized!');
    } else {
      if (commentToRemove) {
        const numRows = await commentToRemove.destroy();

        if (numRows) {
          res.sendStatus(204);
        }
      } else {
        res.sendStatus(404);
      }
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
