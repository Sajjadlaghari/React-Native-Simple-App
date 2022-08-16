
import landscapeStyles from './landscapStyle';
import portraitStyles from './portraitStyle';




export default function responsiveStyles(screenInfo, w, h, isPortrait) {

    return isPortrait ? portraitStyles(w, h) : landscapeStyles(w, h)
}