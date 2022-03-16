import generateSwap from './mergeSwap';
import generateTime from './mergeTime';
import generateSpace from './mergeSpace.js';
import generateCode from './mergeCode.js';

function mergeSortHandler(randomType){
    switch(randomType) {
        case 0:
            return generateSwap();
        case 1:
            return generateTime();
        case 2:
            return generateSpace();
        case 3:
            return generateCode();
        default:
            console.log("Something went wrong");
    }
}




export default mergeSortHandler;