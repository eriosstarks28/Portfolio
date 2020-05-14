const express = require('express');
const router = express.Router();
const { data } = require('../data.json');
const { projects } = data;


router.get('/:id', (req, res) => {
    res.render('project', {
        projects: projects,
        title: projects[req.params.id].project_name,
        description: projects[req.params.id].description,
        technologies: projects[req.params.id].technologies,
        liveLink: projects[req.params.id].live_link,
        githubLink: projects[req.params.id].github_link,
        mainImg: projects[req.params.id].image_urls



    });
});

module.exports = router;