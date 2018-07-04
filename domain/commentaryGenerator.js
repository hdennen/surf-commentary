import * as words from './words/words';
import {generateRandom} from '../tools/utils';

export class CommentaryGenerator {
    constructor() {
        console.log('instantiated CommentaryGenerator');
        console.log(words)

    }

    subjectAction(surfer = 'he') {
        const actionIndex = generateRandom(words.actions.length);
        const action = words.actions[actionIndex];

        return `${surfer} ${action}`;
    }

    article() {
        return words.articles[generateRandom(words.articles.length)];
    }

    descriptiveComment() {
        const objectIndex = generateRandom(words.surfObjects.length);
        const prepositionIndex = generateRandom(words.prepositions.length);
        const wavePartIndex = generateRandom(words.waveParts.length);

        const surfObject = words.surfObjects[objectIndex];
        const preposition = words.prepositions[prepositionIndex];
        const wavePart = words.waveParts[wavePartIndex];

        const commentary = `${surfObject} ${preposition} ${wavePart}`;
        return commentary;
    }

    moveComment() {
        const adjIndex = generateRandom(words.adjectives.length);
        const moveIndex = generateRandom(words.surfMoves.length);

        const adjective = words.adjectives[adjIndex];
        const move = words.surfMoves[moveIndex];
        return `${adjective} ${move}`;
    }

    transitionPhrase() {
        const transition = words.transitions[generateRandom(words.transitions.length)];
        const article = words.articles[generateRandom(words.articles.length)];

        return transition + ' ' + article;
    }


    longComment(surfer = 'he') {
        const baseComment = this.descriptiveComment(surfer);
        const transitionPhrase = this.transitionPhrase();
        const moveComment = this.moveComment(surfer);

        return `${baseComment} ${transitionPhrase} ${moveComment}`;
    }

    generateCommentary(surfer = '') {
        const randomNumber = generateRandom(3);
        const subjectAction = this.subjectAction(surfer);
        let comment;
        switch (randomNumber) {
            case 0:
                comment = this.descriptiveComment();
                break;
            case 1:
                comment = this.article() + ' ' + this.moveComment();
                break;
            case 2:
                comment = this.longComment(surfer);
                break;
        }
        const commentary = subjectAction + ' ' + comment;
        return commentary;
    }
}