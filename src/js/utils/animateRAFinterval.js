const animateRAFInterval = {
    id: null,
    start: null,
    canceled: false,
    cancel(){
        //если нет id кадра для остановки анимации
        if(!this.id){
            return false;
        }
        cancelAnimationFrame(this.id);
        this.id = null;
        this.canceled = true;
    }
};


const startRafInterval = (cb) => {
    // если нет/false параметр создаем исключение
    if(!cb) {
        throw new Error("Callback function is undefined")
    }
    if(typeof cb !== "function"){
        throw new TypeError("Callback function is not function")
    }

    animateRAFInterval.canceled = false;

    //запуск анимации
    const animate = () => {
        cb();

        animateRAFInterval.id = requestAnimationFrame(animate);
    }
    //присваивание нового запланированного кадра
    animateRAFInterval.id = requestAnimationFrame(animate);
}

animateRAFInterval.start = startRafInterval;