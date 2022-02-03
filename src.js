    const form = document.getElementById("form");
    const d = document.getElementById(date);
    console.log(form);
    console.log(d);
    let now = new Date(2021, 0, 1);
    let today = (new Date()).toISOString().split('T')[0];
    console.log(today);

    // var b = document.querySelector("label");

    var b = document.querySelector("input");

    b.setAttribute("max", today);
    console.log(b);
    // date.setAttribute(max, today)

    function retrieveFormValue(event) {
        event.preventDefault();
        const date = form.querySelector('[name="date"]');
        console.log("data", date);

        const value = {date: date.value};
        console.log(value);
    }
    console.log(now);
    // today.setDate(today.getDate() - 1);
    console.log(today);
    
    // alert(today);
    console.log(today);

    form.addEventListener('submit', retrieveFormValue);

   