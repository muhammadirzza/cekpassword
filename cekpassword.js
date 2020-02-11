function CheckPass(str){
    var tes = str.split('')
    var alfabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    var numbers = '1234567890'.split('')
    var huruf = []
    var angka = []
    if(tes.length<6){
        return 'kurang karakter'
    }else{
        for (var i=0;i<tes.length;i++){
            for (var j=0;j<alfabet.length;j++){
                if (str[i]===alfabet[j]){
                    huruf.push(str[i])
                    if(huruf.length==tes.length){
                        return 'harus kombinasi'
                    }
                }
            }
            for (var k=0;k<numbers.length;k++){
                if(str[i]===numbers[k]){
                    angka.push(str[i])
                    if(angka.length==tes.length){
                        return 'harus kombinasi'
                    }
                }
            }
        }
        if((huruf.length+angka.length)<6 || angka.length ==0 || huruf.length ==0){
            return 'masih salah'
        }
    }
    return 'lolos uji'
}