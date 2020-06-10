const menu = document.getElementById('menu');
        menu.onclick = () => {
            let x = document.getElementById('nav');
            if (x.className === "nav") {
                x.className += "res";
            } else {
                x.className = "nav";
            }
        }