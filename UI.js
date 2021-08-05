class UI {
    static readURL(input,imgId) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById(imgId).setAttribute('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    static urlToImg(url,imgId){
        let urlField = document.getElementById(url);
        let image = document.getElementById(imgId);

        image.setAttribute('src',urlField.value);

    }
    static createSeo(source,fieldids,same=null){
        let i,k;
        let sameField;
        let selectedIdes =  fieldids;
        let sourcefield = document.getElementById(source);
        let sourceValue = sourcefield.value;
        sourceValue = sourceValue.toLowerCase();
        sourceValue = sourceValue.replaceAll(" ","-");
        if (same !== null){
            sameField = document.getElementById(same);
            sameField.value = sourcefield.value;
        }
        let fields = [];
        for (i=0;i<selectedIdes.length;i++){
            fields[i] = document.getElementById(selectedIdes[i]);
        }
        for(k=0;k<fields.length;k++){
            fields[k].value = sourceValue;
        }
    }

}
