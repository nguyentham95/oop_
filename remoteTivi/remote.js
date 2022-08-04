class Remote{
    constructor(id){
        this.id = id;
        

    }
    changeChanel(newChanel, tivi){
        //goi phuong thuc thay doi kenh tv
        tivi.setChanel(newChanel);
    }
    changeVolume(newVolume, tivi){
        //goi phuong thuc thay doi am luong tv
        tivi.setVolume(newVolume);
    }

}