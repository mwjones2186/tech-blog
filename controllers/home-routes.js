const router = require('express').Router();
// const { Gallery, Painting } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    // const dbGalleryData = await Gallery.findAll({
    //   include: [
    //     {
    //       model: Painting,
    //       attributes: ['filename', 'description']
    //     }
    //   ]
    // });

    // const galleries = dbGalleryData.map(gallery =>
    //   gallery.get({ plain: true })
    // );
    // TODO: Add a comment describing how we pass the session to the view
    res.render('homepage', {
      // galleries,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;
