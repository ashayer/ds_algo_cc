import {shuffle} from 'd3-array';

function generateSpace(){
    let answers = {
        right: "n",
        wrong: shuffle(["nlogn", "1", "logn"]),
    }

    return answers;
}


export default generateSpace;
