import {shuffle} from 'd3-array';

function generateSpace(){
    let answers = {
        right: "right",
        wrong: shuffle(["wrong", "wrong", "wrong"]),
    }

    return answers;
}


export default generateSpace;
