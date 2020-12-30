const express = require('express');
const { Business, Comment, User } = require('../db/models');
const {
  validateAdmin,
  validateUser,
  validateUserOrAdmin
} = require('../utils/permission');
const { Op } = require('sequelize');
const router = express();

router.get('/', async (req, res, next) => {
  const { city, category } = req.query;

  try {
    let businesses;

    if (category && city) {
      businesses = await Business.findAll({
        where: {
          type: {
            [Op.eq]: category
          },
          city: {
            [Op.eq]: city
          }
        },
        include: [
          { model: Comment, include: { model: User } },
          { model: User, as: 'owner' }
        ]
      });
    } else if (city && !category) {
      businesses = await Business.findAll({
        where: {
          city: {
            [Op.eq]: city
          }
        },
        include: [
          { model: Comment, include: { model: User } },
          { model: User, as: 'owner' }
        ]
      });
    } else if (category && !city) {
      businesses = await Business.findAll({
        where: {
          type: {
            [Op.eq]: category
          }
        },
        include: [
          { model: Comment, include: { model: User } },
          { model: User, as: 'owner' }
        ]
      });
    } else {
      businesses = await Business.findAll({
        include: [
          { model: Comment, include: { model: User } },
          { model: User, as: 'owner' }
        ]
      });
    }

    res.status(200).json(businesses);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const business = await Business.findByPk(id, {
      include: [
        { model: Comment, include: { model: User } },
        { model: User, as: 'owner' }
      ]
    });

    res.status(200).json(business);
  } catch (err) {
    next(err);
  }
});

router.get('/:id/comments', async (req, res, next) => {
  try {
    const { id } = req.params;
    const business = await Business.findByPk(id, {
      include: [
        { model: Comment, include: { model: User } },
        { model: User, as: 'owner' }
      ]
    });
    const { comments } = business;

    res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
});

router.post('/:id/comments', async (req, res, next) => {
  try {
    const { id } = req.params;
    const selectedBusiness = await Business.findByPk(Number(id), {
      include: [
        { model: Comment, include: { model: User } },
        { model: User, as: 'owner' }
      ]
    });

    if (!req.user) {
      res.status(403).send('You must be logged in to write a comment!');
    } else if (
      req.user &&
      Number(req.user.id) === Number(selectedBusiness.ownerId)
    ) {
      res
        .status(403)
        .send(
          'Not Authorized! Businesses Owners cannot write a comment on their own business!'
        );
    } else {
      const newComment = req.body;
      const comment = await Comment.create(newComment);
      const business = await Business.findByPk(Number(id), {
        include: [
          { model: Comment, include: { model: User } },
          { model: User, as: 'owner' }
        ]
      });

      const comments = business.comments;
      const createdComment = comments.filter(
        (currentComment) => currentComment.id === comment.id
      )[0];

      res.status(201).json(createdComment);
    }
  } catch (err) {
    next(err);
  }
});

router.put('/:id/comments', async (req, res, next) => {
  try {
    const { id } = req.params;
    const business = await Business.findByPk(id, {
      include: [
        { model: Comment, include: { model: User } },
        { model: User, as: 'owner' }
      ]
    });
    const { comments } = business;

    res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id/comments', async (req, res, next) => {
  try {
    const { id } = req.params;
    const business = await Business.findByPk(id, {
      include: [
        { model: Comment, include: { model: User } },
        { model: User, as: 'owner' }
      ]
    });
    const { comments } = business;

    res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newBusiness = {};
    const allowedFields = [
      'isVerified',
      'address',
      'phone',
      'website',
      'images',
      'hours',
      'name',
      'city',
      'state',
      'postalCode',
      'longitude',
      'latitude',
      'isClosed'
    ];
    const providedFields = Object.keys(req.body).filter((key) =>
      allowedFields.include(key)
    );

    providedFields.forEach((field) => {
      newBusiness[field] = req.body[field];
    });

    const createdBusiness = await Business.create(newBusiness);

    res.status(201).json(createdBusiness);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  const businessObj = {};
  const allowedFields = [
    'isVerified',
    'address',
    'phone',
    'website',
    'images',
    'hours',
    'name',
    'city',
    'state',
    'postalCode',
    'longitude',
    'latitude',
    'isClosed'
  ];
  const providedFields = Object.keys(req.body).filter((key) =>
    allowedFields.include(key)
  );

  providedFields.forEach((field) => {
    businessObj[field] = req.body[field];
  });

  const { id } = req.params;
  const business = await Business.findByPk(id);

  try {
    if (business) {
      await business.update(businessObj);

      res.status(200).send(business);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', validateAdmin, async (req, res, next) => {
  try {
    const { id } = req.params;
    const businessToRemove = await Business.findByPk(id);

    if (businessToRemove) {
      const numRows = await businessToRemove.destroy();

      if (numRows) {
        res.sendStatus(204);
      }
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
