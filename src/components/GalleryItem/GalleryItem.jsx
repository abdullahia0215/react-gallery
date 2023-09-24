const GalleryItem = ({ item, getGalleryItems }) => { 
    console.log("in GalleryItem:", item);

    const [bioVisible, setbioVisible] = useState(false);

    const togglebioVisibility = () => {
        setbioVisible(!bioVisible);
    }
    const increaseLikes = (event) => {
        axios.put(`/gallery/liked/${item.id}`)
            .then(response => {
                getGalleryItems();
            })
            .catch(error => {
                console.log(error);
                console.error('Error updating likes');
            });
    }
};
export default GalleryItem;
   