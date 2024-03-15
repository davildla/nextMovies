const Movie = require('./movieSchema');

const addMovie = (data) => {
    return new Promise((resolve, reject) => {
        const obj = new Movie(data);
        obj.save((error, created) => {
            if (error) {
                reject(error);
            } else {
                resolve(created);
            }
        });
    });
};

const getMovieById = (id) => {
    return new Promise((resolve, reject) => {
        Movie.findById(id, (error, res) => {
            if (error) {
                reject(error);
            } else {
                resolve(res);
            }
        });
    });
};

const getByPagination = (page = 1, search = '') => {
    return new Promise(async (resolve, reject) => {
        const limit = 12;
        const query = {
            title: { $regex: new RegExp(search, 'i') }
        };
        // we reduce one because pages starts feom 1 while arry/db starts from 0
        const startIndex = (page - 1) * limit;
        const total = await (Movie.find(query).countDocuments().exec());
        const totalPageCount = Math.ceil(total / limit) || 1;

        try {
            let data = await (Movie.find(query)).limit(limit).skip(startIndex).exec();

            resolve({ meta: { totalRowCount: total, totalPageCount }, data });
            next();
        } catch (e) {
            reject(e);
        }
    });
};

const updateMovie = (id, update) => {
    return new Promise((resolve, reject) => {
        Movie.findByIdAndUpdate(id, update, { new: true }, (error, updated) => {
            if (error) {
                reject(error);
            } else {
                resolve(updated);
            }
        });
    });
};

const deleteById = (id) => {
    return new Promise((resolve, reject) => {
        Movie.findByIdAndDelete(id, (error, obj) => {
            if (error) {
                reject(error);
            } else {
                resolve(obj);
            }
        });
    });
};

module.exports = {
    addMovie,
    getMovieById,
    getByPagination,
    updateMovie,
    deleteById
};
