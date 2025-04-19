import toast from "react-hot-toast";

const getPhones = () => {
    const localStoregePhone = localStorage.getItem('favorite');
    if(localStoregePhone){
        const phones = JSON.parse(localStoregePhone);
        return phones;
    }else{
        return []
    }
};

const setLocalPhones = (phone) => {
    const savePhone = getPhones();
    const checkPhone = savePhone.find(p => p.id === phone.id);

    if(checkPhone){
       toast.error('this phone already added')
        return
    }
    savePhone.push(phone);
    toast.success('added success')
    const phonesStr = JSON.stringify(savePhone);
    localStorage.setItem('favorite',phonesStr);
    
}

const removeFavorite = (id) => {
    const savePhone = getPhones();
    const removePhone = savePhone.filter(p => p.id !== id);
    // savePhone.push(removePhone);
    const phonesStr = JSON.stringify(removePhone);
    localStorage.setItem('favorite',phonesStr);
}

export {setLocalPhones,getPhones,removeFavorite};