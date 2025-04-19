import toast from "react-hot-toast";


const getCard = () => {
    const card = localStorage.getItem('card');
    if(card){
        const cardParse = JSON.parse(card);
        return cardParse
    }else{
        return [];
    }
}

const setLocalCard = (phone) => {
    const saveCard = getCard();
    const checkCard = saveCard.find(p => p.id === phone.id);

    if(checkCard){
       toast.error('already added')
        return
    }else{
        saveCard.push(phone);
        toast.success('added success')
        const cardStr = JSON.stringify(saveCard)
        localStorage.setItem('card',cardStr);
    }
}

const removeCard = (phone) => {
    const saveCard = getCard();
    const checkCard = saveCard.filter(p => p.id !== phone.id);
    const phonesStr = JSON.stringify(checkCard);
    localStorage.setItem('card',phonesStr);
}


export {setLocalCard,getCard,removeCard};