let count = 0

    const value = document.querySelector('#value')
    const btns = document.querySelectorAll('.btn')
    console.log(btns)

    btns.forEach(function (i) {
        i.addEventListener("click", function(e) {
            const styles = e.currentTarget.classList;
            if(styles.contains("Decrease")){
                count--;
            } else if(styles.contains("Increase")){
                count++;
            } else if(styles.contains("Reset")){
                count = 0
            }

            if(count < 0) {
                value.style.color = "red";
            } else if (count > 0) {
                value.style.color = "green";
            } else if (count === 0) {
                value.style.color = "#222";
            }
            value.textContent = count;
        })
    });

    

