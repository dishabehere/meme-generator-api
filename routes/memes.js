import express from 'express';
const router = express.Router();
import fs from 'fs';
import {v4} from 'uuid';

const readFromFile = (filename) => {
    const contents = JSON.parse(fs.readFileSync(`data/${filename}.json`));
    return contents;
};

const writeToFile = (filename, contents) => {
    fs.writeFileSync(`data/${filename}.json`, JSON.stringify(contents));
};

const getMemes = () =>  (readFromFile('memes'));

router.get('/', (req, res) => {
    res.json(getMemes());
});

router.get('/:id', (req, res) => {
    const photos = getMemes();
    const photo = photos.find(p => p.id === req.params.id);
    photo ? res.json(photo) : res.status(404).send('Photo not found');
});


export default router;