class inventory1{
    inventory(object) {
        var rice:any = object.rice;
        var wheat:any = object.wheat;
        var pulses:any= object.pulses;
        /*calculating the total price of rice.*/
        for (var key in rice) {
            console.log('\n');
            console.log("The total price of ", rice[key].rice_name, " is ", rice[key].weight * rice[key].price);
        }
        /*calculating the total price of wheat.*/
        for (var key in wheat) {
            console.log('\n');

            console.log("The total price of ", wheat[key].wheat_name, " is ", wheat[key].weight * wheat[key].price);
        }
        /*calculating the total price of pulses. */
        for (var key in pulses) {
            console.log('\n');
            //console.log(pulses[key]);

            console.log("the total price of ", pulses[key].pulse_name, " is ", pulses[key].weight * pulses[key].price);
        }
    }
}export=inventory1;