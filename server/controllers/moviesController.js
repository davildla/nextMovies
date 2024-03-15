const express = require('express');
const router = express.Router();
const MoviesBl = require('../models/movies/bl');

router.route('/get-by-id/:id').get(async (req, resp) => {
    const { id } = req.params;

    MoviesBl.getMovieById(id)
        .then(data => {
            resp.json(data)
        })
        .catch(err => {
            console.error({ err });
            resp.status(500).json({ message: err.message });
        });
});

router.route('/get-paginated').get(async (req, resp) => {
    const page = parseInt(req.query.page || 1);
    const search = req.query.search;

    MoviesBl.getByPagination(page, search)
        .then(data => {
            resp.json(data)
        })
        .catch(err => {
            console.error({ err });
            resp.status(500).json({ message: err.message });
        });
});

router.route('/add-movie').post(async (req, resp) => {
    MoviesBl.addMovie(req.body)
        .then(data => {
            resp.status(201).json(data);
        })
        .catch(err => {
            console.error({ err });
            resp.status(500).json({ message: err.message });
        });
});

router.route('/edit-movie/:id').put(async (req, resp) => {
    const { id } = req.params;
    const update = req.body;

    MoviesBl.updateMovie(id, update)
        .then(data => {
            resp.json(data);
        })
        .catch(err => {
            console.error({ err });
            resp.status(500).json({ message: err.message });
        });
});

router.route('/delete-record/:id').delete(async (req, resp) => {
    const { id } = req.params;

    MoviesBl.deleteById(id)
        .then(data => {
            resp.json(data);
        })
        .catch(err => {
            console.error({ err });
            resp.status(500).json({ message: err.message });
        });
});


module.exports = router;
