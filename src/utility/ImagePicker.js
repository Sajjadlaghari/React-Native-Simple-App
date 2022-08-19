import ImagePickerMultiple from 'react-native-image-crop-picker';


///-----for multiple image selection---------
export const pickMultipleImage = (setImageList, imageList) => {
    ImagePickerMultiple.openPicker({
        multiple: true,
        mediaType: "photo",
        cropping: true
    }).then(images => {
        setImageList([...imageList, ...images])
    }).catch(err => { console.log(err) });
}

export const ImagePicker = (setImage) => {
    ImagePickerMultiple.openPicker({
        multiple: false,
        mediaType: "photo",
        cropping: true
    }).then(image => {
        setImage(image)
    }).catch(err => { console.log(err) });
}