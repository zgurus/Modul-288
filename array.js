var me = {
    FirstName: "Sujan",
    LastName: "Gurung",
    Lehrstelle: {
        Job: "Mediamatiker",
        Lehrfirma: "SIW",
        Lehrdauer: "4 Jahre",
        Schule: "BZZ"

    }
    };


    var x;
    for(x in me){
        console.log(me[x]);
    }

    const myJSON = JSON.stringify(me);

    var x;
    for(x in me){
        console.log(me[x]);
    }