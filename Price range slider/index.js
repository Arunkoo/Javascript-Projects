var Range_Input = document.querySelectorAll(".range_input input");
var p = document.querySelectorAll(".PriceInput input");
var tester = document.querySelector(".slider .progress");
let priceGap = 1000;

p.forEach(input => {
    input.addEventListener("input", e => {
        let minval = parseInt(p[0].value),
            maxval = parseInt(p[1].value);
        if ((maxval - minval >= priceGap )&& maxval <= 10000) {
            if (e.target.className === "Min_input") {
                Range_Input[0].value = minval;
                tester.style.left = (minval / Range_Input[0].max) * 100 + "%";

            }
            else {
                Range_Input[1].value = maxval;
                tester.style.right = 100 - (maxval / Range_Input[1].max) * 100 + "%";
            }

        }
        

        console.log(minval, maxval, tester.style.left);
    });
});

Range_Input.forEach(input => {
    input.addEventListener("input", e=>{
        let minval = parseInt(Range_Input[0].value),
        maxval = parseInt(Range_Input[1].value);
        if(maxval - minval < priceGap ){
            if(e.target.className === "min_range"){
                Range_Input[0].value = maxval - priceGap;

            }
            else{
                Range_Input[1].value = minval + priceGap;
            }
            
        }
        else{
            p[0].value = minval;
            p[1].value = maxval;
            // this is for targeting styling of slider...

            tester.style.left = (minval / Range_Input[0].max) * 100 + "%";
            tester.style.right = 100 - (maxval / Range_Input[1].max) * 100 + "%";

        }
        
        console.log(minval, maxval, tester.style.left);
    });
});