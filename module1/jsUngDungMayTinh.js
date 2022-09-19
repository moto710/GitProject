
    function cong(){
        let soa = document.getElementById('soa').value;
            sob = document.getElementById('sob').value;
            cong = Number(soa) + Number(sob);
            tru = Number(soa) - Number(sob);
            nhan = Number(soa)*Number(sob);
            chia = Number(soa)/Number(sob);
            result;
        result = cong;
        document.getElementById("result").innerHTML = ('Result + : ' + result);
    }
    function tru(){
        let soa = document.getElementById('soa').value;
            sob = document.getElementById('sob').value;
            tru = Number(soa) - Number(sob);
            result;
        result = tru;
        document.getElementById("result").innerHTML = ('Result - : ' + result);
    }
    function nhan(){
        let soa = document.getElementById('soa').value;
            sob = document.getElementById('sob').value;
            nhan = Number(soa)*Number(sob);
            result;
        result = nhan;
        document.getElementById("result").innerHTML = ("Result x : " + result);
    }
    function chia(){
        let soa = document.getElementById('soa').value;
            sob = document.getElementById('sob').value;
            chia = Number(soa)/Number(sob);
            result;
        result = chia;
        document.getElementById("result").innerHTML = ("Result / :" + result);
    }