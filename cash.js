function subbed(){
        var expendables;
        var total = document.getElementById("total").value;
        var expenses = document.getElementById("minus").value;
        var month = document.getElementById("month").value;
        var x = new Date();
        var getYear = x.getFullYear();
            if(getYear / 4 == 0 && getYear / 400 == 0){
                document.getElementById("feb").value = 29;
                }

        console.log('total : ' + total + ' expenses : ' + expenses + ' month : ' + month);

        var left = total - expenses;

        console.log('left : ' + left);

        var expendables = left / month;

        console.log('expendables : ' + expendables);
        var final = (expendables).toFixed(2);

        console.log('final : ' + final);

        document.getElementById("output").innerHTML = final;
        }
