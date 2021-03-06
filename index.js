import { Dimensions } from 'react-native';

let orientation;
class tracker {
    constructor() {
        this.layoutChange = this.layoutChange.bind(this);
    }
    init() {
        this.layoutChange();
    }
    layoutChange() {
        let {width, height} = Dimensions.get('window');
        this.setOrientation(width, height)
    }
    setOrientation(width, height) {
        if (width > height) {
            orientation = "landscape";
        }

        if (width < height) {
            orientation = "portrait";
        }

        if (width === height) {
            orientation = "square";
        }
    }
    orientation() {
        return orientation
    }
}

let trackerClass = new tracker();

export default trackerClass;




